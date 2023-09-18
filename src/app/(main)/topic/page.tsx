import Navbar from '@/app/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'


type Props = {}

export default function Topic({}: Props) {
  return (
    <>
    <Navbar/>
    <main className='w-screen h-[741px] flex justify-center items-center '>
    <div className='absolute 3xl:bottom-[100px] 3xl:left-[190px] destop:left-[-50px] destop:bottom-[100px]'>
            <Image src={'./Teacher explaining while sitting.svg'} width={464} height={464} alt='Teacher'/>
        </div>
        <div className='w-[539px] h-full pt-[50px] pb-[67px]  bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center'>
                <header className='w-[459px] flex justify-between items-start h-[44px] '>
                        <span className='text-[20px] font-normal '> Welcome.. </span>     
                </header>
                <div className='w-[494px] h-[54px] text-[40px] font-medium flex self-start '>
                    <h6 className=''> Which topic do you like..</h6>
                </div>
                <section className='w-[452px] h-[339px] grid grid-cols-2  place-items-center gap-y-[38px] gap-x-[50px] my-[64px] text-[#]'>
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Computer </div>
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Languages</div>
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Design </div>
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Business</div>      
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Music</div>      
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] ' >Marketing</div>      
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Finance</div>      
                    <div className='w-[179px] h-[55px] border-[0.5px] border-[#6C6C6C] rounded-[10px] border-solid flex justify-center items-center text-[18px] '>Lifestyle</div>      
                </section>
                <button className='w-[179.5px] h-[55px] bg-[#F48C06] rounded-[10px] btn-next text-[#FFFFFF]'>
                    Next
                </button>
        </div>
    </main>
    
    </>
  )
}



