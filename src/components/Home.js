import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/style.css'
import Carousel from './Carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';



import Booking from './Booking';
import About from './About';
import Feature from './Feature';
import Destination from './Destination';
import Service from './Service';
import Packages from './Packages';
import Registration from './Registration';
import Team from './Team';
import Testimonial from './Testimonial';
import Blog from './Blog';





export default function Home() {
    return (
     <>
      <Carousel/>
      <Booking/>
      <About/>
      <Feature/>
      <Destination/>
      <Service/>
      <Packages/>
      <Registration/>
      <Team/>
      <Testimonial/>
      <Blog/>
      </>
    );
}

