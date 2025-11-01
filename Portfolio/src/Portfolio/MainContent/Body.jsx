import { useEffect, useState } from "react";
import Working from '../Images/Body-Image.png';

export default function Body() {
  const Skills = ["MERN STACK", "FREELANCER"];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) =>
        prevIndex === Skills.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2-second delay

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="pt-[10%] pl-[13%] flex">
      <div>
        <h1 className="text-4xl text-green-600 pb-8">Hi There</h1>
        <h1 className="text-4xl text-green-600 pb-[50px]">I'm HARIKARAN</h1>
        <h1 className="text-4xl text-orange-500 mt-4">
          {Skills[currentSkillIndex]}
        </h1>
      </div>
      <div>
        <img src={Working} className="ml-[600px]" width="300px" height="200px"/>
      </div>

    </div>
  );
}
