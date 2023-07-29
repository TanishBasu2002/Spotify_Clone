"use client"
import Button from '@/components/Button'
import Header from '@/components/Header'
import React from 'react'
import toast from 'react-hot-toast'
export const revalidate=0;
const Account = () => {
    
    return (
        <div 
          className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto"
        >
          <Header>
            <div className="mb-2 flex flex-col gap-y-6">
              <h1 className="text-white text-3xl font-semibold">
                Account Settings
              </h1>
            </div>
          </Header>
          <div className='items-center gap-y-2'>
             <Button className='items-center text-white bg-[#ff1a1a] sm:w-full md:w-[200px] gap-x-2' >Delete Account</Button>
          </div>
          
        </div>
      )
}

export default Account
