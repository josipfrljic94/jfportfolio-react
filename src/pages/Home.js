import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import { aboutSection, myServices } from '../components/Info/data';
import Section from '../components/Section';
import { myservicestext} from '../components/Section/data';



export default function Home() {
   
    return (
        <div >
           
         
            <HeroSection/>
            <Info {...aboutSection}/>
            <Info {...myServices}/>
           <Section {...myservicestext}/>
            <Footer/>
           
        </div>
    )
}
