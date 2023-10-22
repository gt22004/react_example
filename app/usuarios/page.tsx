'use client'
import customAxios from '@/utils/customAxios';
import React, { useState , ChangeEvent, useEffect} from 'react'
import axios, { isAxiosError} from 'axios'
import { useRouter } from 'next/navigation';

interface IUsuarioEntity {
    id: number;
    nombre: string;
    edad: number;
}

interface IUpdateUsuarioResponse {
    message: string;
    data: IUsuarioEntity;
}
const usuarios = () => {
    const router = useRouter()

    const [usuario, setUsuario] = useState<IUsuarioEntity[]>([]) 

    const getAllUsuarios = async () => {
        try {
            const response = await customAxios.get<IUsuarioEntity[]>('/usuario');
            console.log('Usuarios:', response.data)
            setUsuario(response.data)
        } catch (error) {
            if(isAxiosError(error)){
                console.log('Error de axios', error)
            }else{
                console.log('Otro error', error)
            }
        }
    }
    
    useEffect(() =>{
        getAllUsuarios()
    } ,[] )
    const deleteUsuario = async (id:number) => {
        try {
            await customAxios.delete<IUpdateUsuarioResponse>(`/usuarios${id}`);
            getAllUsuarios()
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
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Botones</th>
                    </tr>
                </thead>
                <body>
                    {usuario.map((usuario)=>{
                        const editar = () => {
                            router.push(`/usuarios${usuario.id}`)
                        }
                        const eliminar = () =>{
                            deleteUsuario(usuario.id)
                        }

                        return (<tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.edad}</td>
                        <td>
                            <button onClick={editar}>Editar</button>
                            <button onClick={eliminar}>Eliminar</button>
                        </td>
                    </tr>)})}

                </body>
            </table>

        </div>
    )
}

export default usuarios