'use client'
import useAuthentication from '@/hoks/useAuthentication';
import customAxios from '@/utils/customAxios';
import axios, { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState , ChangeEvent, useEffect} from 'react'

interface IPropiedadId{
    params:{
        id:string;
    }
}
interface IUsuarioEntity {
    id: number;
    nombre: string;
    edad: number;
}
interface IUpdateUsuarioResponse {
    message: string;
    data: IUsuarioEntity;
}

const editarUsuario = ({params:{id}}:IPropiedadId) => {

    const [nombre, setNombre] = useState('') 
    const [edad, setEdad] = useState(0) 

    const getUsuarios = async () => {
        try {
            const response = await customAxios.get<IUsuarioEntity>(`/usuarios${id}`);
            console.log('Usuarios:', response.data)
            setNombre(response.data.nombre)
            setEdad(response.data.edad)
        } catch (error) {
            if(isAxiosError(error)){
                console.log('Error de axios', error)
            }else{
                console.log('Otro error', error)
            }
        }
    }
    useEffect(() =>{
        getUsuarios()
    } ,[] )
    const handleNombreChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setNombre(event.currentTarget.value);
       }
    const handleEdadChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setEdad(Number(event.currentTarget.value));
       }
    const updateUsuario = async () => {
        try {
            const response = await customAxios.put<IUpdateUsuarioResponse>(`/usuarios${id}`, {
                nombre,
                edad
            },{
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }});
          console.log('Message:', response.data.message)
    
          console.log('Data:', response.data.data)
        } catch (error) {
          if(isAxiosError(error)){
            console.log('Error de axios', error)
          }else{
            console.log('Otro error', error)
          }
        }
      }
    return(
    <div> 
        <div className='flex flex-col'>
            <label htmlFor="firstName">Nombre:</label>
            <input onChange={handleNombreChange} id='firstName' type="text" value={nombre} />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="firstName">Edad:</label>
            <input onChange={handleEdadChange} id='firstName' type="number" value={edad} />
        </div>
        <button onClick={updateUsuario}>Actualizar</button>
    </div>
  )
}

export default editarUsuario