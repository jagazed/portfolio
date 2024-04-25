import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialLinks} from "../../components/social/SocialLinks";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo></Logo>
            <Menu></Menu>
            <SocialLinks></SocialLinks>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: lightgreen;
    display: flex;
    justify-content: space-between;
`