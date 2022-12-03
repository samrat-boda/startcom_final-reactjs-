import React from 'react'
import Cover from '../../images/bac_cover.jpg'
import Profile from '../../images/trail.png'
import './ProfileCard.css'
import {useNavigate} from 'react-router-dom'
// import { store } from "../../App";
const ProfileCard = () => {
  const navigate=useNavigate();
  // const { users} =useContext(store);
  // console.log(users.username)


  const ProfilePage=false;
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={Cover} alt=""/>
            <img src={Profile} alt=""/>
        </div>
        <div className='ProfileName'>
        {
            // users.firstname&&<span>{users.firstname}</span>
            <span>kartheek</span>     
        }
        {
          // users.username&&<span>{users.username}</span>
          <span>kartheek.2159</span>
        }
        </div>
        <div className='followStatus'>        
          <hr/>
          <div>
          <div className='follow'>
            <span>25</span>
            <span>Following</span>
          </div>
          <div className='vl' style={{height: '100%',
    width: 1,
    backgroundColor: '#909090'}}></div>
          <div className='follow'>
            <span>10</span>
            <span>Followers</span>
          </div>
          {ProfilePage&&(
            <>
            <div className="vl" style={{height: '100%',width: 1,backgroundColor: '#909090'}}>            
            </div>
            <div className='follow'>
              <span>3</span>
              <span>Posts</span>
            </div>
            </>
          )}
          </div>

          <hr/>
        </div>
        {ProfilePage?"":<span onClick={()=>{navigate('/profile')}}>
          My Profile
        </span>}
    </div>
  )
}

export default ProfileCard