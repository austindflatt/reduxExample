import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
	selectTodoList,
	fetchTodosList,
} from "../../redux/todoSlice";
import TotalTasks from './TotalTasks';
import TasksComplete from './TasksCompleted';
import TasksIncomplete from './TasksIncomplete'
import TasksPercentage from './TasksPercentage';
import StatsPriority from './StatsPriority';
import { SimpleGrid } from '@mantine/core';

const Stats = () => {
  const dispatch = useDispatch();
  //dispatch calls for the reducer functions
  const todosList = useSelector(selectTodoList);

  const todosTotal = todosList.length;
  const todosCompleted = todosList.filter((todo) => { return todo.completed }).length;
  const completionPercentage = todosCompleted / todosTotal * 100;
  
  useEffect(() => {
    dispatch(fetchTodosList());
  }, [dispatch]);

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
      <TotalTasks 
      totalTasks={todosList.length}
      />
      <TasksComplete 
      tasksComplete={todosList.filter((todo) => { return todo.completed; }).length}
      />
      <TasksIncomplete 
      tasksIncomplete={todosList.filter((todo) => { return todo.completed === false; }).length}
      />
      <TasksPercentage 
      tasksPercentage={Math.round(completionPercentage)}
      />
      {/* Tasks completed divided total * 100 */}
	  </SimpleGrid>
    <StatsPriority
    criticalTasks={todosList.filter((todo) => { return todo.priority === 'Critical'; }).length}
    highTasks={todosList.filter((todo) => { return todo.priority === 'High'; }).length}
    mediumTasks={todosList.filter((todo) => { return todo.priority === 'Medium'; }).length}
    lowTasks={todosList.filter((todo) => { return todo.priority === 'Low'; }).length}
    />
	  </>
  )
}

export default Stats;