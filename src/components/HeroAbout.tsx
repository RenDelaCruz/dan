import {
  Button,
  Container,
  createStyles,
  Group,
  List,
  Text,
  ThemeIcon,
  useMantineTheme
} from '@mantine/core';
import React from 'react';
import { Check } from 'tabler-icons-react';
import resume from '../assets/DanialEndrawes_Resume.pdf';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 40,
    paddingBottom: 60,

    [BREAKPOINT]: {
      paddingBottom: 20,
      paddingTop: 0,
    },
  },

  title: {
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    // borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

    '&:hover': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
      } !important`,
    },
  },
}));

function HeroAbout() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <Text className={classes.description}>Hi, my name is</Text>

        <h1 className={classes.title}>
          Danial{' '}
          <Text
            component='span'
            // variant='gradient'
            // gradient={{ from: 'red', to: 'red' }}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 8 : 6]}
            inherit
          >
            Endrawes
          </Text>
        </h1>

        <Text className={classes.description}>
          I am a talented graphic designer ready to craft the future of digital experiences.
        </Text>

        <List
          mt={30}
          spacing='sm'
          size='sm'
          icon={
            <ThemeIcon size={20} radius='xl'>
              <Check size={12} />
            </ThemeIcon>
          }
          className={classes.description}
        >
          <List.Item>
            <strong>Video Editor</strong>
          </List.Item>
          <List.Item>
            <strong>Graphic Designer</strong>
          </List.Item>
          <List.Item>
            <strong>UX/UI Designer</strong>
          </List.Item>
          <List.Item>
            <strong>Motion Graphics Designer</strong>
          </List.Item>
        </List>

        <Group className={classes.controls}>
          <Button size='md' className={classes.control} component='a' href={resume} target='_blank'>
            Resume
          </Button>

          <Button
            component='a'
            href='#'
            size='md'
            variant='light'
            className={cx(classes.control, classes.githubControl)}
            // color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
          >
            Contact
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default HeroAbout;
