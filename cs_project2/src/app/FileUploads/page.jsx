'use client';

import { useRef } from 'react';
import { FaUpload } from 'react-icons/fa';

function FileUploads() {
    const fileInputRef =useRef(null);

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            console.log("Select file:", files[0]);
        }
    };

    return (
        <div className='flex h-screen'>
            {/* Sidebar/Navbar */}
            <nav className='bg-gray-800 text-white w-64 h-full flex flex-col items-start p-6 space-y-6 fixed'>
                {/* Brand Logo */}
                <div className='text-2xl font-bold mb-6'>
                    <a href='/'>Brand</a>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col space-y-4'>
                    <a href='/' className='text-gray-300 hover:text-white'>Home</a>
                    <a href='/Dashboards' className='text-gray-300 hover:text-white'>Dashboards</a>
                    <a href='/llm' className='text-gray-300 hover:text-white'>LLM</a>
                </div>

                {/* Upload Icon */}
                <div className='mt-auto cursor-pointer' onClick={handleIconClick}>
                    <FaUpload className='text-3xl text-gray-300 hover:text-white' />
                </div>

                {/* Hidden File Input */}
                <input type='file' ref={ fileInputRef } onChange={ handleFileChange } className='hidden' />
            </nav>

            {/* Main Content */}
            <main className='flex-1 ml-64 p-8'>
                <h1 className='text-2xl'>Welcome to the Home Page</h1>
                <p className='mt-4 text-gray-700'>
                    This is your main content area. Click the upload icon on the left to upload a file.
                </p>
            </main>
        </div>
    )
}

export default FileUploads