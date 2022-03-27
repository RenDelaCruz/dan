import { createStyles, Divider } from '@mantine/core';
import React from 'react';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles(theme => ({
  title: {
    paddingTop: 60,
    paddingBottom: 30,

    [BREAKPOINT]: {
      paddingTop: 40,
      paddingBottom: 30,
    },
  },

  noPadding: {
    paddingTop: 0,
    paddingBottom: 30,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 40,
    },
  },

  line: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 6],
    borderRadius: 5,
    border: '1px solid',
  },
}));

interface SectionProps {
  noPadding?: boolean;
  children: string;
}

function SectionTitle({ noPadding, children }: SectionProps) {
  const { classes } = useStyles();

  return (
    // <div className={noPadding ? classes.noPadding : classes.title}></div>
    <div className={classes.title}>
      <Divider className={classes.line} />
      <h1 style={{ marginTop: 1, marginBottom: 1 }}>{children}</h1>
      <Divider className={classes.line} />
    </div>
  );
}

export default SectionTitle;