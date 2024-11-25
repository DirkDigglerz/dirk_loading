import { MantineColor, MantineColorShade, MantineColorsTuple } from "@mantine/core";

export type SettingsProps = {
  primaryColor: MantineColor;
  primaryShade: MantineColorShade;
  customTheme: MantineColorsTuple;

  discordLink: string;
  tebexLink: string;

  backgroundImages:number;
  logoImage: string;

  // Add more settings here
};
