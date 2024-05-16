import React from 'react';
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles";


type WorkPropsType = {
    title: string
    text: string
    stack: string
    src: string
    linkLivePreview: string
    linkViewCode: string
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="" />
                <Button>Live preview</Button>
            </S.ImageWrapper>
            <S.DescriptionWork>
                <S.WorkTitle>{props.title}</S.WorkTitle>
                <S.WorkText>{props.text}</S.WorkText>
                <S.TechStack>Tech stack: {props.stack}</S.TechStack>
                <S.LinkWrapper>
                    <S.Link href={props.linkLivePreview} target={"_blank"}>Live Preview</S.Link>
                    <S.Link href={props.linkViewCode} target={"_blank"}>View Code</S.Link>
                </S.LinkWrapper>
            </S.DescriptionWork>
        </S.Work>
    );
};


