import { Box, Card, Flex, Image, Stack, Text } from '@mantine/core';

type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <Flex gap="xs">
        <Card p="0">
          <Image
            src= {coverArtSrc}
            mah="7.5vh"
            alt="AlbumArt"
            fit='cover'
            />
        </Card>
      <Stack gap={2}>
        <Text fw={500}>{title}</Text>
        <Text size="sm">by {artist}</Text>
      </Stack>
    </Flex>
  );
};

export default SongInfo;