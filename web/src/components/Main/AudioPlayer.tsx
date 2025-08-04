import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Image, Text, useMantineTheme } from '@mantine/core';
import { useHover, useLocalStorage } from '@mantine/hooks';
import { useEffect, useState, useCallback } from 'react';
import { useSettings } from '../../stores/settings';
import getImgUrl from '../../utils/getImgUrl';
import SlideSection from './SlideSection';
import Slider from './Slider';
import { AnimatePresence, motion } from 'framer-motion';
import colorWithAlpha from '../../utils/colorWithAlpha';






export default function AudioPlayer() {
  const songs = useSettings((state) => state.songs);
  const [premuteVolume, setPremuteVolume] = useLocalStorage<number>({
    key: 'premuteVolume',
    defaultValue: 1,
  });
  const [volume, setLoadingVolume] = useLocalStorage<number>({
    key: 'volume',
    defaultValue: 1,
  });
  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const theme = useMantineTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
 
  
  const currentTrack = songs[currentTrackIndex];

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
    }
  };

  const handleProgressChange = (value: number) => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio && duration > 0) {
      const newTime = (value / 100) * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const playPreviousTrack = () => {
    const newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : songs.length - 1;
    setCurrentTrackIndex(newIndex);
  };

  const playNextTrack = useCallback(() => {
    const newIndex = currentTrackIndex < songs.length - 1 ? currentTrackIndex + 1 : 0;
    setCurrentTrackIndex(newIndex);
  }, [currentTrackIndex, songs.length]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      audio.volume = volume < 1 ? volume : 1;
    }

    if (volume === 0) {
      setMuted(true);
    } else {
      setMuted(false);
    }
  }, [volume]);

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      audio.volume = volume < 1 ? volume : 1;
      
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      
      const handleEnded = () => {
        playNextTrack();
      };

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentTrackIndex, volume, playNextTrack]);

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio && currentTrack) {
      // Update the audio source when track changes
      audio.src = getImgUrl(`music/${currentTrack.filename}`);
      const testAudio = new Audio(audio.src);
      testAudio.addEventListener('error', () => {
        console.error('Audio file failed to load:', audio.src);
        useSettings.setState((state) => ({
          songs: state.songs.filter((song, index) => index !== currentTrackIndex),
        }));
      });
      audio.load();
   
      if (isPlaying) {
        audio.play().catch(console.error);
      }
    }
  }, [currentTrackIndex, currentTrack, isPlaying]);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  //  listen for sapce bar to mute / revert to premute volume
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        setMuted((prev) => !prev);
        if (muted) {
          setLoadingVolume(premuteVolume);
        } else {
          setPremuteVolume(volume);
          setLoadingVolume(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [muted, premuteVolume, volume]);

  return (
    <>
      <audio 
        src={currentTrack ? getImgUrl(`music/${currentTrack.filename}`) : ''} 
        loop={false}
        id="audio" 
      />
      <SlideSection
        side='left'
        icon='music'
        miw='40vh'
        bottom='1vh'
        left='1vh'
      >
        <Flex
          w='100%'
          p='sm'
          gap='sm'
          bg='rgba(0, 0, 0, 0.5)'
          style={{
            backdropFilter: 'blur(0.5vh)',
            borderRadius: theme.radius.xxs,
            boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
          }}
        >
          <Image
            opacity={0.6}
            w='10vh'
            h='10vh'
            src={currentTrack?.coverArt || 'https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png'}
            radius={'xs'}
          />

          <Flex
            w='100%'
            direction={'column'}
          >
            <Text
              size='2.2vh'
            >{currentTrack?.title || 'No Track'}</Text>
            <Text c='dimmed' size='xs' lh={1.2}>{currentTrack?.artist || 'Unknown Artist'}</Text>
            <Flex
              mt='xs'
              w='100%' 
              align='center'
              gap='sm'        
            >
              <Slider
                min={0}
                max={100}
                step={0.1}
                hoverLabel={false}
                value={progressPercentage}
                onChange={handleProgressChange}
                w='90%'
              />
              <Text 
                size='xs'
                c='dimmed'
              >{formatTime(currentTime)}</Text>
            </Flex>

            <Flex
              w='100%'
              justify='center'
              gap='xs'
              mt='xs'
            >
              <MediaControlIcon
                icon='fa-solid fa-backward-step'
                onClick={playPreviousTrack}
              />
              <MediaControlIcon
                icon={isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'}
                onClick={togglePlayState}
              />
              <MediaControlIcon
                icon='fa-solid fa-forward-step'
                onClick={playNextTrack}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w='100%'
          p='xs'
          gap='sm'
          bg='rgba(0, 0, 0, 0.5)'
          style={{
            backdropFilter: 'blur(0.5vh)',
            borderRadius: theme.radius.xxs,
            boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
          }}
          align={'center'}
        >
          <VolumeMuteButton
            value={muted}
            onChange={() => {
              setMuted(!muted);
              
              // set volume to 0 if muted, otherwise restore previous volume
              if (muted) {
                setLoadingVolume(premuteVolume);
              } else {
                setPremuteVolume(volume);
                setLoadingVolume(0);
              } 
            }}
          />
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            min={0}
            max={1}
            step={0.01}
            formatLabel={(val) => (val * 100).toFixed(0) + '%'}
            w='100%'
          />
        </Flex>
      </SlideSection>
    </>
  );
}

function MediaControlIcon(props: { icon: string, onClick: () => void }) {
  const {hovered, ref} = useHover();
  return (
    <Flex
      ref={ref}
      justify='center'
      align='center'
      style={{
        width: '3vh',
        height: '3vh',
        cursor: 'pointer',
      }}
    >
      <FontAwesomeIcon
        icon={props.icon as IconProp}
        style={{
          color: hovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
          fontSize: '1.8vh',
        }}
        onClick={props.onClick}
      />
    </Flex>
  )
}


export function VolumeMuteButton(props: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  const theme = useMantineTheme();
  const {hovered, ref} = useHover();
  return (
    <Flex 
      ref={ref}
      bg='rgba(77, 77, 77, 0.3)'
      p='xs'
      c='dimmed'
      style={{
        borderRadius: theme.radius.xxs,
        backdropFilter: 'blur(2vh)',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onClick={() => props.onChange(!props.value)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              background: `linear-gradient(-65deg, transparent, ${colorWithAlpha(theme.colors[theme.primaryColor][theme.primaryShade as number], 0.6)}, transparent)`,
              transform: 'skewX(-20deg)',
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>
      <FontAwesomeIcon
        icon={(props.value ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high') as IconProp}
        style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '1.6vh',
          cursor: 'pointer',
          aspectRatio: '1 / 1',
        }}

      />

    </Flex>
  )
}