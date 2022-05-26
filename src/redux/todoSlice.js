import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.push(action.payload)
        },
        todoDelete(state, action) {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        editTodo(state, action) {
            const { id, title, content } = action.payload;
            state.map((todo) => {
                if (id === todo.id) {
                    todo.title = title;
                    todo.content = content;
                }
                else return todo;
            })

        },
        clearall(state){
            state.splice(0,state.length)
        }
    }
})
export const { todoAdded, todoDelete, editTodo,clearall } = todoSlice.actions
export default todoSlice.reducer