import React from 'react'
// import Cover from '../../images/bac_cover.jpg'
// import Profile from '../../images/trail.png'
import './ProfileCard.css'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { store } from "../../App";
const ProfileCard = () => {
  const navigate=useNavigate();
  // const { users} =useContext(store);
  // console.log(users.username)
  const {user} =useSelector( (state)=>state.authReducer.authData)
  console.log(user)
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  const ProfilePage=false;
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
        
            <img src={user.profilePicture?serverPublic+user.profilePicture:serverPublic+"defaultCover.jpg"} alt=""/>
            <img src={user.coverPicture?serverPublic+user.coverPicture:serverPublic+"defaultProfile.png"} alt=""/>
        </div>
        <div className='ProfileName'>
        {
            <span>{user.firstname}</span>     
        }
        {
          <span>{user.username}</span>
        }
        </div>
        <div className='followStatus'>        
          <hr/>
          <div>
          <div className='follow'>
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className='vl' style={{height: '100%',
    width: 1,
    backgroundColor: '#909090'}}></div>
          <div className='follow'>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {ProfilePage&&(
            <>
            <div className="vl" style={{height: '100%',width: 1,backgroundColor: '#909090'}}>            
            </div>
            </>
          )}
          </div>
          <hr/>
        </div>
        {/* {ProfilePage?"":<span onClick={()=>{navigate('/profile')}}>
          My Profile
        </span>} */}
        {ProfilePage?"":<span>
          <Link style={{textDecoration:"none",color:"inherit"}} to={`/profile/${user._id}`}>My Profile</Link>
          </span>}
    </div>
  )
}

export default ProfileCard