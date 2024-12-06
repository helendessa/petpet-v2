import React from 'react'
import Image from 'next/image';
import { ImUsers } from 'react-icons/im';
import SidebarItem from './SidebarItem';

export const Sidebar  = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
        <div className="flex items-center space-x-2 py-3 pl-4
        hover:bg-gray-200 rounded-l-xl cursor-pointer">
            <Image 
                src="/image.png"
                height={40}
                width={40}
                alt="Logo"
                className="rounded-full cursor-pointer"
            />
            <p className="hidden sm:inline-flex font-medium">Helen Dessa</p>
        </div>

        <SidebarItem Icon={ImUsers} value="Amigos"/>
    </div>
  );
};

export default Sidebar;