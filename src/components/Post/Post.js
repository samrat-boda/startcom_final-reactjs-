import React,{useState}from 'react'
import './Post.css'
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import {FaRegTrashAlt} from 'react-icons/fa'
import { FaCommentDots} from "react-icons/fa";
import { FaShare} from "react-icons/fa";
import CommentModal from '../CommentModal/CommentModal'
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from '../../API/postRequest';
import { deletePosts } from '../../actions/postAction';
const Post = ({data}) => {
    const {user}=useSelector((state)=>state.authReducer.authData)
    const [liked,setLiked]=useState(data.likes.includes(user._id))
    const [likes,setLikes]=useState(data.likes.length)
    const [modalOpened,setModalOpened]=useState(false);
    const [likestate, setlikestate] = useState(data.liked)
    const[com,setcom]=useState(false)
    // console.log(data._id,user._id)
    const dispatch=useDispatch()
    // console.log(data.userId)
    // console.log(user._id)
    // console.log(data)
    // console.log(user)
    const likehandler=()=>{
        // if(likestate===false){
        //     setlikestate(true)
        // }
        // else{
        //     setlikestate(false)
        // }
        setLiked(!liked)
        likePost(data._id,user._id)
        
        liked?setLikes((prev)=>prev-1):setLikes((prev)=>prev+1)
    }
    const commenthandler=()=>{
        // setModalOpened(true)
        setcom(!com)
    }
    console.log(data)
    
  return (
   <div className='Post'>
    <img src={data.image?process.env.REACT_APP_PUBLIC_FOLDER+data.image:""} alt=""/>
    <div className='PostReact'>
        <div className='li' onClick={()=>likehandler()}>
        {liked?<BsHeartFill style={{color:'green',height:'30px',width:'30px'}}/>:<BsHeart style={{color:'green',height:'30px',width:'30px'}}/>}
        </div> 
    {/* <FaCommentDots style={{color:'green',height:'30px',width:'30px'}} onClick={commenthandler}/>   
    <CommentModal modalOpened={modalOpened} setModalOpened={setModalOpened}></CommentModal> 
    <FaShare style={{color:'green',height:'30px',width:'30px'}}/> */}
    {/* <FaRegTrashAlt style={{color:'green',height:'30px',width:'30px'}} onClick={deleteHandler}/> */}
    </div>
    <span style={{fontSize:'12px'}}>{likes} Likes</span>
    {com&& 
        <div className='comments'>
            {/* <h5>Comments</h5> */}
            <input type="text" v placeholder="Enter Comment"  /> 
            <span>First commenthandler</span>
            <span>First commenthandler</span>
            <span>First commenthandler</span>
            <span>First commenthandler</span>
            <span>First commenthandler</span>
            
        </div>
       }
    <div className='detail'>
        <span><b>{data.username}</b></span>
        <span>{data.desc}</span>
    </div>
   </div>
  )
}


export default Post