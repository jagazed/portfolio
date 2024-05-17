import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const FooterMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
    white-space: nowrap;
    padding: 15px 10px 0 0;
    ul {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    
    @media screen and (max-width: 769px) {
        display: none;
    }
`

const ListItem = styled.li`
`

const Link = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: ${theme.colors.accent};
`