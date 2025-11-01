import resume from "../Images/Resume.pdf";


function Resume(){
    return(
        <div className="flex justify-center items-center h-screen">
           <a href={resume}   target="_blank" className="bg-violet-600 flex justify-center items-center w-[5rem] border-2 text-white border-pink-500"> Download Resume</a>
            
        </div>
    )
}

export default Resume;

