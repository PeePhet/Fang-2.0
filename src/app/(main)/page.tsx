import React from 'react'
import './style.css'

import MainForm from '../components/MainForm'
import Navbar from '../components/Navbar'
type Props = {}

export default function page({}: Props) {
  return (
    <>
    <Navbar/>
    <MainForm/>
    </>
  )
}