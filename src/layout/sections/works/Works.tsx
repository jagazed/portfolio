import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import project1Image from '../../../assets/images/Project-1.webp'
import project2Image from '../../../assets/images/Project-2.webp'
import project3Image from '../../../assets/images/Project-3.webp'
import project4Image from '../../../assets/images/Project-4.webp'
import project5Image from '../../../assets/images/Project-5.webp'
import project6Image from '../../../assets/images/Project-6.webp'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

const worksItems = ["All", "Landing page", "React", "Spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} align={"flex-start"}>
                    <Work title={"My first react project"}
                          src={project1Image}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, React"}
                          linkLivePreview={"#"}
                          linkViewCode={"#"}/>
                    <Work title={"It-incubator training started with this project"}
                          src={project2Image}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, React"}
                          linkViewCode={"#"}
                          linkLivePreview={"#"}/>
                    <Work title={"Project Tile goes here"}
                          src={project3Image}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, React"}
                          linkViewCode={"#"}
                          linkLivePreview={"#"}/>
                    <Work title={"Project Tile goes here"}
                          src={project4Image}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, React"}
                          linkViewCode={"#"}
                          linkLivePreview={"#"}/>
                    <Work title={"Project Tile goes here"}
                          src={project5Image}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, React"}
                          linkViewCode={"#"}
                          linkLivePreview={"#"}/>
                    <Work title={"Project Tile goes here"}
                          src={project6Image}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          stack={"HTML, JavaScript, React"}
                          linkViewCode={"#"}
                          linkLivePreview={"#"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
    @media screen and (max-width: 800px) {
        ${Container} {
            padding: 0 5px;
        }
        ${FlexWrapper} {
            gap: 6px;
        }
    }
    
    @media ${theme.media.mobile} {
        ${Container} {
            padding: 0;
        }
    }
`