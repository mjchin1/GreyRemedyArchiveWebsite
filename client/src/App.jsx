import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import About from './components/About';
import Press from './components/Press';
import Navigations from './components/Navigations';


function App() {

  return (
    <>

      <div className="navBanner">
      <h2 className="appHeading">Grey Remedy</h2>
      <Navigations/>
      </div>

      {/* <div className="appBanner"></div> */}

      <div>
      <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/press" element={<Press/>}/>
      </Routes>
      </div>
      <br/>

      <div className="appFooter">

       <p>© Grey Remedy, 2024. All rights reserved.</p>
        <a className="instagramLink" target="_blank" href="https://www.instagram.com/greyremedyco/?hl=en">Instagram</a>
      </div>

    </>
  )
}

export default App
