import React from 'react'
import { Text, Paper, Group } from '@mantine/core';

const TotalTasks = () => {

  return (
  <>
  <Paper withBorder radius="md" p="md" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          Total Tasks
        </Text>
        <Text weight={700} size="xl">0</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default TotalTasks;