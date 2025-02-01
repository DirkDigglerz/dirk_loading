import { Flex, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import getImgUrl from '../../utils/getImgUrl';
import Button from './Button';
import VerticalSlider from './VerticalSlider';
import { useLocalStorage } from '@mantine/hooks';

export default function AudioPlayer() {
  const [volume, setLoadingVolume] = useLocalStorage<number>({
    key: 'volume',
    defaultValue: 1,
  });

  const theme = useMantineTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const togglePlayState = () => {
    setIsPlaying((prev) => !prev);
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        
      } else {
        audio.play();
      }
    }
  };


  const handleVolumeChange = (value: number) => {
    setLoadingVolume(value);
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      audio.volume = value;
      setLoadingVolume(value);
    }
  };

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      audio.volume = volume;
    }

    if (volume === 0) {
      setMuted(true);
      
    } else {
      setMuted(false);
    }
  } , [volume]);

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      audio.volume = volume;
      audio.play();
    }
  }, []);

  return (
    <>
      <audio src={getImgUrl('background.mp3')} loop id="audio" autoPlay />
      <Button
        icon={isPlaying ? 'fa-pause' : 'fa-play'}
        onClick={togglePlayState}
      />

      <Flex direction="column" align="center" style={{ position: 'relative' }}>
        <Button
          icon={muted ? 'volume-mute' : 'volume-up'}
          onClick={() => setShowVolumeSlider((prev) => !prev)}    
        />
        {showVolumeSlider && (
          <Flex
            h='10vh'
            p='0.6vh'
            bg='rgba(0, 0, 0, 0.7)'
            top='-11vh'
            pos='absolute'
            style={{
              borderRadius: theme.radius.xs,
            }}
          >
            <VerticalSlider
             w='1.5vh'
              value={volume}
              onChange={(value) => {
                console.log(value);
                handleVolumeChange(value);
              }}
            />
          </Flex>
        )}
      </Flex>
    </>
  );
}
