import React from 'react';
import "./TodoList.css"
import {BsCheckLg} from "react-icons/bs"


function TodoItem(props) {



    return (
        <li className='todo-item'>
            <span onClick = {props.onComplete} className={`item-check ${props.completed && "item-check--active"}`}><BsCheckLg/></span>
            
            <p className={`item-text ${props.completed && "item-text--active"}`}>{props.text}</p>
            <span onClick = {props.onDelete} className='todo-item-close'>X</span>
        </li>
    )
}
   

   export {TodoItem}

