import React from 'react';
import styled from "styled-components";
import { Icon } from '../icon/Icon';

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <ul>
                <li>
                    <a href=""><Icon iconId={'iconGithub'} /></a>
                </li>
                <li>
                    <a href=""><Icon iconId={'iconLinkedin'} /></a>
                </li>
                <li>
                    <a href=""><Icon iconId={'iconTwitter'} /></a>
                </li>
            </ul>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.nav`
    ul {
        list-style: none;
        display: flex;
        gap: 10px;
    }
`
