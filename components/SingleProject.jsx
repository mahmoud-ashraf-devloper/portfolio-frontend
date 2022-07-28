import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsEye } from 'react-icons/bs'

const SingleProject = ({ project }) => {
    return (
        <div className='relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#565eef] to-[#709dff]'>

            <div className='w-full h-full'>
                <Image className='rounded-xl group-hover:opacity-10' src={project.images[0]} alt='/' />
            </div>
            <div className='hidden  group-hover:block absolute '>
                <div className="flex justify-center items-center">
                    <div className='w-full'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>{project.title}</h3>
                        <p className='pb-4 pt-2 text-center text-white'>{project.description}</p>
                        <Link className='group' href={project.links.liveDemo}>
                            <div className='flex justify-center items-center space-x-2 text-center py-3 rounded-lg bg-white mt-2 text-slate-900 md:text-lg text-sm  cursor-pointer hover:bg-gray-50  px-6'>
                                <BsEye />
                                <p className=''>Life Demo</p>
                            </div>
                        </Link>
                        <Link className='group' href={project.links.github}>
                            <div className='flex justify-center items-center space-x-2 text-center py-3 rounded-lg text-white mt-2 bg-slate-900 md:text-lg text-sm  cursor-pointer hover:bg-white hover:text-slate-900  px-6'>
                                <BsGithub />
                                <p className=''> Github Link</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;
