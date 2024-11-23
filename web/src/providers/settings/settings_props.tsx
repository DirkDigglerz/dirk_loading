import { MantineColor, MantineColorShade, MantineColorsTuple } from "@mantine/core";

export type SettingsProps = {
  primaryColor: MantineColor;
  primaryShade: MantineColorShade;
  customTheme: MantineColorsTuple;

  discordLink: string;
  tebexLink: string;

  backgroundImage: string;
  logoImage: string;

  // Add more settings here
};
