import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
	selectTodoList,
	fetchTodosList,
  deleteTodo,
} from "../redux/todoSlice";
import { TextInput, Table, ScrollArea, Title, Badge, NativeSelect, Button, SimpleGrid } from '@mantine/core';
import Stats from './Stats/Stats';
import EditTask from './EditTask';
import formatDistance from 'date-fns/formatDistance';

const TaskList = () => {
  const [editable, setEditable] = useState(false);
  const [search, setSearch] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState('');

  const dispatch = useDispatch();
  //dispatch calls for the reducer functions
  const todosList = useSelector(selectTodoList);
  //useSelector takes in the state
  // const priority = useSelector(selectPriority);
  
  useEffect(() => {
    dispatch(fetchTodosList());
  }, [dispatch]);
  
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleEdit = (id) => {
    setEditable(!editable)
  }
  
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
  
  <Title order={3} style={{ marginBottom: '10px' }}>Filter Tasks</Title>

  <SimpleGrid
  cols={2}
  breakpoints={[
    { maxWidth: 'md', cols: 2 },
    { maxWidth: 'xs', cols: 1 },
  ]}
  >

  <NativeSelect
  data={['Critical', 'High', 'Medium', 'Low']}
  onChange={(e) => setPriority(e.target.value)}
  value={priority}
  placeholder="Select Priority"
  label="Select a priority level"
  description="Filter tasks by priority"
  variant="filled"
  style={{ marginBottom: '10px' }}
  />

  <NativeSelect
  data={['true', 'false']}
  onChange={(e) => setCompleted(e.target.value)}
  value={completed}
  placeholder="Select Status"
  label="Select status of task"
  description="Filter tasks by complete(true) or incomplete(false)"
  variant="filled"
  style={{ marginBottom: '10px' }}
  />

  </SimpleGrid>
  
  {/* <Title order={3} style={{ marginBottom: '10px' }}>Sort Tasks</Title> */}
  
  {
    editable ?
    <EditTask />
    : null
  }

  <ScrollArea>
    <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Added</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Task Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          todosList
          .filter((todo) => {
            if(priority === '' && completed === '' && search === ''){
              return true
            }
            if(priority !== '' && completed !== '' && search !== '' && todo.priority.includes(priority) && todo.completed.includes(completed) && todo.title.toLowerCase().includes(search.toLowerCase())){
              return true
            }
            if(priority !== '' && todo.priority.includes(priority)){
              return true
            }
            if(completed !== '' && todo.completed.toString() === completed){
              return true
            }
            if(search !== '' && todo.title.toLowerCase().includes(search.toLowerCase())){
              return true
            }
          })
          // .sort((todo) => {
          // })
          .map((todo) => {
            const dateStr = todo.createdAt;
            const str = formatDistance(
              new Date(dateStr),
              new Date()
            );
            return (
            <tr key={todo._id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{str} ago</td>
              <td>
                <Badge 
                color={
                  todo.priority === 'Critical' ? 'red' :
                  todo.priority === 'High' ? 'orange' :
                  todo.priority === 'Medium' ? 'yellow' :
                  'green'
                }
                size="lg" 
                radius="sm"
                >
                  {todo.priority}
                </Badge>
              </td>
              <td>{todo.completed ? <>Complete</> : <>Incomplete</>}</td>
              <td>
                <Button type="Submit" variant="light" size="sm" style={{ marginRight: '10px' }} onClick={() => handleEdit(todo._id)}>{editable ? <>Save</> : <>Update</>}</Button>
                <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(todo._id)}>Delete</Button>
              </td>
            </tr>
            )
          })
        }
      </tbody>
    </Table>
  </ScrollArea>
  </>
  )
}

export default TaskList