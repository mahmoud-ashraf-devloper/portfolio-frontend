import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../public/assets/logo.png'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }


    useEffect(() => {
        const handleShadow = () => {
            (window.scrollY >= 90) ? setShadow(true) : setShadow(false)
        }

        window.addEventListener('scroll', handleShadow)

    }, []);

    return (
        <div className={shadow ? 'bg-[#ecf0f3] fixed w-full h-20 z-[100] shadow-xl' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer'>
                <Link alt='/' href='/'>
                    <Image width={70} height={50} src={Logo} alt='/' />
                </Link>
                <div>
                    <ul className='hidden md:flex space-x-10 text-2xl'>
                        <Link href='/'>
                            <li className='text-md uppercase hover:text-[#5651e5] hover:font-bold  ease-in duration-300 '>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='text-md uppercase hover:text-[#5651e5] hover:font-bold  ease-in duration-300 '>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='text-md uppercase hover:text-[#5651e5] hover:font-bold  ease-in duration-300 '>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='text-md uppercase hover:text-[#5651e5] hover:font-bold  ease-in duration-300 '>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='text-md uppercase hover:text-[#5651e5] hover:font-bold  ease-in duration-300 '>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'hidden'}>
                    <div>
                        <div className='flex items-center justify-between'>
                            <Image src='/../public/assets/logo.png' width='87' height='35' alt='/' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'>
                                <AiOutlineClose size={20} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-6'>
                            Lets Built Something awesome Together
                        </div>
                        <div className='py-4 uppercase'>
                            <ul>
                                <Link href='/'>
                                    <li className='py-4 text-sm '>Home</li>
                                </Link>
                                <Link href='/#about'>
                                    <li className='py-4 text-sm '>About</li>
                                </Link>
                                <Link href='/#skills'>
                                    <li className='py-4 text-sm '>Skills</li>
                                </Link>
                                <Link href='/#projects'>
                                    <li className='py-4 text-sm '>Projects</li>
                                </Link>
                                <Link href='/#contact'>
                                    <li className='py-4 text-sm '>Contact</li>
                                </Link>
                            </ul>
                        </div>

                        <div className='pt-40'>
                            <p>Lets Contact</p>
                            <div className='flex justify-center items-center my-4 space-x-3'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500'>
                                    <FaFacebook />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
