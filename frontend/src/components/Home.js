import React from 'react';
import Popular from '../components/Popular';
import Offers from '../components/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import Testimonial from '../Pages/Testimonials';


export default function Home() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Testimonial/>
    </div>
  );
}
