'use client';
import React, { ChangeEvent, useState } from 'react'
import UsedCar, {IUsedCar} from '@/components/UserCard';
import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Guardar Objetos',
}

type TRoles = 'Client' | 'Admin';

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  role : string;
}

const Example2 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<TRoles>('Client')
  const [terms, setTerms] = useState(false)
  const [users, setUsers] = useState<IUser[]>([]);

  const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value)
  };

  const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value)
  }

  const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>) => {
    if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
      setRole(event.currentTarget.value)
    }
  }

  const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked)
  }

  const handleGuardarOnClick = () => {
    const newUser: IUser = {
      id: users.length + 1,
      firstName,
      lastName,
      role
    };
    setUsers([...users, newUser]);
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type="text" value={firstName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type="text" value={lastName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="rol">Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>
      <div  className='flex flex-row gap-1 items-center'>
        <label htmlFor="terms">Aceptar terminos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type="checkbox" checked={terms}/>
      </div>
      <button onClick={handleGuardarOnClick}>Guardar</button>
      <h1 className='text-2xl font-bold'>USUARIOS</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Id: {user.id} Nombre: {user.firstName} {user.lastName} Rol: {user.role}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Example2