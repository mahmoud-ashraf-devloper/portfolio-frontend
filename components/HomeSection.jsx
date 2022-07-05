import {AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import {FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const HomeSection = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
          <div>
            <p className="uppercase tracking-widest text-gray-400">Lets Build something Legendary Together</p>
            <h1 className="py-4 text-gray-700">Hi, I am <span className="text-[#5651e5]">Mahmoud</span></h1>
            <h1 className="py-2 px-1 text-gray-700 capitalize">A full-Stack Web Developer</h1>
            <p className="capitalize text-gray-400 py-4 max-w-[70%] m-auto">I am mahmoud 22 years old, obsessed with web development stuff, I am also reliable person, can work under pressure, have been through a lot so do not worry your work will be done fast and efficiently  </p>
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
    </div>
  )
}

export default HomeSection