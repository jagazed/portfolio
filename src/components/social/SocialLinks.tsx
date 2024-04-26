import React from 'react';
import styled from "styled-components";
import { Icon } from '../icon/Icon';

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconGithub'}/></SocialLink>
            </SociaItem>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconTwitter'}/></SocialLink>
            </SociaItem>
            <SociaItem>
                <SocialLink href=""><Icon iconId={'iconLinkedin'}/></SocialLink>
            </SociaItem>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
`

const SociaItem = styled.li`
    
`

const SocialLink = styled.a`

`
