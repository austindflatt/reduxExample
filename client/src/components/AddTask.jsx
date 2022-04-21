import React from 'react';
import { TextInput, Textarea, NativeSelect, Title, Button } from '@mantine/core';

const AddTask = () => {
  return (
    <div style={{ marginTop: '20px' }}>
    <Title order={3} style={{ marginBottom: '10px' }}>Create New Task</Title>
    <TextInput
    placeholder="Title"
    label="Title of task"
    required
    />
    <Textarea
    label="Description"
    required
    />
    <NativeSelect
    data={['Critical', 'High', 'Medium', 'Low']}
    placeholder="Select a priority"
    label="Priority"
    required
    />
    <Button type="Submit" color='green' variant="light" size="sm" style={{ marginTop: '10px', float: 'right' }}>Create</Button>
    </div>
  )
}

export default AddTask