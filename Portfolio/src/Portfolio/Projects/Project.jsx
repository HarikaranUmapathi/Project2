import IMG from '../Images/IMG.png';
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  return (
    <div>
      <div>
        <div className=" mt-[8rem]">
            <h1 className="text-3xl flex justify-center">My Recent <span className=" bg-violet-800 text-transparent bg-clip-text pl-2">  Works</span></h1>
            <p className="text-xl flex justify-center">Here we have some project I worked on recently</p>
        </div>
        <div className='ml-[9rem] flex gap-[3rem] flex-wrap'>
          <div className="h-[26rem] w-[23rem] p-[4px] bg-gradient-to-r from-purple-500 to-pink-500 border-transparent border-4 shadow-2xl drop-shadow[0_0_10px_rgba(255,0,0,0.6)] bg-clip-border rounded-lg">

            <img src={IMG} className='w-[15rem] h-[12rem] pt-[2rem] pl-[5rem] pb-8'/>
            <h1 className=' flex justify-center pr-4 text-3xl'>Amazon</h1>
            <p className='text-2xl'>Develop a Amazon clone using React js. You can search for products</p>
            <a href="https://blogs.soumya-jit.tech/"><button className='flex bg-violet-600 ml-4 mt-4 p-3'><FaGithub className='text-2xl pr-2 flex'/>GitHub</button></a>
          </div>
           <div className="h-[26rem] w-[23rem]   bg-violet-800">
            <img src={IMG} className='w-[15rem] h-[12rem] pt-[2rem] pl-[5rem] pb-8'/>
            <h1 className=' flex justify-center pr-4 text-3xl'>FlipKart</h1>
            <p className='text-2xl'>Develop a FLipcart wenbsite using Html,css and Js.</p>
            <a href="https://blogs.soumya-jit.tech/"><button className='flex bg-violet-600 ml-4 mt-4 p-3'><FaGithub className='text-2xl pr-2 flex'/>GitHub</button></a>

          </div>
           <div className="h-[26rem] w-[23rem]   bg-violet-800">
            <img src={IMG} className='w-[15rem] h-[12rem] pt-[2rem] pl-[5rem] pb-8'/>
            <h1 className=' flex justify-center pr-4 text-3xl'>Earthquake Map</h1>
            <p className='text-2xl'>Develop a program to pin and see the the earthquake where Occured in past days  using React js.</p>
            <a href="https://blogs.soumya-jit.tech/"><button className='flex bg-violet-600 ml-4 mt-4 p-3'><FaGithub className='text-2xl pr-2 flex'/>GitHub</button></a>

          </div>
           <div className="h-[26rem] w-[23rem]   bg-violet-800">
            <img src={IMG} className='w-[15rem] h-[12rem] pt-[2rem] pl-[5rem] pb-8'/>
            <h1 className=' flex justify-center pr-4 text-3xl'>Neat Stater</h1>
            <p className='text-2xl'>Develop a Neat Starter website using React js and Tailwind css. </p>
            <a href="https://blogs.soumya-jit.tech/"><button className='flex bg-violet-600 ml-4 mt-4 p-3'><FaGithub className='text-2xl pr-2 flex'/>GitHub</button></a>

          </div>
          <div className="h-[26rem] w-[23rem]   bg-violet-800">
            <img src={IMG} className='w-[15rem] h-[12rem] pt-[2rem] pl-[5rem] pb-8'/>
            <h1 className=' flex justify-center pr-4 text-3xl bg-transparent'>NINE</h1>
            <p className='text-2xl'>Develop a NINe WEbsite using React js and Tailwind css.</p>
            <a href="https://blogs.soumya-jit.tech/"><button className='flex bg-violet-600 ml-4 mt-4 p-3'><FaGithub className='text-2xl pr-2 flex'/>GitHub</button></a>

          </div>
         

         
        </div>
        
        <div>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

