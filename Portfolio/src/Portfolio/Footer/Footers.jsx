import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footers() {
  return (
    <div className='py-6 mt-auto'>
      <div className='flex justify-between '>
        <h1 className='text-2xl pl-[5rem]'>Designed and Developed by Harikaran</h1>
        <h1 className='text-2xl'>CopyRight 2025</h1>
        <div className='flex gap-5 pr-[5rem]'>
          <FaLinkedin className='text-2xl'/>
          <FaGithub className='text-2xl'/>
        </div>
      </div>
    </div>
  )
}
