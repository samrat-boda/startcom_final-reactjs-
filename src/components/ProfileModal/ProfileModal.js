import { Modal, useMantineTheme } from '@mantine/core';
import React, { useState,useContext} from 'react'
// import {store} from "../../App";
function ProfileModal({modalOpened,setModalOpened}) {

  const theme = useMantineTheme();
  // const {pd,setpd}=useContext(store);
  const [profd,setprofd]=useState({FirstName:"",LastName:"",worksAT:"",livesIN:"",Country:"",Status:""})
  const handleChange=(e)=>{
    setprofd({...profd,[e.target.name]:e.target.value})

  }
  const updateHandler =(event)=>{
    event.preventDefault();
    // console.log(profd);
    // setpd(profd);  
    // console.log(pd);

  }
  return (

    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
     <form className='infoForm' onSubmit={updateHandler}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
            onChange={handleChange}
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="LIves in"
            onChange={handleChange}
          />

          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="Status"
            placeholder="Status"
            onChange={handleChange}
          />
        </div>
        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton" type='submit'>Update</button>

     </form>
    </Modal>
  );
}

export default ProfileModal;