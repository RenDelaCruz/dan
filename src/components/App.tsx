import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  createStyles,
  Global,
  Image,
  MantineProvider,
} from '@mantine/core';
import React, { useState } from 'react';
import clipPng from '../assets/clip.png';
import fontNormal from '../assets/VAGRundschriftD.woff';
import fontLight from '../assets/VAGRundschriftDLight.woff';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import HeaderResponsive from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';

const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },

  dark: {
    filter: 'grayscale(100%) brightness(0.7)',
  },

  light: {
    filter: 'grayscale(100%) brightness(4.7)',
  },

  clip: {
    position: 'absolute',
    top: -150,
    zIndex: -1,

    [theme.fn.smallerThan('xs')]: {
      left: 30,
      width: '170vw',
    },

    [theme.fn.largerThan('xs')]: {
      top: -270,
      left: 30,
      width: '100vw',
    },

    [theme.fn.largerThan('md')]: {
      top: -560,
      left: -80,
      width: '110vw',
    },

    [theme.fn.largerThan('xl')]: {
      top: -560,
      left: -80,
      width: '70vw',
    },
  },
}));

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const { classes, cx } = useStyles();
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <Global
        styles={[
          {
            '@font-face': {
              fontFamily: 'Vag Rundschrift D',
              src: `url('${fontNormal}') format("woff")`,
              fontWeight: 'bold',
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Vag Rundschrift D Light',
              src: `url('${fontLight}') format("woff")`,
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
          },
        ]}
      />
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          primaryColor: 'red',
          fontFamily: 'VAG Rundschrift D Light, sans-serif',
        }}
        withGlobalStyles
      >
        <AppShell
          navbarOffsetBreakpoint='sm'
          fixed
          header={<HeaderResponsive />}
          className={classes.wrapper}
        >
          <Image
            src={clipPng}
            className={cx(
              classes.clip,
              colorScheme === 'dark' ? classes.dark : classes.light,
              'spinner'
            )}
          />
          <Hero />
          <Portfolio />
          <Experience />
          <Contact />
        </AppShell>
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
