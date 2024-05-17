import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import iconArrow from "../../../assets/images/arrow-icon.svg";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Contacts = styled.section`

    @media screen and (max-width: 980px) {
        ${FlexWrapper} {
            justify-content: center;
        }
    }
`

const ContactsArea = styled.div`
    max-width: 450px;
    width: 100%;
    padding-bottom: 20px;
    h2 {
        font-size: 100px;
        font-weight: 700;
        text-align: left;
        text-transform: capitalize;
        color: ${theme.colors.link};
        padding-bottom: 25px;
    }

    @media screen and (max-width: 980px) {
        max-width: 500px;
        h2 {
            font-size: 80px;
            padding-bottom: 15px;
        }
        margin-left: 0;
    }
    @media ${theme.media.mobile} {
        h2 {
            font-size: 70px;
        }
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
        color: ${theme.colors.linkHover};
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

    @media ${theme.media.tablet} {
        button {
            width: 127px;
            height: 34px;
            font-size: 28px;
        }
    }

    @media ${theme.media.mobile} {
        button {
            width: 107px;
            height: 28px;
            font-size: 22px;
            margin-top: 15px;
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
    
    @media ${theme.media.tablet} {
        font-size: 28px;
    }

    @media ${theme.media.mobile} {
        font-size: 22px;
    }
`

export const S = {
    Contacts,
    ContactsArea,
    Form,
    Field
}