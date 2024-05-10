import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";
import {Button} from "../../../components/Button";


export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={true}>
                <MobileMenuFrapper>
                    <Logo/>
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
                    <Button>Contact Me</Button>
                </MobileMenuFrapper>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: ${theme.colors.burgerMenu};
    display: none;
    
    ${props => props.isOpen && css <{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 170px;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    background-color: rgba(45, 53, 64, 0.5);
    border-radius: 20%;
    position: fixed;
    width: 50px;
    height: 50px;
    padding-left: 8px;
    top: 25px;
    right: 20px;
    z-index: 9999;

    span {
        display: block;
        width: 34px;
        height: 4px;
        background-color: ${theme.colors.link};
        border-radius: 20px;
        position: absolute;
        top: 24px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 250, 250, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 34px;
            height: 4px;
            background-color: ${theme.colors.link};
            border-radius: 20px;
            position: absolute;
            transform: translateY(-8px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 34px;
            height: 4px;
            background-color: ${theme.colors.link};
            border-radius: 20px;
            position: absolute;
            transform: translateY(8px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const MobileMenuFrapper = styled.div`
     a.Logo {
         position: fixed;
         display: block;
         width: 93px;
         height: 65px;
         top: 19px;
         left: 20px;
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