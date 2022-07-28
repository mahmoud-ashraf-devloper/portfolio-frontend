import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
const HomeSection = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest pt-20 text-gray-400">Lets Build something Legendary Together</p>

          <div className='text-gray-700 md:text-7xl text-3xl font-bold my-10 md:my-20'>
            <Typewriter
              options={{
                strings: ['Hi, I am <span style="color: #5651e5">Mahmoud</span>', 'A full-Stack<span style="color: #5651e5"> Web Developer</span>'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="capitalize text-gray-400 py-4 max-w-[70%] m-auto">A Full-Stack Web developer freelancer with hands-on experience with modern technologies and its updates latest updates. I have an experience in both backend and frontend.</p>
          <div className="flex justify-center items-center py-4 space-x-4">
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
              <a target='_blank' href="https://www.linkedin.com/in/mahmoud-ashraf-49921b1a8/" rel='noreferrer'><FaLinkedinIn /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
              <a target='_blank' href="https://github.com/mahmoud-ashraf-devloper" rel='noreferrer'><FaGithub /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
              <a target='_blank' href="mailto:mahmoud.a.developer@gmail.com" rel='noreferrer'><AiOutlineMail /></a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-500'>
              <a target='_blank' href="https://www.facebook.com/mhmoud.ashraf.9674/" rel='noreferrer'><FaFacebook /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeSection