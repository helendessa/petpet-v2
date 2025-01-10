import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { IoImageOutline } from 'react-icons/io5';
import { FaCat } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const CreatePost = () => {
    const PETPET_ENDPOINT = "";
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const handleEmojiClick = (emojiObject) => {
        setInputValue((prevInputValue) => prevInputValue + emojiObject.emoji);
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleOutsideClick = (event) => {
        if (showEmojiPicker && !event.target.closest('.emoji-picker-container')) {
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showEmojiPicker]);

    const addImageToPost = (e) => { 
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (readerEvent) => {
                setImageToPost(readerEvent.target.result);
            };
        }
    };

    const removeImage = () => {
        setImageToPost(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        const formData = new FormData();

        formData.append('file', imageToPost);
        formData.append('post', inputValue);
        formData.append('name', session?.user.name);
        formData.append('email', session?.user.email);
        formData.append('pfp', session?.user.image);

        axios.post(PETPET_ENDPOINT, formData, {
            headers: { Accept: 'application/json' }
        })
        .then((response) => {
            inputRef.current.value = "";
            removeImage();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="bg-white rounded-md shadow-md text-gray-500 p-2 relative">
            <div className="flex p-4 space-x-2 items-center">
                <Image 
                    src={session?.user.image}
                    height={40}
                    width={40}
                    className="rounded-full cursor-pointer"
                    alt="Profile"
                />
                <form className="flex flex-1" onSubmit={handleSubmit}>
                    <input 
                        className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4 hover:bg-gray-200 transition duration-200"
                        type="text"
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={'Digite aqui, ' + session?.user.name + '!'}
                    />
                    <button hidden type="submit">Submit</button>
                </form>
            </div>

            {imageToPost && (
                <div 
                    onClick={removeImage}
                    className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-200 cursor-pointer">
                    <img src={imageToPost} className="h-10 object-contain" alt="Uploaded" />
                    <RiDeleteBin6Line size={20} className="hover:text-red-500 h-8" onClick={() => setImageToPost(null)} />
                </div>
            )}

            <div className="flex justify-evenly py-2">
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center cursor-pointer" onClick={handleClick}>
                    <IoImageOutline size={20} className="text-blue-700 hover:text-blue-400"/>
                    <p>Adicionar foto/vídeo</p>
                    <input 
                        onChange={addImageToPost} 
                        type="file" 
                        ref={hiddenFileInput} 
                        hidden 
                        accept="image/*"
                    />
                </div>
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center cursor-pointer" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    <FaCat size={20} className="text-blue-700 hover:text-blue-400"/>
                    <p>Adicionar emoji</p>
                </div>
            </div>

            {showEmojiPicker && (
                <div className="absolute z-10 emoji-picker-container">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}
        </div>
    );
};

export default CreatePost;