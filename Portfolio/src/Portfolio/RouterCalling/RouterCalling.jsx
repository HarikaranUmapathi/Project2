import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footers'
import BgImage from '../Images/BackgroundImages.png'

import Headerport from '../Header/Header1'

export default function RouterCalling() {
  return (
    <div className=' w-full min-h-screen bg-cover' style={{ backgroundImage: `url(${BgImage})`  }}>
      <Headerport className=' w-full h-full bg-cover ' style={{ backgroundImage: `url(${BgImage})` }} />
        <main >
            <Outlet/>
        </main>
    <Footer/>
    </div>
  )
}
