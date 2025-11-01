import { FaHome } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaFile } from 'react-icons/fa';
import { FaPenNib } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import BgImage from '../Images/BackgroundImages.png'

export default function Headerport() {
  return (
    <div>
      <div className='bg-gradient-to-tl from-green-700 to-pink-500 h-[5rem] bg-cover' style={{backgroundImage:`url(${BgImage})`}}>
        <div className='flex justify-between pt-4'>
          <div>
            <h1 className='text-3xl font-bold text-violet-800'>Hello</h1>
          </div>
          <div className='flex gap-4'>
            <FaHome className='mt-2 text-2xl text-white'/><Link to="/" className='text-2xl text-white font-bold  mr-2'>Home</Link>
            <BsFillPersonFill className='text-2xl text-white mt-2' /><Link to="/about" className='text-2xl font-bold mr-2 text-white'>About</Link>
            <AiOutlineFundProjectionScreen className='text-2xl text-white mt-2' /><Link  to="/project" className='text-2xl mr-2 font-bold text-white'>Project</Link>
            <FaFile className='text-2xl text-white mt-2' /><Link to="/hari" className='text-2xl font-bold text-white mr-2'>Resume</Link>
            <FaPenNib className='text-2xl mt-2 text-white ' /><Link to="/blog" className='text-2xl  pr-3 font-bold text-white'>Blog</Link>

          </div>
        </div>
       

      </div>

    </div>
  )
}
