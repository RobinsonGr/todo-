import React from 'react';
import "./TodoCounter.css"
import "../App"
import { Context } from '../TodoContext';



function TodoCounter() {

    const {todoCompleted, totalTodos} = React.useContext(Context)


    return (
        <h1 className="todo-counter">You have completed {todoCompleted} of {totalTodos} TODO's</h1>
    
    )
}


   export {TodoCounter}