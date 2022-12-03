import './App.css';
import React, { useState, createContext } from "react";
import Auth from './pages/Auth/Auth';
import {Home} from './pages/home/Home';
import {BrowserRouter,  Routes,Route} from 'react-router-dom'
import ProfilePage from './pages/Profile/ProfilePage';
import LandingPage from './pages/LandingPage/LandingPage'
import Chat from './pages/Chat/Chat';
// export const store = createContext();
function App() {
  // const [users, setUsers] = useState([]);
  // const [pd,setpd]=useState([]);

  return (
    <div className="App">
      <div className='blur' style={{top:'-18%',right:'0'}}></div>
      <div className='blur' style={{top:'36%' ,left:'-8rem'}}></div>
      <div className='blur' style={{top:'66%' ,right:'-8rem'}}></div>
      <div className='blur' style={{top:'80%' ,right:'38rem'}}></div>
      {/* <store.Provider value={{users,setUsers,pd,setpd}}> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* </store.Provider> */}
    </div>
    
  );
}



export default App;
