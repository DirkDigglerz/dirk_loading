declare global {
  interface Window {
    nuiHandoverData?: SettingsProps;
  }
}

import { Carousel } from '@mantine/carousel';
import { Flex, Image, useMantineTheme } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useEffect, useRef } from 'react';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { SettingsProps, useSettings } from '../../stores/settings';
import colorWithAlpha from '../../utils/colorWithAlpha';
import getImgUrl from '../../utils/getImgUrl';
import AudioPlayer from './AudioPlayer';
import Buttons from './Buttons';
import Changelog from './Changelogs';
import PlayerOfTheMonth from './PlayersOfTheMonth';


export default function MainPage() {

  useEffect(() => {
    useSettings.setState((state) => ({
      ...state,
      ...window.nuiHandoverData,
    }));
  }, []);
  
  useNuiEvent('UPDATE_SETTINGS', (data: Partial<SettingsProps>) => {
    useSettings.setState((state) => ({
      ...state,
      ...data,
    }));
  });

  return (
    <>
      <Logo/>
      <PlayerOfTheMonth/>
      <Changelog/>
      <AudioPlayer />
      <Buttons/>
      <Background/>
    </>
  );
}



function Background() {
  const settings = useSettings();
  const carouselTime = useSettings((state) => state.carouselTime);

  const autoplay = useRef(Autoplay({ delay: carouselTime * 1000, active:true }));
  const fade = useRef(Fade());
  return (

    <Carousel
      h={'100vh'}
      bg={'black'}
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
            src={getImgUrl(`backgrounds/background_${i + 1}.jpg`)}
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

      <Flex
        align='center'
        gap='sm'
        pos='absolute'
        top='2vh'
        right='50%'
        style={{
          transform: 'translateX(50%)',
        }}
         
      >
        <Image
          src={getImgUrl('logo.png')}
          alt='Logo'
          // w='14vh'
          h='16vh'
          radius='xs'
          style={{
            // boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
            filter: `drop-shadow(0 0 2vh ${colorWithAlpha(theme.colors[theme.primaryColor][9], 0.5)})`,
            // backdropFilter: 'blur(0.5vh)',
            borderRadius: theme.radius.xxs,
          }}
        />

          {/* <Text
            size='10.5vh'
            style={{
              fontFamily: 'Akrobat Bold',
              WebkitTextStroke: `0.2vh rgba(0, 0, 0, 0.5)`,
              textShadow: `0 0 2vh rgba(0, 0, 0, 0.5)`,
            }}
          >VORTEX</Text>
          <Text
            c={theme.colors[theme.primaryColor][9]}
            size='10.5vh'
            style={{
              fontFamily: 'Akrobat Bold',
              // gradient of the primary color
            }}
          >RP</Text> */}
      </Flex>
  )
}