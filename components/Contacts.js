import React from 'react';
import Image from 'next/image';

function Contacts({ name, src, status }) {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl cursor-pointer relative">
      <div className="relative">
        <Image src={src} height={40} width={40} className="rounded-full cursor-pointer" alt={name} />
        {status === "Online" && (
            <div className="bg-green-500 h-4 w-4 rounded-full absolute bottom-0 right-0 border-2 border-white"></div>
        )}
        {status === "Offline" && (
            <div className="bg-red-500 h-4 w-4 rounded-full absolute bottom-0 right-0 border-2 border-white"></div>
        )}
      </div>
      <p className="hidden sm:inline-flex text-sm">{name}</p>
    </div>
  );
}

export default Contacts;