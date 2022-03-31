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
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useRef, useState } from 'react';
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
import ContextCard from './ContextCard';
import SectionTitle from './SectionTitle';

function vwToPixels(viewWidth: number): number {
  return document.documentElement.clientWidth * (viewWidth / 100);
}

function pixelsToVw(pixels: number): number {
  return (pixels * 100) / document.documentElement.clientWidth;
}

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

  notDraggable: {
    userDrag: 'none',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserDrag: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none',
  },
}));

const child = <Skeleton sx={{ zIndex: 0 }} height={350} radius='md' animate={false} />;

const placeholder = <Loader variant='bars' />; //<Skeleton radius='md' />;

function Portfolio() {
  const matches = useMediaQuery('(min-width: 770px)');
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const [opened, setOpened] = useState({
    oneBurlington: false,
    galaxyBites: false,
    safetyDrivesUs: false,
    imaginable: false,
    portrait: false,
    magdalena: false,
    channel: false,
    spillTheBeans: false,
  });

  const subHeight = '31.433vh';
  const subWidth = `${31.433 * (16 / 9)}vh`;

  const baseVw = 29.5;
  const gutterVw = pixelsToVw(theme.spacing.md);
  const [columnVh, setColumnVh] = useState((baseVw - gutterVw) / 2);

  const oneBurlingtonColumnRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (oneBurlingtonColumnRef.current) {
        const gutterVw = pixelsToVw(theme.spacing.md);
        setColumnVh((baseVw - gutterVw) / 2);
      }
    });
  }, []);

  // breakpoints={[{ maxWidth: 'xs', cols: 1 }]}

  return (
    <>
      <Container id='portfolio' size={900} style={{ paddingBottom: 20 }}>
        <SectionTitle noPadding>Portfolio</SectionTitle>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.oneBurlington}
          onClose={() => setOpened({ ...opened, oneBurlington: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>One Burlington Logo Redesign</SectionTitle>
            <Grid>
              <Grid.Col sm={9}>
                <Paper shadow='sm' radius='md'>
                  <Image
                    src={oneBurlingtonGif}
                    radius='md'
                    alt='One Burlington Redesign'
                    height={matches ? '29.5vw' : 'auto'}
                    withPlaceholder
                    placeholder={placeholder}
                  />
                </Paper>
              </Grid.Col>
              <Grid.Col sm={3}>
                <div ref={oneBurlingtonColumnRef}>
                  <Group direction={matches ? 'column' : 'row'} noWrap>
                    <Paper shadow='sm' radius='md'>
                      <Image
                        src={oldOneBurlingtonPng}
                        radius='md'
                        alt='Old One Burlington Logo'
                        height={matches ? `${columnVh}vw` : 'auto'}
                        withPlaceholder
                        placeholder={placeholder}
                      />
                    </Paper>
                    <Paper shadow='sm' radius='md'>
                      <Image
                        src={oneBurlingtonPng}
                        radius='md'
                        alt='New Burlington Redesign'
                        height={matches ? `${columnVh}vw` : 'auto'}
                        withPlaceholder
                        placeholder={placeholder}
                      />
                    </Paper>
                  </Group>
                </div>
              </Grid.Col>
            </Grid>
            <ContextCard programIconCodes={['ai', 'ae']} />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.galaxyBites}
          onClose={() => setOpened({ ...opened, galaxyBites: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Placeholder galaxy</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image radius='md' alt='Placeholder alt' withPlaceholder placeholder={placeholder} />
            </Paper>
            <ContextCard
              programIconCodes={['pr', 'ae', 'ps', 'ai']}
              buttonLink='/'
              buttonText='Placeholder'
            />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.safetyDrivesUs}
          onClose={() => setOpened({ ...opened, safetyDrivesUs: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Placeholder safety</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image radius='md' alt='Placeholder alt' withPlaceholder placeholder={placeholder} />
            </Paper>
            <ContextCard
              programIconCodes={['pr', 'ae', 'ps', 'ai']}
              buttonLink='/'
              buttonText='Placeholder'
            />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.imaginable}
          onClose={() => setOpened({ ...opened, imaginable: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Placeholder imaginable</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image radius='md' alt='Placeholder alt' withPlaceholder placeholder={placeholder} />
            </Paper>
            <ContextCard
              programIconCodes={['pr', 'ae', 'ps', 'ai']}
              buttonLink='/'
              buttonText='Placeholder'
            />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.portrait}
          onClose={() => setOpened({ ...opened, portrait: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Placeholder portrait</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image radius='md' alt='Placeholder alt' withPlaceholder placeholder={placeholder} />
            </Paper>
            <ContextCard
              programIconCodes={['pr', 'ae', 'ps', 'ai']}
              buttonLink='/'
              buttonText='Placeholder'
            />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.magdalena}
          onClose={() => setOpened({ ...opened, magdalena: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Placeholder magdalena</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image radius='md' alt='Placeholder alt' withPlaceholder placeholder={placeholder} />
            </Paper>
            <ContextCard
              programIconCodes={['pr', 'ae', 'ps', 'ai']}
              buttonLink='/'
              buttonText='Placeholder'
            />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.channel}
          onClose={() => setOpened({ ...opened, channel: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Captain Dan Groove YouTube Channel</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image
                src={channelPng}
                radius='md'
                alt='YouTube Channel'
                withPlaceholder
                placeholder={placeholder}
              />
            </Paper>
            <ContextCard
              programIconCodes={['pr', 'ae', 'ps', 'ai']}
              buttonLink='https://www.youtube.com/c/CaptainDanGroove'
              buttonText='View YouTube Channel'
            />
          </div>
        </Modal>
        <Modal
          size={matches ? '70%' : '95%'}
          opened={opened.spillTheBeans}
          onClose={() => setOpened({ ...opened, spillTheBeans: false })}
          centered
        >
          <div style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: '2vw', paddingRight: '2vw' }}>
            <input type='hidden' data-autofocus />
            <SectionTitle noPadding>Spill The Beans App Prototype</SectionTitle>
            <Paper shadow='sm' radius='md'>
              <Image
                src={spillTheBeansPng}
                radius='md'
                alt='Spill the Beans'
                withPlaceholder
                placeholder={placeholder}
              />
            </Paper>
            <ContextCard
              programIconCodes={['xd']}
              buttonLink='https://xd.adobe.com/view/4b55e194-f7b1-4bf2-979d-1589af765b48-1e06/'
              buttonText='View Prototype'
            />
          </div>
        </Modal>
      </Container>
      <ScrollArea style={{ height: '71vh', width: 'calc(100% + 32px)', marginLeft: '-16px' }}>
        <Group noWrap spacing='lg' pt={10}>
          <Paper
            shadow='sm'
            radius='md'
            onClick={() => setOpened({ ...opened, oneBurlington: true })}
          >
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
            <Paper
              shadow='sm'
              radius='md'
              onClick={() => setOpened({ ...opened, galaxyBites: true })}
            >
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
            <Paper
              shadow='sm'
              radius='md'
              onClick={() => setOpened({ ...opened, safetyDrivesUs: true })}
            >
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
          <Paper shadow='sm' radius='md' onClick={() => setOpened({ ...opened, imaginable: true })}>
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
          <Paper shadow='sm' radius='md' onClick={() => setOpened({ ...opened, portrait: true })}>
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
            <Paper
              shadow='sm'
              radius='md'
              onClick={() => setOpened({ ...opened, magdalena: true })}
            >
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
            <Paper shadow='xl' radius='md' onClick={() => setOpened({ ...opened, channel: true })}>
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
          <Paper
            shadow='sm'
            radius='md'
            onClick={() => setOpened({ ...opened, spillTheBeans: true })}
          >
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
