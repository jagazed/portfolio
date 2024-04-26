import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SocialLinks} from "../../../components/social/SocialLinks";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <ContactsArea>
                <SectionTitle>Let's Connect</SectionTitle>
                <SocialLinks/>
            </ContactsArea>
            <StyledForm>
                <Field as={"label"}>Your name:</Field>
                <Field/>
                <Field as={"label"}>Your email address:</Field>
                <Field/>
                <Field as={"label"}>Tell about the project:</Field>
                <Field as={"textarea"}/>
                <Button type={"submit"}>Send</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: 50vh;
    background-color: #edffca;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 80px;
`

const ContactsArea = styled.div`
    
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Field = styled.input`

`