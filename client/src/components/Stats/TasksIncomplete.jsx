import React from 'react'
import { Text, Paper, Group } from '@mantine/core';

const TasksIncomplete = () => {

  return (
  <>
  <Paper withBorder radius="md" p="md" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          Tasks Not Complete
        </Text>
        <Text weight={700} size="xl">0</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default TasksIncomplete;