import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodosList = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await fetch(
    `/tasks`
  );
  const fetchedTodos = response.json();
  return fetchedTodos;
});

export const fetchCreateTodo = createAsyncThunk(
  "todo/createTodo",
  async (createBody) => {
    console.log(createBody);
    const response = await fetch(`/tasks/create`, {
      method: "POST",
      body: JSON.stringify(createBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postResponse = response.json();
  return postResponse;
	}
);

export const selectTodoList = (state) => state.todo.todosList;
export const selectTodoCreated = (state) => state.todo.todoCreated;
export const selectPriority = (state) => state.todo.priority;

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todosList: [],
    todoCreated: {},
    priority: "all",
  },
  reducers: {
    //functions that are not asynchronous
  },
  extraReducers: (builder) => {
    //functions that are asynchronous
    builder.addCase(fetchTodosList.fulfilled, (state, action) => {
      state.todosList = action.payload;
    });
    builder.addCase(fetchCreateTodo.fulfilled, (state, action) => {
      state.todoCreated = action.payload;
    });
	},
});

export default todoSlice.reducer;