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
    const[com,setcom]=useState(false)
    const likehandler=()=>{
        if(likestate===false){
            setlikestate(true)
        }
        else{
            setlikestate(false)
        }
    }
    const commenthandler=()=>{
        // setModalOpened(true)
        setcom(!com)
    }
  return (
   <div className='Post'>
    <img src={data.img} alt=""/>
    <div className='PostReact'>
        <div className='li' onClick={()=>likehandler()}>
        {likestate?<BsHeartFill style={{color:'green',height:'30px',width:'30px'}}/>:<BsHeart style={{color:'green',height:'30px',width:'30px'}}/>}
        </div> 
    <FaCommentDots style={{color:'green',height:'30px',width:'30px'}} onClick={commenthandler}/>   
    <CommentModal modalOpened={modalOpened} setModalOpened={setModalOpened}></CommentModal> 
    <FaShare style={{color:'green',height:'30px',width:'30px'}}/>
    </div>
    <span style={{fontSize:'12px'}}>{data.likes} Likes</span>
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
        {/* <span><b>{data.name}</b></span> */}
        <span>{data.desc}</span>
    </div>
   </div>
  )
}


export default Post