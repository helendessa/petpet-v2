import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { IoImageOutline } from 'react-icons/io5'

const CreatePost = () => {
    const { data: session } = useSession();
    return (
        <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
            <div className="flex p-4 space-x-2 items-center">
                <Image 
                    src={session?.user.image}
                    height={40}
                    width={40}
                    className="rounded-full cursor-pointer"
                />
                <form className="flex flex-1">
                    <input 
                    className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4
                    hover:bg-gray-200 transition duration-200"
                    type="text"
                    placeholder={'Digite aqui, ' + session?.user.name + '!'}>
                    </input>
                    <button hidden>

                    </button>
                </form>
            </div>

            <div className="flex justify-evenly py-2 ">
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center">
                    <IoImageOutline size={20} className="text-blue-700 hover:bg-gray-200"/>
                    <p>Adicionar foto/vídeo</p>
                </div>
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center">
                    <IoImageOutline size={20} className="text-blue-700 hover:bg-gray-200"/>
                </div>
            </div>
        </div>
  )
}

export default CreatePost