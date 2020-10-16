import React from 'react'
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { socialmedia } from '../components/Section/data';


const Contact = () => {
   
    
    return (
        <div >
          
          
            <Section {...socialmedia}/>
            <Signup/>
            <Footer/>
    
        </div>
    )
}

export default Contact
