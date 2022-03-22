import { createStyles, Divider } from '@mantine/core';
import React from 'react';

// TODO: Delete this

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles(theme => ({
  title: {
    paddingTop: 10,
    paddingBottom: 20,

    [BREAKPOINT]: {
      paddingTop: 40,
      paddingBottom: 30,
    },
  },

  line: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 6],
    borderRadius: 5,
    border: '1px solid',
  },
}));

interface SectionProps {
  children: string;
}

function SectionTitle({ children }: SectionProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.title}>
      <Divider className={classes.line} />
      <h1 style={{ marginTop: 1, marginBottom: 1 }}>{children}</h1>
      <Divider className={classes.line} />
    </div>
  );
}

export default SectionTitle;
