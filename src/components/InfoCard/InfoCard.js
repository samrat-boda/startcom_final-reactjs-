import React, { useState ,useContext} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';
// import { store } from "../../App";
const InfoCard = () => {
    const [modalOpened,setModalOpened]=useState(false);
    // const { pd } =useContext(store);
    // console.log(pd)
    // const[isPenClick,setisPenClick]=useState(false);
  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>
        <div className='info'>
            <span><b>Status </b></span>
            {/* { pd.Status&&<span>{pd.Status}</span>} */}
        </div>
        <div className='info'>
            <span><b>Lives in </b></span>
            {/* { pd.livesIN&&<span>{pd.livesIN}</span>} */}
        </div>
        <div className='info'>
            <span><b>Works at </b></span>
            {/* { pd.worksAT&&<span>{pd.worksAT}</span>} */}
        </div>
        <button className='button-lo'>LogOut</button>
    </div>
  )
}

export default InfoCard