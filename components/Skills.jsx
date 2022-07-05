import  Image  from 'next/image';
import HtmlImage from '../public/assets/skills/html.png';
import CssImage from '../public/assets/skills/css.png';
import JsImage from '../public/assets/skills/javascript.png';
import ReactImage from '../public/assets/skills/react.png';
import TailwindImage from '../public/assets/skills/tailwind.png';
import GithubImage from '../public/assets/skills/github1.png';
import LaravelImage from '../public/assets/skills/laravel.png';
const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen px-2 my-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center  h-full ">
            <h6 className="text-xl tracking-widest uppercase text-[#5651e5] ">Skills</h6>
            <h1 className='my-3'>What can I Do</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:my-10">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={HtmlImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Html</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={CssImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>CSS3</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={JsImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Java Script</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={ReactImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>React</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={TailwindImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={GithubImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Github</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image src={LaravelImage} alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Laravel</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto w-20">
                            <Image width='64' height='64S' src='/../public/assets/skills/php.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>php</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Skills