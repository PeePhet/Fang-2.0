'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { inter } from './page'
import QuizBtnNext from './QuizBtnNext'
import { Variable } from '../../../../variable'
import QuizBtnprev from './QuizBtnprev'
import { FieldValues, useForm } from 'react-hook-form'

type Props = {
        title : string
        numberQuiz : string
}


export default function QuizChiose({title,numberQuiz}: Props) {
  const {register , handleSubmit ,reset, formState : { errors , isSubmitSuccessful}} = useForm()
  const [Choise_navigate , setChoise_navigate] = useState<number>(1)
  const [result , setResult] = useState<number>(0)
    const Quiz_Data  = useCallback(()=>{
            const Quiz_Data  = Variable()
            return Quiz_Data

    },[])
    const one : any = Quiz_Data()
    
  const onSubmit = useCallback((data : FieldValues)=>{
    let newResult = 0;
    for (let i = 0; i < 5; i++) {
        if(data["choise" +i] == 'true'){
          newResult++
        }
    }
    setResult(newResult)
      },[])

      useEffect(()=>{
          if(isSubmitSuccessful){
              alert(result + '/5')
              reset()
          }

      },[isSubmitSuccessful, reset, result])
    

      if(result){
          return(
              <>
              <div>    ทำต่อไป</div>
              
              
              </>

          )
      }else{
        return(
          <div className="w-full px-[108px] max-h-[700px] flex flex-col">
          <h4 className="text-center  text-[16px] font-bold text-[#2F327D]">{title} </h4>
          <h5 className="text-center text-[16px] font-bold text-[#2F327D]"> {numberQuiz}</h5>
          
      
             
          
              <form onSubmit={handleSubmit(onSubmit)}>
        { one && one.map((item : any,index : any)=>{
            return   <div key={index}  className={`flex flex-col mt-[44px] w-[836px] max-h-[520px] gap-y-[36px] mb-20 ${ Choise_navigate == index+1 ? 'flex'  : 'hidden' }`} >
                      <h6 className={`${inter.className} font-bold text-[16px] text-[#696984]`}>{item.title}</h6>
                       <label >
                        <input type="radio" {...register(`choise${index}`)} value={'true'} />{" "}
                        <span> {item.choise1}</span>
                      </label>
                      <label >
                        <input type="radio" {...register(`choise${index}`)} value={'false'} />{" "}
                        <span> {item.choise2}</span>
                      </label>
                      <label >
                        <input type="radio" {...register(`choise${index}`)} value={'false'} />{" "}
                        <span> {item.choise3}</span>
                      </label>
                      <label >
                        <input type="radio" {...register(`choise${index}`)} value={'false'} />{" "}
                        <span> {item.choise4} </span>
                      </label>
                   </div>
               
          })}
      
      
              
          <div className='flex justify-end w-full'>
          { Choise_navigate > 1 && 
          <QuizBtnprev Choise_navigate={Choise_navigate} setChoise_navigate={setChoise_navigate}  > Prev</QuizBtnprev>
          }
          { Choise_navigate == 5  ?
          <button type='submit' className='className="self-end mr-[20px] mb-[20px] w-[147px] h-[37px] rounded-[14px] border-[#F48C06] border-[1px] text-center text-[#F48C06] text-[14px] py-2 hover:bg-[#F48C06] duration-200 hover:text-[white] '> SUBMIT </button>  : 
          <QuizBtnNext Choise_navigate={Choise_navigate} setChoise_navigate={setChoise_navigate}  > Next </QuizBtnNext>
          }
          </div>
          </form>
          
          
        </div>
        
        )

      }
  
}