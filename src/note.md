//For start redux
npm install @reduxjs/toolkit
npm install react-redux

=> store and reducers belong to redux completely
=> useSelector and useDispatch are for react -> They are react wireup.

=>dispatch change the value in store by using reducer

- React and Redux-react are different. 
- - React is library while react-redux is implementation for wiring between react and redux

- Start with store. We will save data in store.
- - Every application has single store.
- We have tell store where are my reducer
- Reducer location - 'src/features/todo/todoSlice.js'
- For slice (todoSlice in todoSlice.js) we requrired three things
- - name
- - initialState
- - reducers => it is the object where we have key-functions pair
- dispatch is use to send value and selector is use to get value
- - For dispatch => See AddTodo.jsx, Todo.jsx
- - For selector => See Todos.jsx
