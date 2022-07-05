import  Image  from 'next/image';
const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen px-2 my-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center  h-full ">
            <h6 className="text-xl tracking-widest uppercase text-[#5651e5] ">Skills</h6>
            <h1 className='my-3'>What can I Do</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/html.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Html</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/css.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>CSS3</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/javascript.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Java Script</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/react.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>React</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/tailwind.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/github1.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Github</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
                            <Image width='64' height='64S' src='/../public/assets/skills/laravel.png' alt='/'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='uppercase'>Laravel</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4  justify-center items-center">
                        <div className="m-auto">
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