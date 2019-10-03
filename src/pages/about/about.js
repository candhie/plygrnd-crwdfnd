import React from 'react'

import './about.scss';
import AboutUs from '../../assets/aboutus.jpg';

const AboutPage = () => (
  <div className='about'>
    <div> <h1 className='title'> About Us </h1></div>
    <p> Founded by young professinal who are passionate about advancing the Islamic finance industry. Starting with an idea to support of Islamic economics</p> <br />
    <p> S Fund is a sharia investment venture in Indonesia that support SMEs. Our technology analyzes hundreds of data to produce investment that has good quality and credibility. With our business assistance, we grow our business partner to accelerate and leverage the business</p> 
    <img src={AboutUs} alt='about'/>
  </div>
)

export default AboutPage;