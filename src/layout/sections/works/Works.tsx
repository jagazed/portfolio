import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import project1Image from '../../../assets/images/Rectangle-4.webp'
import project2Image from '../../../assets/images/Rectangle-6.webp'
import project3Image from '../../../assets/images/Rectangle-8.webp'
import project4Image from '../../../assets/images/Rectangle-12.webp'
import project5Image from '../../../assets/images/Rectangle-13.webp'
import project6Image from '../../../assets/images/Rectangle-14.webp'

const worksItems = ["All", "Landing page", "React", "Spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Things I’ve built so far</SectionText>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <Work title={"Project Tile goes here"}
                      src={project1Image}
                      text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      stack={"HTML, JavaScript, React"}/>
                <Work title={"Project Tile goes here"}
                      src={project2Image}
                      text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      stack={"HTML, JavaScript, React"}/>
                <Work title={"Project Tile goes here"}
                      src={project3Image}
                      text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      stack={"HTML, JavaScript, React"}/>
                <Work title={"Project Tile goes here"}
                      src={project4Image}
                      text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      stack={"HTML, JavaScript, React"}/>
                <Work title={"Project Tile goes here"}
                      src={project5Image}
                      text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      stack={"HTML, JavaScript, React"}/>
                <Work title={"Project Tile goes here"}
                      src={project6Image}
                      text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                      stack={"HTML, JavaScript, React"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #b0a6dc;
`