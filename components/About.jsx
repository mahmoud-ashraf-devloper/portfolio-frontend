import Image from 'next/image';
import AboutImage from '../public/assets/about-image-3.jpg';
import {GiCheckMark} from 'react-icons/gi';
import {RiBookmarkFill} from 'react-icons/ri';
const About = () => {
  return (
    <div id='about' className="max-w-[1240px] mx-auto w-full min-h-screen py-24  px-4 flex flex-col items-center">
      <div className="flex justify-self-start">
        <h2 className='w-full font-extrabold text-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#709dff] to-[#5651e5] uppercase'>About</h2>
      </div>
      <div className=" md:grid grid-cols-4 gap-3 pt-4 h-full ">
        <div className="col-span-3 w-full h-full ">

          <h1 className='md:my-4 uppercase'>Who Am I?</h1>
          <p className='text-gray-600 my-2'>Hi, I am Mahmoud,</p>
          <div className='text-gray-400 text-md  leading-6'>
            <p>A freelancer Full-Stack Web developer with hands on experience with modern technologies and its updates latest updates. I have an experience in both backend and frontend.</p>
            <h2 className='text-lg flex items-center'><RiBookmarkFill className='text-indigo-600 mr-1 w-5 h-4'  /> Technologies that i use</h2>
            <ul className='ml-3'>
              <li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4' /> I am a responsable and reliable Person.</li>
              <li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4' /> I pay attenton to details.</li>
              <li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4' /> I am a man of my word, so for sure your time will be respected.</li>
              <li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4' /> Also I have a Portofolio when you can see the level of work that I enssure you will get.</li>
              <li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4' /> Lastly cause i love this job and really cares and works really hard to get as high as i could in this career.</li>
            </ul>

            <h1 className='text-lg flex items-center'><RiBookmarkFill className='text-indigo-600 mr-1 w-5 h-4' /> Technologies that i use</h1>
            <ul className='ml-4'>
              <li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4 ' /> for frontend i usually use react or nextjs depends on the project requirements and besiness demands. i build also pure projects without framworks with (Html, Css, Javascrip).</li>
              <br /><li className='flex items-center'><GiCheckMark className='text-indigo-600 mr-4 w-5 h-4 ' /> for the backend I have hands on experience with (PHP, Laravel framwork). i can develop apis with excelent documentaion.</li>
            </ul>
          </div>
          <button className='uppercase font-bold px-12 py-3 my-8'>download my cv</button>
        </div>
        <div className='overflow-hidden h-full pl-3  w-full flex'>
          <Image  className='rounded-xl bg-center mix-blend-darken hover:scale-95 ease-in duration-300' src={AboutImage} alt='/' />
        </div>
      </div>
    </div>
  )
}
export default About