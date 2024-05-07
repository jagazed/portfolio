import React from 'react';
import styled from "styled-components";
import { Icon } from '../icon/Icon';

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconDribble'}/></SocialLink>
            </SociaItem>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconUpwork'}/></SocialLink>
            </SociaItem>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconYoutube'}/></SocialLink>
            </SociaItem>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconLinkedin'}/></SocialLink>
            </SociaItem>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconGithubSocialLink'}/></SocialLink>
            </SociaItem>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 50px;
    height: 25px;
`

const SociaItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
`
