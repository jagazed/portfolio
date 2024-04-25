import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Name>Hello! I’m Vasiliy Zelenko</Name>
                    <MainTitle>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences
                        for the web.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #a9c098;
`

const Photo = styled.img`
    width: 360px;
    height: 371px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    
`

const Name = styled.span`
    
`