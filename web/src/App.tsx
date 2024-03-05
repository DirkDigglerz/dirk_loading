import './App.css';
import AudioPlayer from './components/audioplayer';
import KeyboardHelp from './components/keys';
import Logo from './components/logo';
import settings from './settings.json';
import { useState } from 'react';
import VolumeController from './components/volumecontroller';
import {
  FaKeyboard,
  FaShoppingCart,
  FaVolumeUp,
  FaDiscord,
} from 'react-icons/fa';
import { ActionIcon, Flex } from '@mantine/core';

const savedVolume = parseInt(localStorage.getItem('volume') || '0.5');

function App() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(
    !settings.background.disableSonglist &&
      localStorage.getItem('autoplayMusic') !== 'false',
  );

  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      gap={'md'}
      direction={'column'}
      bgsz={'cover'}
      bgp={'center'}
      bga={'fixed'}
      p={16}
      style={{
        backgroundImage: `url(${settings.background.image})`,
      }}
    >
      {settings.background.video && (
        <div className="background-video w-screen h-screen absolute top-0 left-0 p-0 m-0">
          <video
            autoPlay
            loop
            muted={true}
            playsInline
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          >
            <source
              src={`src/assets/videos/${settings.background.video}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <Logo
        enabled={settings.logo.enabled}
        src={settings.logo.src}
        size={settings.logo.size}
        animation={settings.logo?.animation}
      />

      {/* NAVBAR */}

      <Flex
        gap="xs"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
        p={16}
      >
        {settings.buttonLinks.store.enabled && (
          <ActionIcon
            variant="filled"
            size="xl"
            onClick={() => {
              window.open(settings.buttonLinks.discord.url, '_blank');
            }}
          >
            <FaShoppingCart />
          </ActionIcon>
        )}
        {settings.buttonLinks.discord.enabled && (
          <ActionIcon
            variant="filled"
            size="xl"
            onClick={() => {
              window.open(settings.buttonLinks.discord.url, '_blank');
            }}
          >
            <FaDiscord />
          </ActionIcon>
        )}

        {settings.keyboardView.enabled && (
          <ActionIcon
            variant="filled"
            size="xl"
            onClick={() => setShowKeyboard(!showKeyboard)} // Toggle showKeyboard state
          >
            <FaKeyboard />
          </ActionIcon>
        )}
      </Flex>

      {showKeyboard && ( // Conditional rendering for KeyboardHelp component
        <KeyboardHelp onClose={() => setShowKeyboard(false)} />
      )}

      {showAudioPlayer &&
        localStorage.getItem('autoplayMusic') !== 'false' && (
          <AudioPlayer />
        )}
    </Flex>
  );
}

export default App;
