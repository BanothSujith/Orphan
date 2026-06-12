import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';

function Routers() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/aboutus" element = {<AboutUs/>} />
      <Route path="/contactus" element = {<Contact/>} />
    </Routes>
  )
}

export default Routers