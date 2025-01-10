import React from 'react'
import { TbMessageCircleSearch } from "react-icons/tb";
import Contacts from './Contacts';
import { useSession } from 'next-auth/react';

function RightSidebar() {
    const { data: session } = useSession(); 

    return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
            <p className="flex text-lg font-semibold flex-grow">Contatos</p>
            <div className="flex space-x-1 px-2">
                <div className="flex space-x-1 px-2">
                    <div className="roudend-full p-2 hover:bg-gray-200 cursor-pointer">
                        <TbMessageCircleSearch />
                    </div>
                </div>
            </div>
        </div>
        <Contacts src={session?.user.image} name={session?.user.name}/>
    </div>
  )
}

export default RightSidebar;