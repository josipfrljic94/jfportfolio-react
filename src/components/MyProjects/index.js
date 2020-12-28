import React from 'react';
import {ServicesContainer,ServicesWrapper,ServiceCard,ServiceH1,ServiceH2,ServiceImg,ServiceP,ServiceBtn} from "./MyProjectsE";

import design from "../../images/design.svg";
import frontend from "../../images/frontend.svg";
import backend from "../../images/backend.svg";
import {arrayprojects} from "./data";

const Projects = () => {
    return (
      <ServicesContainer id="services">
          <ServiceH1>My projects</ServiceH1>
          <ServicesWrapper>
          {  arrayprojects.map(project=>{
                      return(
                        <ServiceCard>
                        <ServiceImg src={project.img} alt={project.alt}/>
                        <ServiceH2>{project.title}</ServiceH2>
                        <ServiceP>{project.description}</ServiceP>
                        <ServiceBtn href={project.link}>Link</ServiceBtn>
                        </ServiceCard>

                      )
                })}

             
              {/* <ServiceCard>
                    <ServiceImg src={frontend}/>
                    <ServiceH2>Front end</ServiceH2>
                    <ServiceP>Turn design in functional code, state managment </ServiceP>
              </ServiceCard>
              <ServiceCard>
                    <ServiceImg src={backend}/>
                    <ServiceH2>Back end</ServiceH2>
                    <ServiceP>Making backend structure</ServiceP>
              </ServiceCard>

              <ServiceCard>
                    <ServiceImg src={backend}/>
                    <ServiceH2>Back end</ServiceH2>
                    <ServiceP>Making backend structure</ServiceP>
              </ServiceCard>

              <ServiceCard>
                    <ServiceImg src={backend}/>
                    <ServiceH2>Back end</ServiceH2>
                    <ServiceP>Making backend structure</ServiceP>
              </ServiceCard>

              <ServiceCard>
                    <ServiceImg src={backend}/>
                    <ServiceH2>Back end</ServiceH2>
                    <ServiceP>Making backend structure</ServiceP>
              </ServiceCard> */}
          </ServicesWrapper>
          {/* <div>
                {  arrayprojects.map(project=>{
                      return 'ovdje smo';
                })}
            </div> */}
      </ServicesContainer>

     
    )
}

export default Projects;
