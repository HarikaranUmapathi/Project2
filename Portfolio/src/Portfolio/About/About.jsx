import { FaReact } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { FaJava } from 'react-icons/fa';
import CLang from '../Images/CLanguage.png';
import { SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaGithub } from 'react-icons/fa';

export default function Abouts() {
  return (
    <div className=' '>
      <div className='ml-[7%]  mt-[20%] leading-7'>
        <h1 className='text-3xl pl-[15%] pb-[50px] font-bold '>Know Who I'M</h1>
        <p className='text-2xl pb-2 text-white'>Hi Everyone, Myself<span className='text-violet-900'> Harikaran </span>from Nadapai in Tamilnadu.</p>
        <p className='text-2xl text-white'>I am currently doing my   UG <span className='text-violet-900'>B.E CSE  </span>in C.Abdul Hakeem</p>
          <p className='text-2xl pb-2 text-white'>College of Engineering and Technology at Melvisharam.</p> 
        <p className='text-2xl text-white'>I have completed My <span className='text-violet-900'>12th in 2021-2022 </span>in </p>
          <p className='text-2xl pb-2 text-white'>Vedavalli Vidyalaya Senior Sec School at Walajapet.</p>
        <p className='text-2xl text-white '>I have completed My <span className='text-violet-900'>10th in 2019-2020 </span>in</p>
          <p className='text-2xl pb-[19%] text-white'> Queen Mary's Hr.sec School at Katrambakkam.</p>
      </div>
      <div className='max-w-[27rem] mx-auto justify-center mb-7 text-white'>
        <h1 className='text-4xl pl-[75px] pb-8'>Professional Skillset</h1>
        <div className='max-w-[32rem] mx-auto grid md:grid-cols-2 mb-5 justify-between' >
          <FaReact className='text-[7rem] border-2 p-3 mb-6 border-violet-600 border-solid' />
          <BiLogoMongodb className='text-[7rem]  p-3 border-2 mb-6 border-violet-600 border-solid' />
          <FaJava className='text-[7rem] border-2 mb-6 p-3 border-violet-600 border-solid' />
          <img src={CLang} height="116" width="116" className='p-3  border-2 mb-6 border-violet-600 border-solid' />
        </div>
      </div>
        
      <h1 className='text-4xl flex justify-center mt-[9%]'>Tools | Use</h1>
      <div className='mt-[4%] flex max-w-[32rem] mx-auto gap-[5rem]'>
        <SiPostman className='text-[7rem] p-3 border-2 border-violet-600 border-solid'/>
        <VscVscode className='text-[7rem]  p-3 border-2 border-violet-600 border-solid'/>
        <FaGithub className='text-[7rem] p-3 border-2 border-violet-600 border-solid'/>
      </div>
    </div>
  )
}
