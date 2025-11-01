
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from "../About/About";
import Project from '../Projects/Project';
import Blog from '../Blog/Blog';
import RouterCalling from '../RouterCalling/RouterCalling';
import Body from '../MainContent/Body';
import Resume from '../Resume/Resume';

export default function Router1() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<RouterCalling/>}>
                    <Route path="/" element={<Body/>}/>
                    <Route path="/hari" element={<Resume/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Route>
        </Routes>

    </BrowserRouter>
  )
}
