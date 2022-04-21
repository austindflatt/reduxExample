import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
	selectTodoList,
	fetchTodosList,
  deleteTodo,
} from "../redux/todoSlice";
import { TextInput, Table, ScrollArea, Badge, Button } from '@mantine/core';
import Stats from './Stats/Stats';

const TaskList = () => {
  const [search, setSearch] = useState('');

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
        {
          todosList.map((todo) => {
            return (
            <tr key={todo._id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
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
                <Button type="Submit" variant="light" size="sm" style={{ marginRight: '10px' }}>Update</Button>
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