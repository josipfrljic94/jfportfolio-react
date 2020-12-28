import React from 'react'
import Services from '../components/Services';

import Footer from '../components/Footer';
import { services } from '../components/Info/data';
import Info from '../components/Info';
import Projects from '../components/MyProjects';

const MyServices = () => {
    return (
        <div>
             <Info {...services}/>
             <Services/>
            <Projects/>
             <Footer/>
        </div>
    )
}

export default MyServices;
