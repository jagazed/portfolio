import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"flex-start"} justify={"space-between"}>
                    <SectionMainContent>
                        <Name>Hello! <br /> I’m Vasiliy Zelenko</Name>
                        <MainTitle>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences
                            for the web.</MainTitle>
                    </SectionMainContent>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 630px;
    background-color: rgba(34, 42, 54, 0.95);
    display: flex;
`

const SectionMainContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Photo = styled.img`
    width: 615px;
    height: 630px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: ${theme.colors.accent};
`

const Name = styled.h2`
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
    color: ${theme.colors.font};

`