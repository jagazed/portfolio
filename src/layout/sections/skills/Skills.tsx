import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"iconJS"}
                           title={"JavaScript"}
                           description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Skill iconId={"iconReact"}
                           title={"React"}
                           description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Skill iconId={"iconRedux"}
                           title={"Redux"}
                           description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Skill iconId={"iconBootstrap"}
                           title={"Bootstrap"}
                           description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Skill iconId={"iconGit"}
                           title={"Git"}
                           description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    <Skill iconId={"iconGithubSkills"}
                           title={"Github"}
                           description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`