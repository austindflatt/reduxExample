import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreateTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { TextInput, Textarea, NativeSelect, Title, Button } from '@mantine/core';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const newBody = {
      title: title,
      description: description,
      priority: priority
    };
    dispatch(fetchCreateTodo(newBody));
    navigate('/');
  }
  return (
    <div style={{ marginTop: '20px' }}>
    <Title order={3} style={{ marginBottom: '10px' }}>Create New Task</Title>
    <TextInput
    placeholder="Title"
    label="Title of task"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
    />
    <Textarea
    label="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
    />
    <NativeSelect
    data={['Critical', 'High', 'Medium', 'Low']}
    placeholder="Select a priority"
    label="Priority"
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
    required
    />
    <Button type="Submit" color='green' variant="light" size="sm" style={{ marginTop: '10px', float: 'right' }} onClick={handleSubmit}>Create</Button>
    </div>
  )
}

export default AddTask;