import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Button} from "../../components/Button";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";


const items = ["Home", "About", "Tech Stack", "Projects", "Testimony"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                    <Button>Contact Me</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: transparent;
    min-height: 67px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
    a:first-of-type {
        @media ${theme.media.tablet} {
            display: none;
        }
    }
    ${Button} {
        @media ${theme.media.tablet} {
            display: none;
        }
    }
`;
