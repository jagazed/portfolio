import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Button} from "../../components/Button";

const Header = styled.header`
    background: transparent;
    min-height: 67px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    margin-top: 9px;
    
    span a:first-of-type {
        @media ${theme.media.tablet} {
            display: none;
        }
    }
    ${Button} {
        @media ${theme.media.tablet} {
            display: none;
        }
    }
`

export const S = {
    Header
}