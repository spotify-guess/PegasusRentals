import React from 'react'
import Navbar from './Navbar';
import Welcome from './Welcome';
import QuickStats from './QuickStats';
import OurFleet from './OurFleet';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './Home.css'


const Home = () => {

  if(localStorage.getItem("car") != null){
    localStorage.removeItem("car");
  }

  
  return (
    <div>
        <Navbar></Navbar>
        <Welcome></Welcome>
        <QuickStats></QuickStats>
        <div className='left'><OurFleet></OurFleet></div>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </div>
  )
}

export default Home