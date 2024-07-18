import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoId is use to generate unique id

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo', 
    initialState,
    reducers:{
        addTodo: (state, action) => {                       // state will take value from initialState. state is current state
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }
    }
})
//reducers will contain properties or function.

export const {addTodo, removeTodo} = todoSlice.actions;    //export the functions make in todoSlice

// store will update the value only if reducer is register 👇. so we will return the list of all reducer
export default todoSlice.reducer;

