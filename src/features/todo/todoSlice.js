import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	todos: [{ id: 1, text: 'hello world!' }],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: nanoid(),
				text: action.payload,
			});
		},
		removeTodo: (state, action) => {
			state.todos.splice(state.todos.indexOf(action.payload), 1);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
