import { Flex, Transition, useMantineTheme } from "@mantine/core";
import Button from "./Button";
import { useSettings } from "../../providers/settings/settings";
import AudioPlayer from "./AudioPlayer";
import { useEffect, useState } from "react";

export default function Buttons(){
  const theme = useMantineTheme();
  const settings = useSettings();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  }, []);

  return (
    <Transition

      mounted={display}
      duration={500}
      timingFunction="ease"
      transition="slide-up"
    >
      {(styles) => (
        <Flex
            pos='absolute'
            bottom='1%'
            left='1%'
            gap='xs'
            bg='rgba(0,0,0,0.7)'
            p='xs'
            style={{
              borderRadius: theme.radius.xs,
              ...styles,
            }}  
            >
              <AudioPlayer />
              <Button 
                icon='fa-brands fa-discord'
                onClick={() => window.open(settings.discordLink)} 
              />
              <Button 
                icon='store'
                onClick={() => window.open(settings.tebexLink)} 
              />
            </Flex>

      )}
    </Transition>
  )
}