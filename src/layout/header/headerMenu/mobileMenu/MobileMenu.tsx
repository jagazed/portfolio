import React, {useState} from 'react';
import {Logo} from "../../../../components/logo/Logo";
import {Button} from "../../../../components/Button";
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";


export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=> {setmenuIsOpen(false)}}>
                <S.MobileFrapper>
                    <Logo/>
                    <Menu menuItems={props.menuItems} />
                    <Button>Contact Me</Button>
                </S.MobileFrapper>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

