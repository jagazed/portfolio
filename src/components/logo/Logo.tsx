import React from 'react';
import {Icon} from "../icon/Icon";
import iconLogo from "../../assets/images/logo.png"

export const Logo = () => {
    return (
        <a href="">
            {/*<Icon iconId={'iconGithub'} width={"97"} height={"59"} viewBox={"0 0 97 59"} />*/}
            <img src={iconLogo} />
        </a>
    );
};

