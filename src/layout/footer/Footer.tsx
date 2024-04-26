import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {SocialLinks} from "../../components/social/SocialLinks";
import {Menu} from "../../components/menu/Menu";


const itemsFooter = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"}>
                <Logo/>
                <Phone>+375 29 7566200</Phone>
                <Link href={"#"}>info@example.com</Link>
                <SocialLinks/>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"}>
                <Menu menuItems={itemsFooter}/>
                <Copyright>© 2024 Vasiliy Zelyanko, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #a5af91;
    min-height: 20vh;
`

const Phone = styled.span`

`

const Link = styled.a`

`

const Copyright = styled.small`
`