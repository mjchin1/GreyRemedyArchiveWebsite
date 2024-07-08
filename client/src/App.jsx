import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import Navigations from './components/Navigations';


function App() {

  return (
    <>
    <Navigations/>

    <h1>Hello!</h1>
    <div>
    <Routes>
        <Route path="/" element={<Gallery/>}/>
    </Routes>
    </div>

    </>
  )
}

export default App
