import BrownVase1 from '../assets/BrownVase1.jpg';
import BrownVase2 from '../assets/BrownVase2.jpg';
import BrownVase3 from '../assets/BrownVase3.jpg';
import BlackVase1 from '../assets/BlackVase1.jpg';
import BlackVase2 from '../assets/BlackVase2.jpg';
import BlackVase3 from '../assets/BlackVase3.jpg';
import WhiteVase1 from '../assets/WhiteVase1.jpg';
import WhiteVase2 from '../assets/WhiteVase2.jpg';
import WhiteVase3 from '../assets/WhiteVase3.jpg';

function Gallery() {

  return (
  <>

  <div className="galleryBody">
  <img className="galleryImage" src={BrownVase1}></img>
  <img className="galleryImage" src={BrownVase2}></img>
  <img className="galleryImage" src={BrownVase3}></img>
  <img className="galleryImage" src={BlackVase1}></img>
  <img className="galleryImage" src={BlackVase2}></img>
  <img className="galleryImage" src={BlackVase3}></img>
  <img className="galleryImage" src={WhiteVase1}></img>
  <img className="galleryImage" src={WhiteVase2}></img>
  <img className="galleryImage" src={WhiteVase3}></img>
  </div>

  </>
  
  )
}

export default Gallery
