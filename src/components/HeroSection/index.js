import React,{useState} from 'react';
import video1 from "../../videos/video1.mp4"
import slika1 from "../../images/slikaportfolio.png";
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
                <VideoBg src={slika1}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>hi i'm Josip</HeroH1>
                    <HeroP>
                       FRONT END DEVELOPER
                    </HeroP>
                <HeroBtnWrapper>
                    <Button to="/" primary="true" dark="true" onMouseEnter={onHover}  onMouseLeave={onHover}>
                        Get started {hover ? <ArrowFoward/> : <ArrowRight/>}
                    </Button>
                
                </HeroBtnWrapper>
                   
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
