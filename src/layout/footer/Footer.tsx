import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {S} from "./Footer_Styles";

const itemsFooter = ["Home", "Tech Stack", "Projects", "Contact"]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <FooterMenu menuItems={itemsFooter}/>
                    <S.Copyright>© 2024 Vasiliy Zelyanko, All Rights Reserved.</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

