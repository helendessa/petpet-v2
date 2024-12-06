import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsSearchHeart } from "react-icons/bs";
import { RiHomeHeartLine, RiHeartAdd2Line } from "react-icons/ri";
import { TbMapSearch, TbMapPinStar } from "react-icons/tb";
import { MdInfoOutline } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FiMenu, FiX } from "react-icons/fi";
import { useSession } from 'next-auth/react';

const Header = () => {
    const {data: session} = useSession;
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-[#0B409C] flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
            {/* Left */}
            <div className="flex min-w-fit">
                <Image 
                    src="/image.png"
                    height={40}
                    width={40}
                    alt="Logo"
                />
                <div className="hidden lg:flex items-center space-x-2 px-2 ml-2 rounded-full bg-[#F2F7FF] text-[#10316B]">
                    <BsSearchHeart size={20} className="text-[#10316B]" />
                    <input className="bg-transparent focus:outline-none text-[#10316B]" type="text" placeholder="Busca"/>
                </div>
            </div>
            {/* Center */}
            <div className="flex flex-grow justify-center mx-2">
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center h-14 px-2 md:px-5 rounded-md hover:bg-[#10316B] cursor-pointer group">
                        <RiHomeHeartLine className="mx-auto text-[#FFE867] group-hover:text-[#F2F7FF]" size={25}/>
                        <span className="ml-2 hidden md:inline text-[#FFE867] group-hover:text-[#F2F7FF]">Início</span>
                    </div>
                    <div className="flex items-center h-14 px-2 md:px-5 rounded-md hover:bg-[#10316B] cursor-pointer group">
                        <RiHeartAdd2Line className="mx-auto text-[#FFE867] group-hover:text-[#F2F7FF]" size={25}/>
                        <span className="ml-2 hidden md:inline text-[#FFE867] group-hover:text-[#F2F7FF]">Adoção</span>
                    </div>
                    <div className="flex items-center h-14 px-2 md:px-5 rounded-md hover:bg-[#10316B] cursor-pointer group">
                        <TbMapSearch className="mx-auto text-[#FFE867] group-hover:text-[#F2F7FF]" size={25}/>
                        <span className="ml-2 hidden md:inline text-[#FFE867] group-hover:text-[#F2F7FF]">Perdidos</span>
                    </div>
                    <div className="flex items-center h-14 px-2 md:px-5 rounded-md hover:bg-[#10316B] cursor-pointer group">
                        <TbMapPinStar className="mx-auto text-[#FFE867] group-hover:text-[#F2F7FF]" size={25}/>
                        <span className="ml-2 hidden md:inline text-[#FFE867] group-hover:text-[#F2F7FF]">Recomendações</span>
                    </div>
                    <div className="flex items-center h-14 px-4 md:px-5 rounded-md hover:bg-[#10316B] cursor-pointer group">
                        <MdInfoOutline className="mx-auto text-[#FFE867] group-hover:text-[#F2F7FF]" size={25}/>
                        <span className="ml-2 hidden md:inline text-[#FFE867] group-hover:text-[#F2F7FF]">Sobre Nós</span>
                    </div>
                </div>
                <div className="lg:hidden flex items-center ml-auto">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none flex items-center">
                        {menuOpen ? <FiX size={25} className="text-[#FFE867]" /> : <FiMenu size={25} className="text-[#FFE867]" />}
                    </button>
                </div>
            </div>
            {/* Right */}
            <div className="hidden lg:flex items-center justify-end min-w-fit space-x-2">
                <div className="flex items-center h-14 px-2 md:px-5 rounded-md hover:bg-[#10316B] cursor-pointer group">
                    <ImExit className="mx-auto text-[#FFE867] group-hover:text-[#F2F7FF]" size={25}/>
                    <span className="ml-2 hidden md:inline text-[#FFE867] group-hover:text-[#F2F7FF]">Sair</span>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#0B409C] shadow-md z-50">
                    <div className="flex flex-col items-start p-4 space-y-2">
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <BsSearchHeart size={20} className="text-[#FFE867]" />
                            <input className="bg-transparent focus:outline-none ml-2 text-[#FFE867]" type="text" placeholder="Busca"/>
                        </div>
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <RiHomeHeartLine size={25} className="text-[#FFE867]"/>
                            <span className="ml-2 text-[#FFE867]">Início</span>
                        </div>
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <RiHeartAdd2Line size={25} className="text-[#FFE867]"/>
                            <span className="ml-2 text-[#FFE867]">Adoção</span>
                        </div>
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <TbMapSearch size={25} className="text-[#FFE867]"/>
                            <span className="ml-2 text-[#FFE867]">Perdidos</span>
                        </div>
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <TbMapPinStar size={25} className="text-[#FFE867]"/>
                            <span className="ml-2 text-[#FFE867]">Recomendações</span>
                        </div>
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <MdInfoOutline size={25} className="text-[#FFE867]"/>
                            <span className="ml-2 text-[#FFE867]">Sobre Nós</span>
                        </div>
                        <div className="flex items-center w-full h-14 px-2 rounded-md hover:bg-[#10316B] cursor-pointer">
                            <ImExit size={25} className="text-[#FFE867]"/>
                            <span className="ml-2 text-[#FFE867]">Sair</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;