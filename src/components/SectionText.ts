import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionText = styled.p`
    ${font({weight:400, color: theme.colors.accent, Fmin: 28, Fmax: 32})};
    // color: ${theme.colors.accent};
    // font-size: 32px;
    // font-weight: 400;
    text-align: center;
    padding: 20px 0 15px;
`