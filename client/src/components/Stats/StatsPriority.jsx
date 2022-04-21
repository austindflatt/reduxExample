import React from 'react';
import { Badge } from '@mantine/core';

const StatsPriority = (props) => {
  return (
    <>
    <Badge color="red" size="lg" radius="sm" style={{ marginRight: '5px' }}>{props.criticalTasks} Critical</Badge>
    <Badge color="orange" size="lg" radius="sm" style={{ marginRight: '5px' }}>{props.highTasks} High</Badge>
    <Badge color="yellow" size="lg" radius="sm" style={{ marginRight: '5px' }}>{props.mediumTasks} Medium</Badge>
    <Badge color="green" size="lg" radius="sm">{props.lowTasks} Low</Badge>
    </>
  )
}

export default StatsPriority