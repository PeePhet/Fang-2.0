import React from 'react'
import Navbarofquiz from '@/app/components/Navbarofquiz'
import localFont from 'next/font/local'
const NotoTH = localFont({src : '../../../../public/fonts/static/NotoSansThai-Regular.ttf'})
type Props = {
    children : React.ReactNode
}
import './style.css'

export default function layout({children}: Props) {
  return (
    <body suppressHydrationWarning={true} className={NotoTH.className}>
        {children}
    </body>
  )
}