import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-between p-6 bg-gt22004-primary-color text-white'>
      <Link href={'/'} className='text-xl font-bold'>React example</Link>
      <div className='flex flex-row gap-4'>
        <Link href={'/'}>Inicio</Link>
        <Link href={'/examples'}>Ejemplos</Link>
        <Link href={'/usuarios'}>Usuarios</Link>
        <Link href={'/login'}>Login</Link>
      </div>
    </div>
  )
}

export default Header


