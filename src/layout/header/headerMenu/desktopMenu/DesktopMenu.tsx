import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"
import {Logo} from "../../../../components/logo/Logo";
import {Button} from "../../../../components/Button";
import {FlexWrapper} from "../../../../components/FlexWrapper";

export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <FlexWrapper justify={"center"} align={"center"}>
            <Logo/>
            <S.DesktopMenu>
                <Menu menuItems={props.menuItems}/>
            </S.DesktopMenu>
            <Button>Contact Me</Button>
        </FlexWrapper>
    );
};

