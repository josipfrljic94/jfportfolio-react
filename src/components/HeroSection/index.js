import React,{useState} from 'react';
import video1 from "../../videos/video1.mp4"
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP, ArrowFoward, ArrowRight,HeroBtnWrapper} from "./HeroSectionE";
import{ Button} from "../ButtonElement"

const HeroSection = () => {
    const [hover, sethover] = useState(false);
    const onHover=()=>{
        sethover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay="false" loop="true" src={video1} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>HI I'M JOSIP </HeroH1>
                    <HeroP>
                       FRONT END DEVELOPER
                    </HeroP>
                <HeroBtnWrapper>
                    <Button to="Sign up" primary="true" dark="true" onMouseEnter={onHover}  onMouseLeave={onHover}>
                        Get started {hover ? <ArrowFoward/> : <ArrowRight/>}
                    </Button>
                
                </HeroBtnWrapper>
                   
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection