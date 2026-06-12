import { useState } from 'react'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Logos from './components/Logos'
import Review from './components/Review'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Routers from './components/Routers';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-[100vh] font-sora relative">
      {/* <AboutUs/> */}
      {/* <Home /> */}
      <Routers />
      <div className="fixed top-2 w-full z-[30]">
        <Navbar />
      </div>
      {/* <Contact/> */}
      {/* <Logos/> */}
      {/* <Review/>  */}
    </div>
  );
}

export default App
