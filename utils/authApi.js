import {apiClient} from './apiClient'
export const Login=(userData)=> apiClient.post('/login', userData);
export const Register=(userData)=>apiClient.post('/register',userData)