
import WheelPhoto2 from '../assets/WheelPhoto2.jpg';
import Bisque from '../assets/Bisque.jpg';

export default function About() {
  return (

    <>
    <br></br> <br></br>
      <h1 className="heading">ABOUT</h1>
      <br></br> <br></br>

      <div className="about">
      <div className= "aboutBlock">
      <p> Grey Remedy was a ceramic décor line produced by Melissa Chin from 2017 to 2023. </p>
      
      <p>Through Grey Remedy, Melissa explored the creation of art as a meditative practice while producing elegant, minimalist pieces that were carefully crafted with an emphasis on the importance of shape, texture and proportion. Her goal was to create objects that brought beauty to our daily routines, turning the parts of our day that we tend to rush through into calm, intentional moments.</p>

      <p>Through her work, Melissa explored the tension between contrast and harmony, balancing curves and clean lines to produce beautifully unexpected shape combinations. She maintained a simple palette of black, white, and earth tones to challenge herself to innovate with form, experimenting with dimension and configuration to create distinctive pieces that could speak for themselves with little addition of color.</p> 
      </div>

      <div className= "aboutBlock">
      <img className="aboutPageImage" src={WheelPhoto2}></img>
      <img className="aboutPageImage" src={Bisque}></img>
      </div>

      </div>
    
    </>
  );
};