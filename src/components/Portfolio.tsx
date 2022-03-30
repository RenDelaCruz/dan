import {
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  Loader,
  Modal,
  Paper,
  ScrollArea,
  Skeleton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';
import oldOneBurlingtonPng from '../assets/modal/old-one-burlington.png';
import oneBurlingtonGif from '../assets/modal/one-burlington.gif';
import channelPng from '../assets/portfolio/channel.png';
import galaxyBitesPng from '../assets/portfolio/galaxy-bites.png';
import imaginablePng from '../assets/portfolio/imaginable.png';
import magdalenaMockupsPng from '../assets/portfolio/magdalena-mockups.png';
import oneBurlingtonPng from '../assets/portfolio/one-burlington.png';
import portraitPng from '../assets/portfolio/portrait.png';
import safetyDrivesUsPng from '../assets/portfolio/safety-drives-us.png';
import spillTheBeansPng from '../assets/portfolio/spill-the-beans.png';
import SectionTitle from './SectionTitle';

const useStyles = createStyles(theme => ({
  sameHeight: {
    gridAutoRows: '1fr',
  },

  bordered: {
    border: `3px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    borderRadius: theme.radius.md,
  },
}));

// function useWindowSize() {
//   const theme = useMantineTheme();
//   const [size, setSize] = useState([0, 0]);

//   useLayoutEffect(() => {
//     function updateSize() {
//       const BASE_HEIGHT = document.documentElement.clientHeight * 0.66;
//       const getSubHeight = (children: number, spacing: number) =>
//         BASE_HEIGHT / children - spacing * ((children - 1) / children);

//       const subHeight = getSubHeight(2, theme.spacing.md);
//       setSize([subHeight * (16 / 9), subHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

const child = <Skeleton sx={{ zIndex: 0 }} height={350} radius='md' animate={false} />;

const placeholder = <Loader />; //<Skeleton radius='md' />;

function Portfolio() {
  const matches = useMediaQuery('(min-width: 770px)');
  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);
  // const [subWidth, subHeight] = useWindowSize();

  // const baseHeight = '66vh';
  const subHeight = '31.433vh';
  const subWidth = `${31.433 * (16 / 9)}vh`;

  // breakpoints={[{ maxWidth: 'xs', cols: 1 }]}

  return (
    <>
      <Container id='portfolio' size={900} style={{ paddingBottom: 20 }}>
        <SectionTitle noPadding>Portfolio</SectionTitle>
        <Modal
          // size='calc(100vw - 87px)'
          size={matches ? '70%' : '95%'}
          opened={opened}
          onClose={() => setOpened(false)}
          centered
        >
          <div
            style={{ paddingTop: 0, paddingBottom: 50, paddingLeft: '2vw', paddingRight: '2vw' }}
          >
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>One Burlington Logo Redesign</SectionTitle>
            <Grid>
              <Grid.Col sm={9}>
                <Paper shadow='sm' radius='md'>
                  <Image
                    src={oneBurlingtonGif}
                    radius='md'
                    alt='One Burlington Redesign'
                    withPlaceholder
                    placeholder={placeholder}
                  />
                </Paper>
              </Grid.Col>
              <Grid.Col sm={3}>
                <Group direction={matches ? 'column' : 'row'} noWrap>
                  <Paper shadow='sm' radius='md'>
                    <Image
                      src={oldOneBurlingtonPng}
                      radius='md'
                      alt='Old One Burlington Logo'
                      withPlaceholder
                      placeholder={placeholder}
                    />
                  </Paper>
                  <Paper shadow='sm' radius='md'>
                    <Image
                      src={oneBurlingtonPng}
                      radius='md'
                      alt='New Burlington Redesign'
                      withPlaceholder
                      placeholder={placeholder}
                    />
                  </Paper>
                </Group>
              </Grid.Col>
            </Grid>
          </div>
        </Modal>
      </Container>
      <ScrollArea style={{ height: '71vh', width: 'calc(100% + 32px)', marginLeft: '-16px' }}>
        <Group noWrap spacing='lg' pt={10}>
          <Paper shadow='sm' radius='md' onClick={() => setOpened(true)}>
            <Image
              className='zoom'
              src={oneBurlingtonPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='One Burlington'
              withPlaceholder
              placeholder={placeholder}
            />
          </Paper>
          <Group direction='column'>
            <Paper shadow='sm' radius='md'>
              <Image
                className='zoom'
                src={galaxyBitesPng}
                radius='md'
                height={subHeight}
                width={subWidth}
                alt='Galaxy Bites'
                withPlaceholder
                placeholder={placeholder}
              />
            </Paper>
            <Paper shadow='sm' radius='md'>
              <Image
                className='zoom'
                src={safetyDrivesUsPng}
                radius='md'
                height={subHeight}
                width={subWidth}
                alt='Safety Drives Us'
                withPlaceholder
                placeholder={placeholder}
              />
            </Paper>
          </Group>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={imaginablePng}
              radius='md'
              height='66vh'
              width='auto'
              alt='ImaginAble'
              withPlaceholder
              placeholder={placeholder}
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={portraitPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='Portrait'
              withPlaceholder
              placeholder={placeholder}
            />
          </Paper>
          <Group direction='column'>
            <Paper shadow='sm' radius='md'>
              <Image
                className='zoom'
                src={magdalenaMockupsPng}
                radius='md'
                height={subHeight}
                width={subWidth}
                alt='Magdalena'
                withPlaceholder
                placeholder={placeholder}
              />
            </Paper>

            <Paper shadow='xl' radius='md'>
              <Image
                className='zoom'
                src={channelPng}
                radius='md'
                height={subHeight}
                width={subWidth}
                alt='YouTube Channel'
                withPlaceholder
                placeholder={placeholder}
              />
            </Paper>
          </Group>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={spillTheBeansPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='Spill the Beans'
              withPlaceholder
              placeholder={placeholder}
            />
          </Paper>
        </Group>
      </ScrollArea>
    </>
  );
}

export default Portfolio;
