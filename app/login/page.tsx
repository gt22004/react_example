'use client'
import useAuthentication from '@/hoks/useAuthentication';
import axios, { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState , ChangeEvent} from 'react'

interface ILoginResponse {
    token: string;
  }
  
  interface ILoginBody {
    username: string;
    password: string;
  }
  
const login = () => {
   const router = useRouter()
   const [persistAuthentication] = useAuthentication()
   const [email, setEmail] = useState('') 
   const [password, setPassword] = useState('') 


   const handleEmailChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.currentTarget.value);
   }

   const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.currentTarget.value);
   }

   const login = async () => {
    try {
      const response = await axios.post<ILoginResponse>('http://localhost:8000/login', {
        username: email,
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      persistAuthentication({token: response.data.token})
      console.log('Se inicio sesion correctamente.')
      router.push('/examples')
    
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Error de axios', error);
        alert(error);
      }else{
        console.log('Otro tipo de error', error);
      }
    }
  }

  return(
    <div> 
        <div className='flex flex-col'>
        <label htmlFor="firstName">Correo:</label>
        <input onChange={handleEmailChange} id='firstName' type="text" value={email} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Contraseña:</label>
        <input onChange={handlePasswordChange} id='firstName' type="password" value={password} />
      </div>
      <button onClick={login}> Ingresar </button>
    </div>
  )
}

export default login