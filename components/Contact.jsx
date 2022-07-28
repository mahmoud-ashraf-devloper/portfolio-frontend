import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImage from '../public/assets/contact.jpg';

const Contact = () => {
    return (
        <div className='relative '>
            <div id='contact' className='w-full max-w-[1240px] mx-auto px-2 md:h-screen py-24 my-4'>

                <div className="flex justify-center">
                    <h2 className='w-1/4  font-extrabold text-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#709dff] to-[#5651e5] uppercase'>Contact</h2>
                </div>
                <h1 className='my-8 uppercase'>Get In Touch</h1>

                <div className='md:grid md:grid-cols-6 gap-4 h-5/6 w-full flex flex-col my-4 justify-center '>
                    <div className=' col-span-2 py-4 px-4 shadow-xl rounded-xl  shadow-gray-400 flex flex-col justify-between h-full'>
                        <div className='mt-2'>

                            <Image className='hover:scale-105 ease-in duration-300 rounded-xl' src={ContactImage} alt='/' />
                            <h3 className='my-4'>Mahmoud Ashraf</h3>
                            <p className='my-3'>Full Stack Web Developer</p>
                            <p>I am available for freelancer or full-time positions. contact me and lets talk.</p>
                        </div>
                        <div>
                            <p className='text-center'>contact me on</p>
                            <div className="flex justify-center items-center py-4 space-x-4">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
                                    <FaFacebook />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 py-4 pt-10 md:px-12  shadow-xl rounded-xl  shadow-gray-400 flex justify-between flex-col'>
                        <div className='flex-col space-y-3'>
                            <div className='md:flex  justify-between md:space-x-3'>
                                <div className='flex flex-col w-full '>
                                    <label className='mb-1' htmlFor="name">Name</label>
                                    <input type="text" className='h-10 rounded-lg border-2 border-gray-200' id='name' />
                                </div>
                                <div className='flex flex-col w-full '>
                                    <label className='mb-1' htmlFor="name">Phone</label>
                                    <input type="text" className='h-10 rounded-lg border-2 border-gray-200' id='phone' />
                                </div>
                            </div>
                            <div className='flex flex-col w-full '>
                                <label className='mb-1' htmlFor="email">Email</label>
                                <input type="email" className='h-10 rounded-lg border-2 border-gray-200' id='email' />
                            </div>
                            <div className='flex flex-col w-full '>
                                <label className='mb-1' htmlFor="subject">Subject</label>
                                <input type="text" className='h-10 rounded-lg border-2 border-gray-200' id='subject' />
                            </div>
                            <div className='flex flex-col w-full '>
                                <label className='mb-1' htmlFor="message">Message</label>
                                <textarea type="text" className='h-36 rounded-lg border-2 border-gray-200' id='message' />
                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center w-full my-6 px-4'>
                            <button className='h-10 w-full md:w-3/4 hover:brightness-105'>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='absolute left-1/2 my-20 cursor-pointer hover:scale-105 ease-in duration-300'>
                <Link href='/' alt='/'>
                    <HiOutlineChevronDoubleUp className='w-10 h-10  rounded-full shadow-lg my-4  shadow-gray-400 text-[#5651e5] p-2' />
                </Link>
            </div>


        </div>


    )
}

export default Contact
