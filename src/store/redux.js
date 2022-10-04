import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ];

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: Math.random() * 100,
                text: action.payload,
                done: false
            };
            state.push(task);
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            state = state.filter((t) => t.id !== action.payload);
            return state;
        },
    },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
});

export default store;