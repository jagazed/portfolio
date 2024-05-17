import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

const Link = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
`

const MenuItem = styled.li`

`

//
// MobileMenu
//

const MobileMenu = styled.nav`

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
    max-height: 812px;
    min-width: 312px;
    width: 100%;
    
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
    top: 25px;
    right: 20px;
    padding-left: 8px;
    z-index: 9999;

    span {
        display: block;
        width: 34px;
        height: 4px;
        background-color: ${theme.colors.link};
        border-radius: 20px;
        position: absolute;
        top: 23px;

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

const MobileFrapper = styled.div`
    
     span a {
         position: fixed;
         display: block;
         width: 93px;
         height: 65px;
         top: 19px;
         left: 20px;
    }
    ${Button} {
        @media ${theme.media.tablet} {
            display: block;
        }
    }
`

//
// DesktopMenu
//

const DesktopMenu = styled.nav`
    padding: 0 20px;
    flex: 1;
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    white-space: nowrap;
`

export const S = {
    Link,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    MobileFrapper,
    DesktopMenu
}