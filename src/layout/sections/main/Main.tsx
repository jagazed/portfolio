import React from 'react';
import photo2 from '../../../assets/images/bg-image1.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper wrap={"wrap-reverse"}>
                    <S.SectionMainContent>
                        <S.SmallText>Hello! <br /> I’m Vasiliy Zelenko</S.SmallText>
                        <S.MainTitle>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences
                            for the web.</S.MainTitle>
                    </S.SectionMainContent>
                    <S.PhotoWrapper>
                        <S.Photo src={photo2} alt="" />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

