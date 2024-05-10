import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    padding: 0 50px;
    flex: 1;
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: flex-end;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const Link = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top:0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.text};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.font};
        
        position: absolute;
        top: 50%;
        left: -8px;
        right: -8px;
        z-index: 1;
        
        transform: scale(0);
    }
    
    &:hover {
        &::before {
            transform: scale(1);
        }
        
        ${Mask} {
            transform: skewX(6deg) translateX(1px);
            
            & + ${Mask} {
                transform: skewX(6deg) translateX(-1px);
            }
        }
    }
`