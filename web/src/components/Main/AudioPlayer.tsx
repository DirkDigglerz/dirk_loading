import { useEffect, useState } from 'react';
import Button from './Button';
import BackgroundMusic from '/background.mp3';
import getImgUrl from '../../utils/getImgUrl';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(false);

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

  const toggleMutestate = () => {
    setMuted((prev) => !prev);
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      audio.muted = !audio.muted;
    }
  };
  console.log(getImgUrl('background.mp3'))
  // ensure audio is playing with useEffect
  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    if (audio) {
      console.log('audio', audio);
      audio.play();
    }
  }, []); 

  return (
    <>
      <audio src={getImgUrl('background.mp3')} loop id="audio" autoPlay />
      <Button
        icon={isPlaying ? 'fa-pause' : 'fa-play'}
        onClick={() => togglePlayState()}
      />
      <Button
        icon={muted ? 'volume-mute' : 'volume-up'}
        onClick={() => toggleMutestate()}
      />    
    </>
  );
}
