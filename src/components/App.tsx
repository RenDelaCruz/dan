import { AppShell, ColorScheme, ColorSchemeProvider, Global, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
import fontNormal from '../assets/VAGRundschriftD.woff';
import fontLight from '../assets/VAGRundschriftDLight.woff';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import HeaderResponsive from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
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
        <AppShell navbarOffsetBreakpoint='sm' fixed header={<HeaderResponsive />}>
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
