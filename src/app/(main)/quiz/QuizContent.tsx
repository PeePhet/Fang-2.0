import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function QuizContent({children}: Props) {
  return (
    <ul className="list-disc ml-[30px]">
            {children}
    </ul>
  )
}