import Image  from 'next/image';
import AboutImage from '../public/assets/about-image.jpg';
const About = () => {
  return (
    <div id='about' className="max-w-[1240px] mx-auto w-full min-h-screen py-24  px-4 ">
                <h2 className='text-3xl tracking-widest uppercase text-[#5651e5]  text-center '>About</h2>
        <div className=" md:grid grid-cols-3 gap-3">
            <div className="col-span-2 w-full h-full ">

                <h1 className='md:my-10'>Who Am I?</h1>
                <p className='text-gray-600 my-2'>I am not your Normal developer</p>
                <p>I Am Mahmoud 22 Years Old, Obsessed With Web Development Stuff, I Am Also Reliable Person, Can Work Under Pressure, Have Been Through A Lot So Do Not Worry Your Work Will Be Done Fast And Efficiently</p>
                <p>I Am Mahmoud 22 Years Old, Obsessed With Web Development Stuff, I Am Also Reliable Person, Can Work Under Pressure, Have Been Through A Lot So Do Not Worry Your Work Will Be Done Fast And Efficiently</p>
                <p>I Am Mahmoud 22 Years Old, Obsessed With Web Development Stuff, I Am Also Reliable Person, Can Work Under Pressure, Have Been Through A Lot So Do Not Worry Your Work Will Be Done Fast And Efficiently</p>
                <p className='text-gray-600  underline cursor-pointer my-10'>See some Of My projects</p>
            </div>
            <div className='overflow-hidden w-full h-auto m-auto mix-blend-darken rounded-2xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AboutImage} alt='/'/>
            </div>
        </div>
    </div>
  )
}
export default About