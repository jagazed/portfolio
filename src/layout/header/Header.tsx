import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLinks} from "../../components/social/SocialLinks";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <SocialLinks></SocialLinks>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: lightgreen;
    display: flex;
    justify-content: space-between;
`