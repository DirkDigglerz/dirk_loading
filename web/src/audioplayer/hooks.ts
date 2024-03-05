import { useState, useRef, useEffect } from 'react';
import { Controls, InitialPlayerState, PlayerState, Playlist } from './types';
import { createAudioplayer } from './audioplayer';

interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

export function useAudioPlayer(playlist: Playlist): AudioPlayer {
  const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);
  const playerRef = useRef<Controls | null>(null);

  useEffect(() => {
    const newPlayer = createAudioplayer(playlist, setPlayerState);
    playerRef.current = newPlayer;
    return () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  function setVolume(value: number) {
    playerRef.current?.setVolume(value);
  }

  function setPlaybackPosition(position: number) {
    playerRef.current?.setPlaybackPosition(position);
  }

  function toggleShuffle() {
    playerRef.current?.toggleShuffle();
  }

  function toggleRepeat() {
    playerRef.current?.toggleRepeat();
  }

  function togglePlayPause() {
    playerRef.current?.togglePlayPause();
  }

  function playNextTrack() {
    playerRef.current?.playNextTrack();
  }

  function playPreviousTrack() {
    playerRef.current?.playPreviousTrack();
  }

  function cleanup() {
    playerRef.current?.cleanup();
  }

  return {
    setPlaybackPosition,
    playerState,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    cleanup,
    setVolume,
  };
}

export default useAudioPlayer;
