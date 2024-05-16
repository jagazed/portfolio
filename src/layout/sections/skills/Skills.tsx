import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./skill/Skills_Styles";

const skillData = [
    {
        iconId: "iconJS",
        title: "JavaScript",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        iconId: "iconReact",
        title: "React",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        iconId: "iconRedux",
        title: "Redux",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        iconId: "iconBootstrap",
        title: "Bootstrap",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        iconId: "iconGit",
        title: "Git",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        iconId: "iconGithubSkills",
        title: "Github",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    }
]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>

                    {skillData.map((s, index)=> {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

