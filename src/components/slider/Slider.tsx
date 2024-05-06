import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@Ivan Ivanow</Name>
                </Slide>    
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;

`

const Text = styled.p`

`

const Name = styled.span`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: ${theme.colors.link};
    display: inline-block;
    margin: 15px 0 12px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: ${theme.colors.accent};
        border-radius: 20px;
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${theme.colors.linkHover};
            width: 20px;
        }
    }
`