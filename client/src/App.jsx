import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import Navigations from './components/Navigations';


function App() {

  return (
    <>

      <div className="navBanner">
      <h2>LandingPage</h2>
      <Navigations/>
      </div>

      {/* <div className="appBanner"></div> */}

      <div>
      <Routes>
          <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      </div>
      <br/>

      <div className="appFooter"></div>

    </>
  )
}

export default App
