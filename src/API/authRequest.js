import axios from 'axios'

const API=axios.create({baseURL:"http://localhost:5000"})

export const logIn=(formData)=>{

    API.post('/auth/login',formData)
    
}
export const signUp=async (formData)=>{
    let res= await API.post('/auth/register',formData)
    return res;
    
}