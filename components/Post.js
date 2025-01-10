import React, { useState, useEffect } from 'react';
import Post from './Post';
import Image from 'next/image';
import { IoShareSocial, IoPawOutline } from 'react-icons/io5';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { useSession } from 'next-auth/react';


const Posts = () => {
    const [currentTime, setCurrentTime] = useState('');
    const { data: session } = useSession();
  

    useEffect(() => {
        setCurrentTime(new Date().toLocaleString());
    }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img className="rounded-full w-10 h-10" src={session?.user.image} alt="Profile" />
          <div className="flex flex-col">
            <p className="font-medium">Helen Dessa</p>
            <p className="text-sm text-gray-500">
              {currentTime}
            </p>
          </div>
        </div>
        <p className="py-4">Lorem ipsum</p>
      </div>
      {/* If any image */}
      <div className="relative h-60 md:h-96 bg-white">
        <Image 
            src="/black1.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Post Image"
        />
      </div>
      {/* Footer */}
      <div className="flex items-center justify-around bg-white">
        <div className="flex items-center space-x-1 py-2 cursor-pointer  hover:text-blue-400 group">
            <IoPawOutline size={20} className="text-blue-700 group-hover:text-blue-400"/>
            <p className="text-xs sm:text-base group-hover:text-blue-400">Curtir</p>
        </div>
        <div className="flex items-center space-x-1 py-2 cursor-pointer  hover:text-blue-400 group">
            <TfiCommentsSmiley size={20} className="text-blue-700 group-hover:text-blue-400"/>
            <p className="text-xs sm:text-base group-hover:text-blue-400">Comentar</p>
        </div>
        <div className="flex items-center space-x-1 py-2 cursor-pointer  hover:text-blue-400 group">
            <IoShareSocial size={20} className="text-blue-700 group-hover:text-blue-400"/>
            <p className="text-xs sm:text-base group-hover:text-blue-400">Compartilhar</p>
        </div>
      </div>
      
    </div>
  );
};

export default Posts;