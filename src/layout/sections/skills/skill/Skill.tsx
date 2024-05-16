import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "./../skill/Skills_Styles";

type SkillPropsType ={
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width={"105"} height={"105"} viewBox={"0 0 105 105"}/>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};






