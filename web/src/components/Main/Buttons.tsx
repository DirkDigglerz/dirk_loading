import { Flex } from "@mantine/core";
import Button from "./Button";
import { useSettings } from "../../providers/settings/settings";

export default function Buttons(){
  const settings = useSettings();
  return (
    <Flex
    pos='absolute'
    bottom='1%'
    right='1%'
    gap='md'
    bg='rgba(0,0,0,0.7)'
    p='xs'
    style={{
      borderRadius: '0.25rem',
    }}  
    >
      
      <Button 
        icon='fa-brands fa-discord'
        onClick={() => window.open(settings.discordLink)} 
      />
      <Button 
        icon='store'
        onClick={() => window.open(settings.tebexLink)} 
      />
    </Flex>
  )
}