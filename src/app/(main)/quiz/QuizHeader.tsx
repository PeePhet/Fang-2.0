import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function QuizHeader({children}: Props) {
  return (
    <div className="w-[1120px] max-h-[100vh] px-[48px] mb-3">
       <h6 className="text-[16px] mt-5"> {children}</h6>
      </div>
  )
}