import { ActionIcon, Flex } from '@mantine/core';
import { FaPause, FaPlay, FaRepeat, FaShuffle } from 'react-icons/fa6';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';

type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <Flex
      gap="md"
      justify="center"
      align="center"
      direction="row"
      p="4"
    >
      <ActionIcon variant="filled" onClick={onShuffleClick} size={"sm"} bg={shuffle ? "var(--mantine-primary-color-6)" : undefined}>
        <FaShuffle />
      </ActionIcon>
      <ActionIcon variant="filled" onClick={onPrevClick}>
        <FaStepBackward />
      </ActionIcon>
      <ActionIcon
        variant= "filled"
        onClick={onPlayClick}
        size={"xl"}
        bg={isPlaying ? undefined : "var(--mantine-primary-color-6)" }
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </ActionIcon>
      <ActionIcon variant="filled" onClick={onNextClick}>
        <FaStepForward />
      </ActionIcon>
      <ActionIcon variant="filled" onClick={onRepeatClick} size={"sm"} bg={repeat ? "var(--mantine-primary-color-6)" : undefined}>
        <FaRepeat />
      </ActionIcon>
    </Flex>
  );
};

export default Controls;