import React from 'react'
import { Button } from 'react-scroll';

const InfoSection = () => {
    return (
        <>
        <InfoContainer id={id}>
            <InfoWarpper>
            <InfoRow>
            <Column1>
            <TextWrapper>
            <TopLine>TopLine</TopLine>
            <Heading>Heading</Heading>
            <Subtitle>Subtitle</Subtitle>
            <BtnWrap>
            <Button to='home'>Button</Button>
            </BtnWrap>
            </TextWrapper>
            </Column1>
            </InfoRow>
            </InfoWarpper>
        
        </InfoContainer> 
        </>
    );
};

export default InfoSection;
