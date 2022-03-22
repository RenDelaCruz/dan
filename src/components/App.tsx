import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
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
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          primaryColor: 'red',
        }}
        withGlobalStyles
      >
        <AppShell navbarOffsetBreakpoint='sm' fixed header={<HeaderResponsive />}>
          <Hero />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
