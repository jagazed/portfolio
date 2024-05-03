import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialLinks} from "../../components/social/SocialLinks";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"flex-end"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <SocialLinks></SocialLinks>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: transparent;
    min-height: 67px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`