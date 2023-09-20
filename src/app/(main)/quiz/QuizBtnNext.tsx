
import React, { Dispatch, SetStateAction, useCallback } from 'react'

type Props = {
    children : React.ReactNode
    Choise_navigate : number
    setChoise_navigate : Dispatch<SetStateAction<number>> 
}

export default function QuizBtnNext({children , Choise_navigate , setChoise_navigate}: Props) {
  const NextQuiz = useCallback(() => {
    if (Choise_navigate < 1) {
      return;
    }
    if (Choise_navigate >= 5) {
      return;
    }
    setChoise_navigate((prev) => prev + 1);
  }, [Choise_navigate, setChoise_navigate]);
  
 

  return (
    <button onClick={NextQuiz}  type="button" className="self-end mr-[20px] mb-[20px] w-[147px] h-[37px] rounded-[14px] border-[#F48C06] border-[1px] text-center text-[#F48C06] text-[14px] py-2 hover:bg-[#F48C06] duration-200 hover:text-[white] "> {children}</button>
  )
}