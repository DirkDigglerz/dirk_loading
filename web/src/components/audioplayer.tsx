import { useEffect, useState } from 'react';
import playlist from '../playlist/playlist';
import Controls from './controls';
import SongInfo from './song-info';
import VolumeController from './volumecontroller';
import useAudioPlayer from '../audioplayer/hooks';
import { Card, Flex } from '@mantine/core';

const savedVolume = parseInt(localStorage.getItem("volume") || "0.05");

const AudioPlayer = () => {
  const [volume, setAudioVolume ] = useState(savedVolume);
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setVolume,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackMetadata,
  } = playerState;

  useEffect(playPreviousTrack, []);
  // set volume from local storage
  useEffect(() => {
    setVolume(volume);
  });

  return (
      <Card pos="absolute" bottom="2rem" left="2rem" p="xs" w="20vw" style={{justifyContent: "space-between", gap: "0.25rem"}}>
          <Flex justify="center" direction={"column"} gap="xs">
          <SongInfo
            title={currentTrackMetadata?.title}
            artist={currentTrackMetadata?.artist}
            coverArtSrc={currentTrackMetadata?.coverArtSrc}
            />
          <VolumeController
            volume={volume}
            onChange={(value) => {
              setAudioVolume(value);
              localStorage.setItem("volume", value.toString());
            }}
            />
          <Controls
            shuffle={shuffle}
            repeat={repeat}
            onShuffleClick={toggleShuffle}
            onRepeatClick={toggleRepeat}
            onPrevClick={playPreviousTrack}
            onNextClick={playNextTrack}
            onPlayClick={togglePlayPause}
            isPlaying={playbackState === 'PLAYING'}
          />
          </Flex>
      </Card>
  );
};

export default AudioPlayer;
