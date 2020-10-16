import React,{useState,useEffect} from 'react';

import Home from "./pages/Home";
import './App.css';
import{Switch,Route} from "react-router-dom";


import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import ScrollToTop from './components/ScrollToTop';
import MyServices from './pages/MyServices';
// import MyServices from './components/MyServices';

 

function App() {
  const [scroll, setscroll] = useState(false);


  const [isOpen, setisOpen] = useState(false);
const scrollNav= ()=>{
  if(window.scrollY>=99){
    setscroll(true)
  }
  else(setscroll(false))
}
  const toggle=()=>{
    setisOpen(!isOpen)
   
}
useEffect(() => {
  window.addEventListener("scroll",scrollNav)
}, [])

 


  return (
    <div className="App">
     <ScrollToTop/>
     <Navbar toggle={toggle} scroll={scroll} />
     <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Switch>
      <Route exact path="/"><Home/> </Route>
     <Route exact path="/contact"><Contact/></Route>
       <Route exact path="/services">
          <MyServices/>
       </Route>
     
    </Switch>
    
    </div>
  );
}

export default App;
