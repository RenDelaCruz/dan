import { ActionIcon, Container, createStyles, Group, MediaQuery, Text } from '@mantine/core';
import React from 'react';
import { BrandInstagram, BrandTwitter, BrandYoutube } from 'tabler-icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 70,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
          <div style={{textAlign: 'center'}}>
            <Text>© Danial Endrawes 2022.</Text>
            <Text>Made with mantine.dev by RDC.</Text>
          </div>
        </MediaQuery>
        <MediaQuery smallerThan='xs' styles={{ display: 'none' }}>
          <Text>© Danial Endrawes 2022. Made with mantine.dev by RDC.</Text>
        </MediaQuery>

        <Group spacing={0} className={classes.links} position='right' noWrap>
          <ActionIcon size='lg'>
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size='lg'>
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
