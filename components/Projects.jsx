import Image  from 'next/image'
import Link  from 'next/link'
import ProjectImage from '../public/assets/projects/property.jpg'
const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-24 '>
                <h3 className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</h3>
                <h1>What I have Built</h1>
                <div className='grid md:grid-cols-2 gap-8 my-4'>
                    <div className='relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#565eef] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10'  src={ProjectImage} alt='/'/>
                        <div className='hidden  group-hover:block absolute '>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h3 className='text-2xl text-white tracking-wider text-center'>Property finder</h3>
                                    <p className='pb-4 pt-2 text-center text-white'>React Project</p>
                                    <Link className='group' href='/'>
                                        <p className='text-center py-3 rounded-lg text-gray-700 bg-white font-bold text-lg cursor-pointer hover:bg-gray-50'>More Info</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#565eef] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10'   src={ProjectImage} alt='/'/>
                        <div className='hidden  group-hover:block absolute '>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h3 className='text-2xl text-white tracking-wider text-center'>Property finder</h3>
                                    <p className='pb-4 pt-2 text-center text-white'>React Project</p>
                                    <Link className='group' href='/'>
                                        <p className='text-center py-3 rounded-lg text-gray-700 bg-white font-bold text-lg cursor-pointer hover:bg-gray-50'>More Info</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#565eef] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10'   src={ProjectImage} alt='/'/>
                        <div className='hidden  group-hover:block absolute '>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h3 className='text-2xl text-white tracking-wider text-center'>Property finder</h3>
                                    <p className='pb-4 pt-2 text-center text-white'>React Project</p>
                                    <Link className='group' href='/'>
                                        <p className='text-center py-3 rounded-lg text-gray-700 bg-white font-bold text-lg cursor-pointer hover:bg-gray-50'>More Info</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#565eef] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10'   src={ProjectImage} alt='/'/>
                        <div className='hidden  group-hover:block absolute '>
                            <div className="flex justify-center items-center">
                                <div>
                                    <h3 className='text-2xl text-white tracking-wider text-center'>Property finder</h3>
                                    <p className='pb-4 pt-2 text-center text-white'>React Project</p>
                                    <Link className='group' href='/'>
                                        <p className='text-center py-3 rounded-lg text-gray-700 bg-white font-bold text-lg cursor-pointer hover:bg-gray-50'>More Info</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
