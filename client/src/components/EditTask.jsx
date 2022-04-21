import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreateTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { TextInput, Textarea, NativeSelect, Title, Button } from '@mantine/core';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState('');
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const newBody = {
      title: title,
      description: description,
      priority: priority,
      completed: completed
    };
    dispatch(fetchCreateTodo(newBody));
    navigate('/');
  }

  return (
    <div style={{ marginTop: '20px', marginBottom: '10px' }}>
    <Title order={3} style={{ marginBottom: '10px' }}>Edit</Title>
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
    <NativeSelect
    data={['Incomplete', 'Complete']}
    placeholder="Update Status"
    label="Status"
    value={completed}
    onChange={(e) => setCompleted(e.target.value)}
    required
    />
    </div>
  )
}

export default EditTask;