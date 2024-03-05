import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@mantine/core/styles.css';
import { MantineProvider, alpha, createTheme } from '@mantine/core';


const theme = createTheme({
  primaryColor: "clean",
  radius: {
    sm: '0.5rem',
    md: '0.5rem',
    lg: '0.5rem',
  },
  colors: {
    blackblur: [
      'rgba(0, 0, 0, 0.1)',
      'rgba(0, 0, 0, 0.2)',
      'rgba(0, 0, 0, 0.3)',
      'rgba(0, 0, 0, 0.4)',
      'rgba(0, 0, 0, 0.5)',
      'rgba(0, 0, 0, 0.6)',
      'rgba(0, 0, 0, 0.7)',
      'rgba(0, 0, 0, 0.8)',
      'rgba(0, 0, 0, 0.9)',
      'rgba(0, 0, 0, 1)',
    ],
    clean:[
      "#ffffff",
      "#f3fce9",
      "#dbf5bd",
      "#c3ee91",
      "#ace765",
      "#94e039",
      "#7ac61f",
      "#5f9a18",
      "#446e11",
      "#29420a",
    ],

    // dark: [
    //   'white',
    //   'yellow',
    //   'darkgrey',
    //   'blue',
    //   'grey',
    //   '#94e039',
    //   '#000000b2',
    //   'teal',
    //   'black',
    //   'orange',
    // ],
  },
  components: {
    Card: {
      defaultProps: {
        bg: alpha('dark.9', 0.8),
      },
    },
    Paper: {
      defaultProps: {
        bg: alpha('dark.9', 0.8),
      },
    },
    ActionIcon: {
      defaultProps: {
        bg: alpha('dark.9', 0.8),
        variant: 'filled',
      },
      // vars: {
      //   // "--ai-border-width" : 0,
      // },
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
