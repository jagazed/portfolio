import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer`
    background-color: ${theme.colors.sectionLine};
    ${Container} {
        border-top: 1px solid ${theme.colors.footerLine};
        padding: 25px 0 50px 0;
        
    }
    
    @media screen and (max-width: 980px) {
        ${FlexWrapper} {
            justify-content: center;
        }
    }
`

const Copyright = styled.small`
    padding-top: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: ${theme.colors.accent};
`

export const S = {
    Footer,
    Copyright
}