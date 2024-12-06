import { signIn } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
        <Image src="/image.png"
        height={200}
        width={200}
        />
        <a onClick={signIn} className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16
        bg-blue-500 rounded-md text-white">
            Login
        </a>
    </div>
  )
}

export default Login