import '@mantine/dates/styles.css';
import React, { useEffect, useState } from "react";
import "./App.css";
import { MantineProvider } from '@mantine/core';
import theme from '../theme';
import { useSettings } from '../stores/settings';
import MainPage from './Main/main';
import '@mantine/carousel/styles.css';

const App: React.FC = () => {
  const [curTheme, setCurTheme] = useState(theme);
  const primaryColor = useSettings((state) => state.primaryColor);
  const primaryShade = useSettings((state) => state.primaryShade);
  const customTheme = useSettings((state) => state.customTheme);
  // Ensure the theme is updated when the settings change
  useEffect(() => {
    const updatedTheme = {
      ...theme, // Start with the existing theme object
      colors: {
        ...theme.colors, // Copy the existing colors
        custom: customTheme
      },
    };
    
    setCurTheme(updatedTheme);

    // set primary color
    setCurTheme({
      ...updatedTheme,
      primaryColor: primaryColor,
      primaryShade: primaryShade,
    });

  }, [primaryColor, primaryShade, customTheme]);

  return (
        
    <MantineProvider theme={curTheme} defaultColorScheme='dark'>
      <MainPage />
    </MantineProvider>
  );
};

export default App;
