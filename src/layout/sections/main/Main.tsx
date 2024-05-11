import React from 'react';
import styled from "styled-components";
import photo2 from '../../../assets/images/bg-image1.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper wrap={"wrap-reverse"}>
                    <SectionMainContent>
                        <Name>Hello! <br /> I’m Vasiliy Zelenko</Name>
                        <MainTitle>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences
                            for the web.</MainTitle>
                    </SectionMainContent>
                    <PhotoWrapper>
                        <Photo src={photo2} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 743px;
    display: flex;

    @media ${theme.media.mobile} {
        ${Container} {
            padding: 0;
        }
    }
`

const SectionMainContent = styled.div`
    padding-top: 175px;
    //height: 100%;
    z-index: 1;
    @media ${theme.media.mobile} {
        padding-top: 50px;
    }
`
/*const PhotoWrapper = styled.div`
    position: absolute;
    left: 50%;
    background-image: url(${photo2});
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    opacity: 0.85;
    max-width: 721px;
    width: 100%;
    min-height: 743px;
    z-index: 0;
`

const Photo = styled.img`
    width: 615px;
    height: 630px;
    object-fit: cover;
`*/

const PhotoWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    opacity: 0.85;
    z-index: 0;
    //max-width: 721px;
    //width: 100%;
    //max-height: 743px;
    // background-image: url(${photo2});
    // background-position:center;
    // background-repeat: no-repeat;
    // background-size:cover;
    //max-width: 721px;
    //width: 100%;
    //min-height: 743px;
    @media ${theme.media.mobile} {
        left: 0;
        position: relative;
        margin: 0 auto;
    }
    
`

const Photo = styled.img`
    max-width: 721px;
    width: 100%;
    height: 743px;
    object-fit: cover;
    object-position: center;
    
    @media ${theme.media.mobile} {
        width: 375px;
        height: 450px;
    }
`


const MainTitle = styled.h1`
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: ${theme.colors.accent};
    width: 404px;
`

const Name = styled.p`
    font-size: 90px;
    font-weight: 700;
    line-height: 108px;
    letter-spacing: -1px;
    text-align: left;
    color: ${theme.colors.font};

`