import React from 'react';
import iconLogo from "../../assets/images/logo.svg"
import styled from "styled-components";


export const Logo = () => {
    return (
            <a className={"Logo"} href="#">
                <img src={iconLogo} alt={"Logo"}/>
            </a>
    );
};
