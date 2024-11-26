
import { Carousel } from '@mantine/carousel';
import { Image, Transition, useMantineTheme } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { useSettings } from '../../providers/settings/settings';
import colorWithAlpha from '../../utils/colorWithAlpha';
import getImgUrl from '../../utils/getImgUrl';
import Buttons from './Buttons';
import Fade from 'embla-carousel-fade';


export default function MainPage() {


  // Add the CSS keyframes


  return (
    <>
      <Logo/>
      <Buttons/>
      <Background/>
    </>
  );
}



function Background() {
  const settings = useSettings();

  const autoplay = useRef(Autoplay({ delay: 1000, active:true }));
  const fade = useRef(Fade());
  return (

    <Carousel
      h={'100vh'}
      bg={'blue'}
      // bg='red'
      
      align={'end'}
      withIndicators={false}
      withControls={false}
      plugins={[autoplay.current, fade.current]}
      loop
      style={{
        zIndex: -1,

      }}
    >
      {Array.from({ length: settings.backgroundImages }).map((_, i) => (
        <Carousel.Slide
          
          key={i}
        >
          <Image
            src={getImgUrl(`background_${i + 1}.jpg`)}
            alt='Background'
            w='100%'
            h='100%'
          />
        </Carousel.Slide>
      ))} 
    </Carousel>
    )
}



function Logo() {
  const theme = useMantineTheme();
  console.log(getImgUrl('logo.png'))
  return (
    <Transition
      mounted={true}
      duration={500}
      timingFunction='ease'
      transition='fade'
    >
      {(styles) => (
        <Image 
          src={getImgUrl('logo.png')}
          alt='Logo'
          pos={'absolute'}
          top='50%'
          left='50%'
          style={{
            filter: `drop-shadow(0 0 25px ${
              colorWithAlpha(theme.colors[theme.primaryColor][9], 1) 
            })`,
            ...styles,
            transform: 'translate(-50%, -50%)',
          }}
          w='25vh'
          h='25vh'
        />


      )}
    </Transition>
  )
}