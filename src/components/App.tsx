import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { useState } from 'react';
import HeaderResponsive from './HeaderResponsive';
import HeroAbout from './HeroAbout';

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
          <HeroAbout />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
