// import * as AuthApi from '../API/authRequest'
import axios from 'axios'
const API=axios.create({baseURL:"http://localhost:5000"})

export const logIn=(formData)=>
    async(dispatch)=>{
        dispatch({type:"AUTH_START"})
        try {
            const res= await API.post('/auth/login',formData)
            const data=res.data;
            dispatch({type:"AUTH_SUCCESS",data:data})
        } catch (error) {
            console.log(error)
            dispatch({type:"AUTH_FAIL"})
        }

    }

export const signUp=(formData)=>
    async(dispatch)=>{
        dispatch({type:"AUTH_START"})
        try {
            const res= await API.post('/auth/register',formData) 
            const data=res.data;
            dispatch({type:"AUTH_SUCCESS",data:data})
        } catch (error) {
            console.log(error)
            dispatch({type:"AUTH_FAIL"})
        }

    }

