import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'


const NotoTH = localFont({src : '../../../public/fonts/static/NotoSansThai-Regular.ttf'})


type Props = {}

export default function RegisterForm({ }: Props) {
  return (
    <main className='w-screen h-[1400px] flex justify-center items-center '>
      <div className='absolute 3xl:bottom-[0px] 3xl:left-[190px] destop:left-[-50px] destop:bottom-[0px]'>
        <Image src={'./Teacher explaining while sitting.svg'} width={464} height={464} alt='Teacher' />
      </div>
      <div className='w-[539px] h-[1200px] py-[90px]   bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center'>
        <div className='w-[162px] h-[75px] text-[40px] font-medium flex  '>
          <h6 className=''> Register</h6> 
        </div>
        <section className='w-[452px] h-[339px] flex flex-col pt-[10px]   '>
          <InputRegisterForm type_of={'Name-Surname'} placeholder_text={'Example Example'} />
          <InputRegisterForm type_of={'Email'} placeholder_text={'Example@yahoo.com'} />
          <InputRegisterForm type_of={'Password'} placeholder_text={'********'} />
          <InputRegisterForm type_of={'Confirm Password'} placeholder_text={'********'} />
          <div className='flex w-full'>
            <div className='w-[203px] h-[92px]'>
              <label htmlFor="" className=''>Date of birth</label>
              <div className='w-[153px] h-[56px] mt-4 bg-[#FFFFFF] border-[#ADADAD] border-[1px] border-solid rounded-[9px] flex justify-center items-center px-2'>
                <input type="date" className={`${NotoTH.className} dateForm`} />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <label htmlFor="" className='self-start'>Gender</label>
              <div className=' flex flex-wrap  mt-4 gap-x-6 gap-y-2'>
                <div className='flex items-center gap-x-3 relative'>
                  <input type="radio" name="sex" id="male" className='radio-input' />
                  <label htmlFor="male" className='custom-radio'>Male</label>
                  <span className='checker'> </span>
                </div>
                <div className='flex items-center gap-x-3 relative'>
                  <input type="radio" name="sex" id="female" className='radio-input' />
                  <label htmlFor="female" className='custom-radio'>Female</label>
                  <span className='checker'> </span>
                </div>
                <div className='flex items-center gap-x-3 relative'>
                  <input type="radio" name="sex" id="other" className='radio-input' />
                  <label htmlFor="other" className='custom-radio'>Prefer not to say</label>
                  <span className='checker'> </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='w-[451px] h-[92px] pt-5 gap-y-[15px] flex flex-col mt-[260px] '>
              <label htmlFor="">Occupation</label>
              <input type="text"  className='w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light' placeholder={'fill in your occupation'} />
          </div>
          <div className=' w-full h-[44px] flex justify-center items-center mt-5 '>
                <p className={`text-center font-normal text-[16px]  mt-[50px] ${NotoTH.className}`}> โดยการเปิดบัญชีท่านรับทราบและตกลงตาม ข้อกำหนด <br />  และเงื่อนไขในการใช้เว็บไซต์และ   แอปพลิเคชัน เพื่อที่จะใช้บริการ</p>
           </div>
       <Link href={'/topic'} className='w-full h-[54px]'> <button className={`mt-[70px] w-full h-[54px] bg-[#F48C06] bgbtn-reset rounded-[10px] text-[#FFFFFF] ${NotoTH.className}` }>
                         ส่งลิงค์รีเซ็ตรหัสผ่าน
        </button>
        </Link>
      </div>
    </main>
  )
}



function InputRegisterForm({ type_of, placeholder_text }: { type_of: string, placeholder_text: string }) {
  return (
    <div className='h-[92px] w-full flex flex-col gap-y-[7px] mb-[36px]'>
      <label htmlFor={type_of} className='text-[16px] font-bold'> {type_of}</label>
      <input type="text" name={type_of} id={type_of} className='w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light' placeholder={placeholder_text} />
    </div>
  )
}