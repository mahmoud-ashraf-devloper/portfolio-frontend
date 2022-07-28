
import ProjectImage from '../public/assets/projects/property.jpg'
// deman-project-images
import Demand1 from '../public/projects/demand-ecommerce/1.png'
import Demand2 from '../public/projects/demand-ecommerce/2.png'
import Demand3 from '../public/projects/demand-ecommerce/3.png'
import Demand4 from '../public/projects/demand-ecommerce/4.png'
import Demand5 from '../public/projects/demand-ecommerce/5.png'
import Demand6 from '../public/projects/demand-ecommerce/6.png'
import Demand7 from '../public/projects/demand-ecommerce/7.png'
import Demand8 from '../public/projects/demand-ecommerce/8.png'
import Demand9 from '../public/projects/demand-ecommerce/9.png'


// food project images
import  FoodApp1 from '../public/projects/food-delavery/1.png'
import  FoodApp2 from '../public/projects/food-delavery/2.png'
import  FoodApp3 from '../public/projects/food-delavery/3.png'
import  FoodApp4 from '../public/projects/food-delavery/4.png'
import  FoodApp5 from '../public/projects/food-delavery/5.png'
import  FoodApp6 from '../public/projects/food-delavery/6.png'
import  FoodApp7 from '../public/projects/food-delavery/7.png'
import  FoodApp8 from '../public/projects/food-delavery/8.png'
import  FoodApp9 from '../public/projects/food-delavery/9.png'

// images for cloud app
import  CloudApp1 from '../public/projects/cloud-app/1.png'
import  CloudApp2 from '../public/projects/cloud-app/2.png'
import  CloudApp3 from '../public/projects/cloud-app/3.png'
import  CloudApp4 from '../public/projects/cloud-app/4.png'
import  CloudApp5 from '../public/projects/cloud-app/5.png'
import  CloudApp6 from '../public/projects/cloud-app/6.png'
import SingleProject from './SingleProject';


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Demand Ecommerce',
            description: 'A ecommerce website for demand',
            images: [Demand1, Demand2, Demand3, Demand4, Demand5, Demand6, Demand7, Demand8, Demand9],
            links:{
                liveDemo: 'https://deman-eccomerce-mahmoud.netlify.app/',
                github: 'https://github.com/mahmoud-ashraf-devloper/demand-ecommerce-template'
            }
            
        },
        {
            id: 2,
            title: 'Food Delivery App',
            description: 'A food delivery app',
            images: [FoodApp1, FoodApp2, FoodApp3, FoodApp4, FoodApp5, FoodApp6, FoodApp7, FoodApp8, FoodApp9],
            links:{
                liveDemo: 'https://food-ecommerce.herokuapp.com/',
                github: 'https://github.com/mahmoud-ashraf-devloper/food_delivery_app'
            }
        },
        {
            id: 3,
            title: 'Cloud App',
            description: 'A cloud app',
            images: [CloudApp1, CloudApp2, CloudApp3, CloudApp4, CloudApp5, CloudApp6],
            links:{
                liveDemo: 'https://cloud-app-mahmoud.herokuapp.com/',
                github: 'https://github.com/mahmoud-ashraf-devloper/cloud_app_react'
            }
        }
    ]
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-24 '>
                <div className="flex justify-center">
                    <h2 className='w-1/4  font-extrabold text-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#709dff] to-[#5651e5] uppercase'>Projects</h2>
                </div>
                <h1 className='my-8 uppercase'>What I have Built</h1>
                <div className='grid md:grid-cols-2 gap-8 my-4'>
                        {projects.map(project => (
                            <SingleProject key={project.id} project={project}/>
                        ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Projects
