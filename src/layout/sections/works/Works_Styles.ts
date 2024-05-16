import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import iconLink1 from "../../../assets/images/akar-icons_link-chain.svg";
import iconLink2 from "../../../assets/images/akar-icons_github-fill.svg";

const Works = styled.section`
    
    @media screen and (max-width: 800px) {
        ${Container} {
            padding: 0 5px;
        }
        ${FlexWrapper} {
            gap: 6px;
        }
    }
    
    @media ${theme.media.mobile} {
        ${Container} {
            padding: 0;
        }
    }
`

const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 375px;
    margin: 40px 0 25px;
    border-radius: 20px;

    @media screen and (max-width: 783px) {
        max-width: 475px;
        width: 100%;
        margin: 20px 0 20px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        border-radius: 20px 20px 0 0;
        opacity: 0;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    max-width: 475px;
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px 20px 0 0;

    @media ${theme.media.mobile} {
        //max-width: 375px;
        //height: 260px;
    }
    
`

const DescriptionWork = styled.div`
    padding: 25px 28px;
`

const WorkTitle = styled.h3`
    margin: 0;
`

const WorkText = styled.p`
    padding: 12px 0;
`

const TechStack = styled.p`
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 12px;
`

const Link = styled.a`
    text-decoration: underline;
    font-weight: 400;
    font-size: 16px;
    position: relative;
    padding-left: 30px;
    
    &:hover {
        text-decoration: none;
    }
    
    &::before {
        content: "";
        display: inline-block;
        background-image: url(${iconLink1});
        background-size: cover;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
    }
`

const LinkWrapper = styled.div`
    
    ${Link} {
        & + ${Link} {
            margin-left: 45px;
            &::before {
                background-image: url(${iconLink2});
            }
        }
    }
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    DescriptionWork,
    WorkTitle,
    WorkText,
    TechStack,
    Link,
    LinkWrapper
}