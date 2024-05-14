import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                    <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto;
        padding: 0 5px;
    }
`

const ListItem = styled.li`
    
`

const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-bottom: 10px;
    position: relative;
    z-index: 0;
    display: inline-block;
    
    &:hover {
        &::before {
            height: 10px;
        }
    }
    
    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: -1;
    }
`