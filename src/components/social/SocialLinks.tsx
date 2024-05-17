import React from 'react';
import styled from "styled-components";
import {Icon} from '../icon/Icon';
import {theme} from "../../styles/Theme";


const socialItemData = [
    {
        href: "#",
        iconId: "iconDribble"
    },
    {
        href: "#",
        iconId: "iconUpwork"
    },
    {
        href: "#",
        iconId: "iconYoutube"
    },
    {
        href: "#",
        iconId: "iconLinkedin"
    },
    {
        href: "#",
        iconId: "iconGithubSocialLink"
    }
]
export const SocialLinks: React.FC = () => {
    return (
        <StyledSocialLinks>
            {socialItemData.map((s, index)=> {
                return (
                    <SociaItem key={index}>
                        <SocialLink href={s.href}><Icon iconId={s.iconId}/></SocialLink>
                    </SociaItem>
                )
            })}
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 50px;
    height: 25px;
    
    @media ${theme.media.mobile} {
        gap: 25px;
    }
`

const SociaItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
`
