import React,{useState,useRef} from 'react'
import './PostShare.css'
import Profile from '../../images/trail.png'
import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
import {v4 as uuidv4} from 'uuid'; 
import { PostsData } from '../../Data/PostsData'

// import postPic3 from '../../images/bb.png'

const PostShare = () => {
  const[image,setImage]=useState();
  const[postData,setPostData]=useState({
    img:"",
    desc:"",
    liked:false,
    likes:200,
    id:uuidv4(),
  })
  const imageRef=useRef();
  const onImageChange=(event)=>{
    console.log(event.target.files[0])
    if(event.target.files&&event.target.files[0]){
      let img=event.target.files[0];

      setImage({
        image:URL.createObjectURL(img)
      }
      )
     
      // console.log(image)
      // setPostData({...postData,[img]:image})

    }
  }
  const textHandler=(e)=>{
    setPostData({...postData, desc:e.target.value})
  }
  const addPostHandler=(event)=>{
    event.preventDefault();
    event.currentTarget.disabled = true;
  //  console.log(postData)
    PostsData.push(postData)
    console.log(PostsData)
    
    // setImage('')
    // postData.desc=''
  }
  return (
    <div className='PostShare'>
        <img src={Profile} alt=""/>    
        <div>
        <input type="text" value={postData.desc}  name="desc" placeholder="What's in ur Mind" onChange={textHandler} /> 
        <div className='postOptions'>
            <div className='option' onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            Photo
            </div>
            <div className='option'>
            <UilPlayCircle/>
            Video
            </div>
            <button className='button-post' onClick={addPostHandler}>Share</button>
            <div style={{display:'none'}}>
              <input type='file' name='img' ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image&&
          <div className='previewImage'>
            <UilTimes onClick={()=>setImage(null)}  />
            <img src={image.image} alt=""/>
          </div>
        }
        </div>    
        
    </div>
  )
}

export default PostShare