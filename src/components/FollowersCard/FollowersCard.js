import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className='f'> 
        <h3>People Following You</h3>
    <div  className="FollowersCard">
      
        {
            Followers.map((follower,id)=>{
                return (
                    <div className='follower'>
                        <div>
                            <img src={follower.img} alt="" className='followerImg'/>
                            <div className='name'>
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                                
                            </div>
                        </div>
                        <button className='button'>Follow</button>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default FollowersCard