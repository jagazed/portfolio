import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

const Footer = styled.footer`
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

export const S = {
    Footer,
    Copyright
}