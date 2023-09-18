
import Navbar from '@/app/components/Navbar'
import React from 'react'
import './style.css'
import RegisterForm from '@/app/components/RegisterForm'

type Props = {}

export default function Register({}: Props) {
  return (
    <>
    <Navbar/>
    <RegisterForm/>
    </>
  )
}