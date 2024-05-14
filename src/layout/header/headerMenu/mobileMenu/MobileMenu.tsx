import React from 'react';
import {Logo} from "../../../../components/logo/Logo";
import {Button} from "../../../../components/Button";
import {Menu} from "../menu/Menu";
import {S} from "./../HeaderMenu_Styles";


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <S.MobileFrapper>
                    <span><Logo/></span>
                    <Menu menuItems={props.menuItems} />
                    <Button>Contact Me</Button>
                </S.MobileFrapper>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

