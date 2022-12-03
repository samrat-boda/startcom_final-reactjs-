import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

// Get User
export const getUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const user=await UserModel.findById(id);
        if(user){
            const {password,...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user")
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

//Update User
export const updateUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId,currentUserAdminStatus,password}=req.body;
    if(id===currentUserId || currentUserAdminStatus){
        try {
            if(password){
                const salt=await bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(password,salt);
            }
            const user=await UserModel.findOneAndUpdate(id,req.body,{new:true}) //new true means it returns the updated one 
            res.status(200).json(user)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("Access Denied! You can Only Update ur Own Profile")
    }
}

//Delete User

export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId,currentUserAdminStatus}=req.body;
    if(currentUserId===id||currentUserAdminStatus){
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted Successfully")
        } catch (error) {
            res.status(500).json(error);
            
        }
    }
    else{
        res.status(403).json("Access Denied! You can Only Delete ur Own Profile")
    }
}

//Follow user

export const followUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("Acction Forbidden")//avoiding user to follow himself
    }
    else{
        try {
            const followUser=await UserModel.findById(id);
            const followingUser=await UserModel.findById(currentUserId)
            if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push:{followers:currentUserId}})
                await followingUser.updateOne({$push:{following:id}})
                res.status(200).json("User Followed")
            }
            else{
                res.status(403).json("Already following the user")
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

//UnFollow user

export const unfollowUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("Acction Forbidden")//avoiding user to follow himself
    }
    else{
        try {
            const followUser=await UserModel.findById(id);
            const followingUser=await UserModel.findById(currentUserId)
            if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull:{followers:currentUserId}})
                await followingUser.updateOne({$pull:{following:id}})
                res.status(200).json("User UnFollowed")
            }
            else{
                res.status(403).json("Not following the user")
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
}