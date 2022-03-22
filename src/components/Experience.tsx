import { Container, Text, Timeline } from '@mantine/core';
import React from 'react';
import { GitBranch, GitCommit, GitPullRequest, MessageDots } from 'tabler-icons-react';

// const useStyles = createStyles(theme => ({}));

function Experience() {
  return (
    <Container id='experience' size={900}>
      <h1>Experience</h1>
      <Timeline active={2} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={<GitBranch size={12} />}
          title='Graphic Designer / Video Editor / Web Designer'
        >
          <Text color='dimmed' size='sm'>
            <Text variant='link' component='span' inherit>
              HMC Connections
            </Text>{' '}
            - Summer Student
          </Text>
          <Text size='xs' mt={4}>
            April - August 2018
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<GitCommit size={12} />} title='Graphic Designer / Web Designer'>
          <Text color='dimmed' size='sm'>
            <Text variant='link' component='span' inherit>
              HMC Connections
            </Text>{' '}
            - Summer Student
          </Text>
          <Text size='xs' mt={4}>
            June - August 2020
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title='Graphic Designer / Video Editor / Web Designer'
          bullet={<GitPullRequest size={12} />}
          lineVariant='dashed'
        >
          <Text color='dimmed' size='sm'>
            <Text variant='link' component='span' inherit>
              HMC Connections
            </Text>{' '}
            - Summer Student
          </Text>
          <Text size='xs' mt={4}>
            June - August 2021
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title='Graphic Designer / Video Editor / Web Designer'
          bullet={<MessageDots size={12} />}
        >
          <Text color='dimmed' size='sm'>
            <Text variant='link' component='span' inherit>
              HMC Connections
            </Text>{' '}
            - 7 month contract
          </Text>
          <Text size='xs' mt={4}>
            Sept 2021 - March 2022
          </Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Experience;
