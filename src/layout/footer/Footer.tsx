import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FooterMenu} from "./footerMenu/FooterMenu";


const itemsFooter = ["Home", "About", "Tech Stack", "Projects", "Contact"]
export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <FooterMenu menuItems={itemsFooter}/>
                    <Copyright>© 2024 Vasiliy Zelyanko, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.sectionLine};
    
    ${Container} {
        border-top: 1px solid ${theme.colors.footerLine};
        padding: 45px 0 50px;
        
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: ${theme.colors.accent};
`