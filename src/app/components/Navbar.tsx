import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className=' ml-[157px]'>
        <Image src={'/logo.svg'} width={82} height={62} alt='logo'/>
    </nav>
  )
}