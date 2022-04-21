import React from 'react'
import TotalTasks from './TotalTasks'
import TasksComplete from './TasksCompleted';
import TasksIncomplete from './TasksIncomplete'
import TasksPercentage from './TasksPercentage';
import StatsPriority from './StatsPriority';
import { SimpleGrid } from '@mantine/core';

const Stats = () => {
  return (
	  <>
	  <SimpleGrid
	  cols={4}
	  breakpoints={[
      { maxWidth: 'md', cols: 2 },
      { maxWidth: 'xs', cols: 1 },
    ]}
    style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      <TotalTasks />
      <TasksComplete />
      <TasksIncomplete />
      <TasksPercentage />
	  </SimpleGrid>
    <StatsPriority />
	  </>
  )
}

export default Stats;