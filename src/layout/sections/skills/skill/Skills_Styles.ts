import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Skills = styled.section``

const Skill = styled.div`
    width: 375px;
    padding: 62px 20px 40px;

    @media screen and (max-width: 797px) {
        max-width: 575px;
        width: 100%;
    }
    @media ${theme.media.mobile} {
        padding: 32px 0 20px;
    }
    
`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    font-size: 18px;
    font-weight: 300;
    text-align: center;
`

export const S = {
    Skills,
    Skill,
    SkillTitle,
    SkillText
}