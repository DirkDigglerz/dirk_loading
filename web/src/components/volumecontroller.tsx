import { Box, Slider } from "@mantine/core";

type volumeControllerProps = {
  volume: number;
  onChange: (value: number) => void;
};

const VolumeController = ({
  onChange,
  volume,
}: volumeControllerProps) => {
  return (
    <Box>
      <Slider
        label = {null}
        defaultValue={volume}
        onChange={onChange}
      />
    </Box>
  );
};

export default VolumeController;
