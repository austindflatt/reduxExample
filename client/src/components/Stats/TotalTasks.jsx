import React from 'react'
import { Text, Paper, Group } from '@mantine/core';

const TotalTasks = (props) => {

  return (
  <>
  <Paper withBorder radius="md" p="md" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          Total Tasks
        </Text>
        <Text weight={700} size="xl">{props.totalTasks}</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default TotalTasks;