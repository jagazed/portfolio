import React from 'react';
import iconLogo from "../../assets/images/logo.svg"


export const Logo: React.FC = () => {
    return (
            <a className={"Logo"} href="#">
                <img src={iconLogo} alt={"Logo"}/>
            </a>
    );
};
