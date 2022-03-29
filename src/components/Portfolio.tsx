import { Container, createStyles, Group, Image, Paper, ScrollArea, Skeleton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
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

const child = <Skeleton sx={{ zIndex: 0 }} height={350} radius='md' animate={false} />;

function Portfolio() {
  const matches = useMediaQuery('(min-width: 770px)');
  const { classes } = useStyles();

  return (
    <>
      <Container id='portfolio' size={900} style={{ paddingBottom: 20 }}>
        <SectionTitle noPadding>Portfolio</SectionTitle>
      </Container>
      <ScrollArea style={{ height: '70vh', width: 'calc(100% + 32px)', marginLeft: '-16px' }}>
        <Group noWrap spacing='lg' pt={10}>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={oneBurlingtonPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='One Burlington'
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={imaginablePng}
              radius='md'
              height='66vh'
              width='auto'
              alt='ImaginAble'
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
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={galaxyBitesPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='Galaxy Bites'
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={magdalenaMockupsPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='Magdalena'
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={safetyDrivesUsPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='Safety Drives Us'
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={spillTheBeansPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='Spill the Beans'
            />
          </Paper>
          <Paper shadow='sm' radius='md'>
            <Image
              className='zoom'
              src={channelPng}
              radius='md'
              height='66vh'
              width='auto'
              alt='YouTube Channel'
            />
          </Paper>
        </Group>
      </ScrollArea>
    </>
  );
}

export default Portfolio;

{
  /* <Container my='md'>
          <Grid grow className={classes.sameHeight}>
            <Grid.Col sm={8}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={oneBurlingtonPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='One Burlington'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={4}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={imaginablePng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='ImaginAble'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={4}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={portraitPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='Portrait'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={8}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={galaxyBitesPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='Galaxy Bites'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={12}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={magdalenaMockupsPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='Magdalena'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={8}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={safetyDrivesUsPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='Safety Drives Us'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={4}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={spillTheBeansPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='Spill the Beans'
                  />
                </Paper>
              }
            </Grid.Col>
            <Grid.Col sm={12}>
              {
                <Paper shadow='xl' radius='md'>
                  <Image
                    className='zoom'
                    src={channelPng}
                    radius='md'
                    height={matches ? '66vh' : 'auto'}
                    alt='YouTube Channel'
                  />
                </Paper>
              }
            </Grid.Col>
          </Grid> 
        </Container>*/
}
