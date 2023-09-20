import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function QuizcoverHead({children}: Props) {
  return (
    <div className="w-[1120px] h-[216px] px-[48px] mb-3">
    {children}
     </div>
  )
}