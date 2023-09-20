import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Navbarofquiz({}: Props) {
  return (
    <nav className='flex justify-between'>
            <div className='flex justify-between gap-x-[44px] items-center '>
                    <div>
                            <Image alt='logo' width={82} height={62} src={'/logo.svg'}></Image>
                    </div>
                    <div className='w-[711px] h-[24px]'>
                        <ul className='list-none flex gap-x-[40px]'>
                            <li>HOME </li>
                            <li> COURSE</li>
                            <li> MY COURSE</li>
                            <li> CERTIFICATE</li>
                            <li> LEARNING PATH</li>
                            <li> FAQs </li>
                        </ul>

                    </div>

            </div>
            <div className='ml-[210px]'>
                    <Image alt='photo' width={56} height={56} src={'/profile.svg'}></Image>

            </div>

    </nav>
  )
}