import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    title: string
    text: string
    stack: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
            <TechStack>Tech stack: {props.stack}</TechStack>
            <Link href={"#"}>Live Preview</Link>
            <Link href={"#"}>View Code</Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #9dbdee;
    max-width: 375px;
    width: 100%;
`

const Image = styled.img`
    width: 375px;
    height: 260px;
`

const WorkTitle = styled.h3`

`

const WorkText = styled.p`

`

const TechStack = styled.p`

`

const Link = styled.a`

`