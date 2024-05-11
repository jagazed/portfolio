import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    padding: 0 20px;
    flex: 1;
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`

const Link = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
`

const ListItem = styled.li`

`