import { useState } from 'react'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Logos from './components/Logos'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-fit font-sora'>
       <AboutUs/>
<<<<<<< HEAD
       <Contact/>
=======
     <Contact/> 
>>>>>>> 85adb9ba23b855790a7c02d83c9e08264608aefb
       {/* <Logos/> */}
       <Review/> 
    </div>
  )
}

export default App
