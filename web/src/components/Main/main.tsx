
import { Flex, Image, useMantineTheme } from '@mantine/core';
import { useLocale } from '../../providers/locales/locales';
import { useSettings } from '../../providers/settings/settings';
import Buttons from './Buttons';
import colorWithAlpha from '../../utils/colorWithAlpha';
import AudioPlayer from './AudioPlayer';



export default function MainPage() {
  const locale = useLocale();

  // Add the CSS keyframes


  return (
    <Background>
      <Logo/>
      <AudioPlayer/>
      <Buttons/>
    </Background>
  );
}



function Background(props: { children: React.ReactNode }) {
  const settings = useSettings();
  return (
    <Flex
      w='100vw'
      h='100vh'
      style={{
        backgroundImage: `url(${settings.backgroundImage})`,  
        backgroundSize: 'cover',
      }}
    > 
      {props.children}
    </Flex>
    )
}



function Logo() {
  const settings = useSettings();
  const theme = useMantineTheme();
  return (
    <Image 
      src={settings.logoImage}
      alt='Logo'
      pos={'absolute'}
      top='50%'
      left='50%'
      style={{
        transform: 'translate(-50%, -50%)',
        filter: `drop-shadow(0 0 25px ${
          colorWithAlpha(theme.colors[theme.primaryColor][9], 1) 
        })`,
      }}
      w='200px'
      h='200px'
    />
  )
}