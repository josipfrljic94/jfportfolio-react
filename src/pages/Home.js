import React,{useState} from 'react';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import { aboutSection, myServices } from '../components/Info/data';
import Navbar from "../components/Navbar";
import Sidebar from '../components/SideBar';

export default function Home() {
    const [isOpen, setisOpen] = useState(false);
    const toggle=()=>{
        setisOpen(!isOpen)
        console.log("klik")
    }
    return (
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <Info {...aboutSection}/>
            <Info {...myServices}/>
        </div>
    )
}
