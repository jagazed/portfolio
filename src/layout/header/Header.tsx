import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Button} from "../../components/Button";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'


const items = ["Home", "Tech Stack", "Projects", "Testimony"]
export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 769;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <span><Logo/></span>

                    {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
                    {/*<DesktopMenu menuItems={items}/>*/}
                    {/*<MobileMenu menuItems={items}/>*/}
                    <Button>Contact Me</Button>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


