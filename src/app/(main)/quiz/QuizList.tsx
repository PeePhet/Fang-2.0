import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function QuizList({children}: Props) {
  return (
    <li>{children}</li>
  )
}