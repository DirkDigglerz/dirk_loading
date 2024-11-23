import React, { useState } from 'react';
import { Flex } from '@mantine/core';
import YouTube, { YouTubeProps } from 'react-youtube';
import Button from './Button';

export default function AudioPlayer() {
  const youtubeUrl = 'https://www.youtube.com/watch?v=IOspC5B69L4';
  const [player, setPlayer] = useState<any | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = youtubeUrl.split('v=')[1]?.split('&')[0]; // Extract the video ID

  const handlePlayPause = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }

    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (!player) return;

    if (player.isMuted()) {
      player.unMute();
    } else {
      player.mute();
    }
  };

  const onReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target);
  };

  return (
    <Flex
      pos="absolute"
      bottom="1%"
      left="1%"
      gap="md"
      bg="rgba(0,0,0,0.7)"
      p="xs"
      style={{
        borderRadius: '0.25rem',
      }}
    >
      <Button 
        icon={isPlaying ? 'fa-pause' : 'fa-play'}
        onClick={handlePlayPause}
      />
      <Button 
        icon="volume-xmark"
        onClick={handleMute}
      />
      {/* YouTube player is rendered invisibly */}
      <div style={{ display: 'none' }}>
        <YouTube videoId={videoId} onReady={onReady} />
      </div>
    </Flex>
  );
}
