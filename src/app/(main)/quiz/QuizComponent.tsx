'use client'
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { poppins } from './page'
import { inter } from './page'
import { NotoTH } from '@/app/components/RegisterForm'
import { useForm } from 'react-hook-form'

type Props = {}

export default function QuizComponent({}: Props) {
    const {register, handleSubmit , formState : {errors , isSubmitting}}  = useForm()
    const [isOpenQuiz , setIsOpenQuiz] = useState<boolean>(true)
    const [start , setStart] = useState<boolean>(false)
    const [page , setPage] = useState<number>(0)
    
      const OpenQuiz =useCallback((e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        setStart(true)
        if(isOpenQuiz){
          setIsOpenQuiz(false)
          return
        }
        setIsOpenQuiz(true)
      },[isOpenQuiz])

  return (
    <div className="w-full max-h-[1800px] flex flex-col ">
    <button onClick={OpenQuiz} className="w-full bg-[#F5F7FA] flex justify-between h-[62px] items-center rounded-t-[14px]">
      <span className="px-[20px] text-[#2F327D]">
        {" "}
        {">"} บทที่ 2  <span className={poppins.className}>Introduction to Machine Learning{" "} </span>
      </span>
      <Image
        alt="correct"
        width={31}
        height={31}
        src={"/Check Box.svg"}
        className="mr-4"
      />
    </button>
    <div className={`bg-[#FFFFFF] w-full flex flex-col border-[1px] rounded-b-[14px] max-h-[0em]  overflow-hidden ${start && (isOpenQuiz ? 'slide-in ' : 'slide-out')}`} >
        <div className="w-[1120px] max-h-[100vh] px-[48px] mb-3">
          <h6 className="text-[16px] mt-5"> Objectives : </h6>
          <ul className="list-disc ml-[30px]">
            <li>
              Definition of machine learning and its applications.{" "}
            </li>
            <li>
              Understanding supervised, unsupervised, and reinforcement
              learning.
            </li>
            <li> The role of data in machine learning. </li>
          </ul>
          <h6 className="text-[16px] leading-[22px] mt-5">
          
            Recommended Resources:{" "}
          </h6>
          <ul className="list-disc ml-[30px]">
            <li>
              Machine Learning by Stanford University (Coursera) -
              Provides a solid foundation in machine learning concepts by
              Andrew Ng.
            </li>
            <li>
              Machine Learning Mastery - Offers tutorials and practical
              tips on machine learning techniques.
            </li>
          </ul>
        </div>
      <hr  className="w-full mb-5"/> 
      <div className="w-full px-[108px] h-[481px]">
        <h4 className="text-center  text-[16px] font-bold text-[#2F327D]">Chapter 1 Quiz </h4>
        <h5 className="text-center text-[16px] font-bold text-[#2F327D]"> Quiz 1/5</h5>
        <div className="flex flex-col mt-[44px] w-[836px] h-[534px] gap-y-[36px]" >
          <h6 className={`${inter.className} font-bold text-[16px] text-[#696984]`}>What is the primary goal of machine learning?</h6>
          <label >
            <input type="radio" name="choise" />{" "}
            <span> To mimic human intelligence</span>
          </label>
          <label >
            <input type="radio" name="choise" />{" "}
            <span> To automate repetitive tasks</span>
          </label>
          <label >
            <input type="radio" name="choise" />{" "}
            <span> To find patterns in data and make predictions</span>
          </label>
          <label >
            <input type="radio" name="choise" />{" "}
            <span> To perform complex calculations </span>
          </label>
        </div>
      </div>
      <button type="button" className="self-end mr-[56px] mb-[20px] w-[147px] h-[37px] rounded-[14px] border-[#F48C06] border-[1px] text-center text-[#F48C06] text-[14px]"> NEXT</button>
    </div>
    <div className={`w-full h-[62px] flex justify-center items-center bg-[#FFFFFF] border-b-[1] ${isOpenQuiz ?  'hidden' : 'flex'}`}>
        <h1 className={`font-bold ${NotoTH.className} text-[#6E7485]`} > Chapter 2 Quiz</h1>
    </div>
  </div>
  )
}