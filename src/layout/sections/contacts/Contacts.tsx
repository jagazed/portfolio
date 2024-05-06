import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SocialLinks} from "../../../components/social/SocialLinks";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContactsArea>
                    <SectionTitle>Let's connect</SectionTitle>
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
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    ${Container} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 80px;
    }
`

const ContactsArea = styled.div`
    color: ${theme.colors.link};
    h2 {
        font-size: 100px;
        font-weight: 700;
        text-align: left;
        text-transform: capitalize;
    }
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
        padding-top: 20px;
    }
    textarea {
        border-bottom: 1px solid ${theme.colors.link};
        resize: none;
        height: 48px;
        overflow: hidden;
    }
    
    button {
        width: 147px;
        height: 36px;
        padding: 0;
        background-color: unset;
        color: #676CDB;
        text-align: left;
    }
`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.sectionLine};
    color: ${theme.colors.link};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 32px;
    border: none;
    & + input {
        border-bottom: 1px solid ${theme.colors.link};
    }
    &:focus-visible {
        outline: none;
        border-bottom: 1px solid ${theme.colors.accent};
    }
`