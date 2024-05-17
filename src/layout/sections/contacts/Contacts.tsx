import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SocialLinks} from "../../../components/social/SocialLinks";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <S.ContactsArea>
                        <SectionTitle>Let's connect</SectionTitle>
                        <SocialLinks/>
                    </S.ContactsArea>
                    <S.Form>
                        <S.Field as={"label"}>Your name:</S.Field>
                        <S.Field/>
                        <S.Field as={"label"}>Your email address:</S.Field>
                        <S.Field/>
                        <S.Field as={"label"}>Tell about the project:</S.Field>
                        <S.Field as={"textarea"}/>
                        <Button type={"submit"}>Send</Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

