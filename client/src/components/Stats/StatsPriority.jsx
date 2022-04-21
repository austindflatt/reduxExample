import React from 'react';
import { Badge } from '@mantine/core';

const StatsPriority = () => {
  return (
    <>
    <Badge color="red" size="lg" radius="sm" style={{ marginRight: '5px' }}>0 Critical</Badge>
    <Badge color="orange" size="lg" radius="sm" style={{ marginRight: '5px' }}>0 High</Badge>
    <Badge color="yellow" size="lg" radius="sm" style={{ marginRight: '5px' }}>0 Medium</Badge>
    <Badge color="green" size="lg" radius="sm">0 Low</Badge>
    </>
  )
}

export default StatsPriority