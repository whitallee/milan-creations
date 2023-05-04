import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import SideNav from './components/SideNav';
import Burger from './components/Burger';
import ReactSimplyCarouselSC from './components/ReactSimplyCarousel';
import Marquee from "react-fast-marquee";


function App(props, state) {
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className='top-back'/>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <SideNav open={open} setOpen={setOpen} openD={openD} setOpenD={setOpenD}/>
      </div>
      <div className='shopping-cart'>
        <img src="https://img.icons8.com/?size=512&id=85180&format=png" alt="Cart" />
      </div>
      <h1 className='welcome'>Milan Creations</h1>
      <div className='showcase'>
        <ReactSimplyCarouselSC/>
      </div>
      <div className='store-shortcuts'>
        <a href='#'>Jewelry</a>
        <a href='#'>Clay Decoration</a>
      </div>
      <div className='gallery-container'>
        <div className='gallery'>
          <img src="https://images.pexels.com/photos/8165544/pexels-photo-8165544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img src="https://images.pexels.com/photos/12768061/pexels-photo-12768061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/neutral-sun-yellow-and-gray-art-lourry-legarde.jpg" alt="" />
        </div>
        <div className='gallery hide-at-small'>
          <img src="https://images.pexels.com/photos/965984/pexels-photo-965984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img src="https://images.pexels.com/photos/5871921/pexels-photo-5871921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <img src="https://images.pexels.com/photos/15978349/pexels-photo-15978349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
      <div className='milan-info'>
        <img className='bio-pic' src="/milan-bio.png"/>
        <p><span className='name'> My name is Maria Elena Milan.</span><br/>I was born in Antigua, Guatemala, grew up in Austin, Texas, and learned design in Fort Collins, Colorado.<br/>
          I am thrilled to be sharing my creations with you. 
          Please reach out if you have any desire for my commission artwork!</p>
      </div>
      <div className='deal-container'>
        <Marquee speed={65}>
          <p className='deal'>⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
          <p className='deal'>⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
          <p className='deal'>⭐FREE SHIPPING⭐ on orders worth $50 or more!</p>
        </Marquee>
      </div>
      <div className='contact-info'>
        <div className='left-column'>
          <h3>Mailing Address</h3>
          <p className='address'>10301 Ranch Rd. 2222<br></br>Apt. # 1234<br></br>Austin, TX 78730</p>
        </div>
        <div className='right-column'>
          <span>Email: <a href='mailto:mariaelenamilan00@gmail.com'>mariaelenamilan00@gmail.com</a></span>
          <span>Instagram: <a href='https://www.instagram.com/_elenamilan_/?hl=en'>@_elenamilan_</a></span>
          <a className='faq' href='#'>Frequently Asked Questions</a>
        </div>
      </div>
    </>
  );
};

export default App;