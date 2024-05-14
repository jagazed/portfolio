import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType ={
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width={"105"} height={"105"} viewBox={"0 0 105 105"}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
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




