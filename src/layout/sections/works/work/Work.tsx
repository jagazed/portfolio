import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";
import iconLink1 from "../../../../assets/images/akar-icons_link-chain.svg";
import iconLink2 from "../../../../assets/images/akar-icons_github-fill.svg";


type WorkPropsType = {
    title: string
    text: string
    stack: string
    src: string
    linkLivePreview: string
    linkViewCode: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="" />
                <Button>Live preview</Button>
            </ImageWrapper>
            <DescriptionWork>
                <WorkTitle>{props.title}</WorkTitle>
                <WorkText>{props.text}</WorkText>
                <TechStack>Tech stack: {props.stack}</TechStack>
                <LinkWrapper>
                    <Link href={props.linkLivePreview} target={"_blank"}>Live Preview</Link>
                    <Link href={props.linkViewCode} target={"_blank"}>View Code</Link>
                </LinkWrapper>
            </DescriptionWork>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 375px;
    width: 100%;
    margin-bottom: 65px;
    border-radius: 20px;
`

const ImageWrapper = styled.div`
    position: relative;
    
    &:hover {
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
        }

        ${Button} {
            opacity: 1;
        }
    }
    
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
    
`

const Image = styled.img`
    width: 375px;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
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
