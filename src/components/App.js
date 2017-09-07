import React from 'react'
import Footer from './footer'
import AddTodo from './addTodo'
import VisibleTodoList from './visibleTodoList'


const TodoApp = () => (
    <div>
        <h1>TodoApp</h1>
        <AddTodo/>
        <VisibleTodoList />
        <Footer/>
    </div>
);

export default TodoApp