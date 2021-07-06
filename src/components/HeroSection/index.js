import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
        <HeroBg>
        <VideoBg autoPlay loop muted scr={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <HeroH1>For The Best Dental Care</HeroH1>
        <HeroP>
            Book an Appointment 
        </HeroP>
        <HeroBtnWrapper>
            <Button to='appointment' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                Book Appointment {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>
        
        </HeroContent>
        
        </HeroContainer>
    );
};

export default HeroSection;
