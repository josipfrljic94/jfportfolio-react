import React from 'react';
import {ServicesContainer,ServicesWrapper,ServiceCard,ServiceH1,ServiceH2,ServiceImg,ServiceP} from "./ServicesE";

import design from "../../images/design.svg";
import frontend from "../../images/frontend.svg";
import backend from "../../images/backend.svg";

const Services = () => {
    return (
      <ServicesContainer id="services">
          <ServiceH1>My services</ServiceH1>
          <ServicesWrapper>
              <ServiceCard>
                    <ServiceImg src={design}/>
                    <ServiceH2>UI/UX design</ServiceH2>
                    <ServiceP>Making clean and modern design </ServiceP>
              </ServiceCard>
              <ServiceCard>
                    <ServiceImg src={frontend}/>
                    <ServiceH2>Front end</ServiceH2>
                    <ServiceP>Turn design in functional code, state managment </ServiceP>
              </ServiceCard>
              <ServiceCard>
                    <ServiceImg src={backend}/>
                    <ServiceH2>Back end</ServiceH2>
                    <ServiceP>Making simple server side jobs</ServiceP>
              </ServiceCard>
          </ServicesWrapper>
      </ServicesContainer>
    )
}

export default Services
