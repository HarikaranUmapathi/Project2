import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <div className="text-white">
        <div className="mt-[20%] "> 
            <h1 className='text-3xl font-bold pb-[50px] pl-[18%]'> LET ME <span className="text-violet-700">INTRODUCE</span> MYSELF</h1>
            <p className='text-2xl font-semibold pb-[20px] pl-[10%]' >I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
            <p className='text-2xl font-semibold pb-[20px] pl-[10%]'>I am fluent in classics like <span className="text-violet-700">C++, Javascript and Go.</span></p>
            <p className='text-2xl font-semibold pb-[20px] pl-[10%]'>My field of Interest's are building new <span className="text-violet-700"></span> Web Technologies and Products</p>
            <p className='text-2xl font-semibold pb-[20px] pl-[10%]'>Whenever possible, I also apply my passion for developing products with </p>
             <p className='text-2xl font-semibold pl-[10%]'><span className="text-violet-700">Node.js</span> and <span className="text-violet-700">Modern Javascript Library and Frameworks</span> like<span className="text-violet-700">React.js and Express.js</span> </p>
        </div>
        <div className=" mt-[8%]">
            <h1 className="text-3xl flex justify-center pb-4">FIND ME ON</h1>
            <p className="text-2xl flex justify-center pb-4">Feel free to connect with me</p>
            <div className='flex justify-center gap-8'>
                <FaLinkedin className='rounded-full text-3xl '/>
                <FaGithub className='rounded-full text-3xl '/>

            </div>
        </div>
      </div>
    </div>
  )
}
