import React, { useState } from 'react';
import { TextInput, Table, ScrollArea, Badge, Button } from '@mantine/core';
import Stats from './Stats/Stats';

const TaskList = () => {
  const [search, setSearch] = useState('');
  
  return (
  <>
  <Stats />
  <TextInput
  size="md"
  placeholder="Search by title"
  onChange={(e) => setSearch(e.target.value)}
  rightSectionWidth={42}
  style={{ marginTop: '20px', marginBottom: '20px' }}
  />
  <ScrollArea>
    <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Task Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr key={null}>
          <td>Get haircut</td>
          <td>Get haircut on friday</td>
          <td><Badge color="green" size="lg" radius="sm">Low</Badge></td>
          <td>Incomplete</td>
          <td>
            <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }}>Update</Button>
            <Button type="Submit" variant="light" color="red" size="sm" >Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </ScrollArea>
  </>
  )
}

export default TaskList