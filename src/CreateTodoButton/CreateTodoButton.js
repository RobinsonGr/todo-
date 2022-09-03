import React from 'react';
import "./CreateTodoButton.css"

function CreateTodoButton(props) {

    const addDo = () => {
     props.setOpenModal(!props.openModal)
    }

    return (
        <button className="addTodo" onClick={addDo}>+</button>

    )
}

   export {CreateTodoButton}