import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Text, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useMemo } from "react";
import { PlayerProps, useSettings } from "../../stores/settings";
import SlideSection from "./SlideSection";

export default function PlayerOfTheMonth() {
  const playersOfTheMonth = useSettings((state) => state.playersOfTheMonth);

  const topThree = useMemo(() => {
    return [...playersOfTheMonth]
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 3);
  }, [playersOfTheMonth]);

  return (
    <SlideSection
      left="1vh"
      top="1vh"
      title="Top Players"
      side="left"
      icon="crown"
      miw="40vh"
    >
      <Flex justify="center" align="end" gap="sm" w="100%">
        {topThree[1] && <PlayerComponent {...topThree[1]} podiumRank={2} />}
        {topThree[0] && <PlayerComponent {...topThree[0]} podiumRank={1} />}
        {topThree[2] && <PlayerComponent {...topThree[2]} podiumRank={3} />}
      </Flex>
    </SlideSection>
  );
}

export function PlayerComponent(props: PlayerProps & { podiumRank: 1 | 2 | 3 }) {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  const isLarge = props.podiumRank === 1 || hovered;
  const size = isLarge ? "12.5vh" : "10vh";

  const crownColor =
    props.podiumRank === 1
      ? "#FFD700" // Gold
      : props.podiumRank === 2
      ? "#C0C0C0" // Silver
      : "#CD7F32"; // Bronze

  return (
    <Flex
      ref={ref}
      direction="column"
      align="center"
      justify="flex-end"
      style={{
        height: size,
        width: size,
        borderRadius: theme.radius.xxs,
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        aspectRatio: "1 / 1",
        position: "relative",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: hovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      {/* Colored crown icon for placement */}
      <FontAwesomeIcon
        icon="crown"
        style={{
          position: "absolute",
          top: "0.5vh",
          left: "1vh",
          color: crownColor,
          fontSize: isLarge ? "2vh" : "1.5vh",
          textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s ease",
        }}
      />

      {/* Player name banner */}
      <Text
        w="100%"
        ta="center"
        bg="rgba(0, 0, 0, 0.6)"
        style={{
          padding: isLarge ? "1vh 0" : "0.7vh 0",
          fontSize: isLarge ? "1.3vh" : "1vh",
          letterSpacing: isLarge ? "0.3vh" : "0.2vh",
          fontWeight: 600,
          backdropFilter: "blur(2px)",
          transition: "all 0.3s ease",
        }}
      >
        {props.name.toUpperCase()}
      </Text>
    </Flex>
  );
}
