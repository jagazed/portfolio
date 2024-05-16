import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import iconArrow from "../../../assets/images/arrow-icon.svg";

const Contacts = styled.section`
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

const Form = styled.form`
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
        font-weight: 500;
        font-size: 30px;
        width: 147px;
        height: 36px;
        padding: 0;
        background-color: unset;
        color: #676CDB;
        text-align: left;
        position: relative;
        margin: 20px 0 10px;
        
        &::after{
            content: "";
            background-image: url(${iconArrow});
            background-repeat: no-repeat;
            width: 30px;
            height: 30px;
            position: absolute;
            right: 0;
        }
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

export const S = {
    Contacts,
    ContactsArea,
    Form,
    Field
}