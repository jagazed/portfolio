import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 743px;
    display: flex;

    @media ${theme.media.mobile} {
        ${Container} {
            padding: 0;
        }
    }
`

const SectionMainContent = styled.div`
    padding-top: 175px;
    z-index: 1;
    
    @media ${theme.media.mobile} {
        padding: 50px 20px;
        height: 520px;
    }
`
/*const PhotoWrapper = styled.div`
    position: absolute;
    left: 50%;
    background-image: url(${photo2});
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    opacity: 0.85;
    max-width: 721px;
    width: 100%;
    min-height: 743px;
    z-index: 0;
`

const Photo = styled.img`
    width: 615px;
    height: 630px;
    object-fit: cover;
`*/

const PhotoWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    opacity: 0.85;
    z-index: 0;
    
    @media ${theme.media.mobile} {
        left: 0;
        position: relative;
        margin: 0 auto;
    }
    
`

const Photo = styled.img`
    max-width: 721px;
    width: 100%;
    height: 743px;
    object-fit: cover;
    object-position: center;
    
    @media ${theme.media.mobile} {
        max-width: 576px;
        height: 594px;
    }
`

const MainTitle = styled.h1`
    ${font({weight:400, color: theme.colors.accent, lineHeight: 1.8, Fmin: 18, Fmax: 20})};
    //font-size: 20px;
    //font-weight: 400;
    //line-height: 36px;
    //color: ${theme.colors.accent};
    max-width: 404px;
`

const SmallText = styled.h2`
    ${font({family: '"Playfair Display", serif', weight:700, color: theme.colors.font, lineHeight: 1.35, Fmin: 50, Fmax: 90})};
    letter-spacing: -1px;
    text-align: left;
`

export const S = {
    Main,
    SectionMainContent,
    PhotoWrapper,
    Photo,
    MainTitle,
    SmallText
}