'use client';
import UsedCar, {IUsedCar} from '@/components/UserCard';
import { Metadata } from 'next'
import React, { HTMLAttributes } from 'react'
import Image from 'next/image'

const GT22004 = () => {
    
  return(
    <><div className='flex flex-col gap-4 items-center'>
          <h1 className='text-2xl font-bold'>Top 3 comidas Rapidas </h1>
      </div>
      <div className="grid grid-cols-5 grid-rows-5 gap-10">
            <div className="row-span-5 col-span-3 text-center">
                <h1 className='text-2xl font-bold '> TOP 1 </h1>
                <img width={650} height={10} className=' object-cover ' src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80' alt={'Hamburguesa'} />
                <h1 className='text-2xl font-bold'> HAMBURGUESA </h1>  
                <h1 className='text-xl leading-7 text-gray-600'> Seductor aroma a la parrilla, jugosa carne, queso fundido, fresca lechuga y tomate, todo abrazado por un tierno pan, en la hamburguesa perfecta. </h1>      
            </div>
            <div className="row-span-3 col-span-2 text-center">
                <h1 className='text-2xl font-bold'> TOP 2 </h1>
                <img width={300} height={10} className=' object-cover 'src={'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'} alt={'Pizza'} />
                <h1 className='text-2xl font-bold'> PIZZA </h1>    
                <h1 className='text-xl leading-7 text-gray-600'> Pizza recién horneada con queso derretido, tomate fresco, sabrosas aceitunas y una masa crujiente que te transporta a Italia en cada bocado. </h1>                  
            </div>
            <div className="row-span-2 col-span-2 text-center">
                <h1 className='text-2xl font-bold'> TOP 3 </h1>
                <img width={200} height={10} className=' object-cover'src={'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80'} alt={'HotDog'} />
                <h1 className='text-2xl font-bold'> HOT DOG </h1>    
                <h1 className='text-xl leading-7 text-gray-600'> Salchicha a la parrilla, pan suave, mostaza y kétchup, con cebolla crujiente y pepinillos, el clásico hot dog que todos amamos. </h1>       
            </div>
     </div>
    </>

  )
}

export default GT22004