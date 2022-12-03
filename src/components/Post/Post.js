import React,{useState}from 'react'
import './Post.css'
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

import { FaCommentDots} from "react-icons/fa";
import { FaShare} from "react-icons/fa";
import CommentModal from '../CommentModal/CommentModal'
const Post = ({data}) => {
    const [modalOpened,setModalOpened]=useState(false);
    const [likestate, setlikestate] = useState(data.liked)
    const likehandler=()=>{
        if(likestate===false){
            setlikestate(true)
        }
        else{
            setlikestate(false)
        }
    }
  return (
   <div className='Post'>
    <img src={data.img} alt=""/>
    <div className='PostReact'>
        <div className='li' onClick={()=>likehandler()}>
        {likestate?<BsHeartFill style={{color:'green',height:'30px',width:'30px'}}/>:<BsHeart style={{color:'green',height:'30px',width:'30px'}}/>}
        </div> 
    <FaCommentDots style={{color:'green',height:'30px',width:'30px'}} onClick={()=>setModalOpened(true)}/>   
    <CommentModal modalOpened={modalOpened} setModalOpened={setModalOpened}></CommentModal> 
    <FaShare style={{color:'green',height:'30px',width:'30px'}}/>
    </div>
    <span style={{fontSize:'12px'}}>{data.likes} Likes</span>
    <div className='detail'>
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
    </div>
   </div>
  )
}


export default Post