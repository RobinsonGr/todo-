import React from "react"
import { Context } from "../TodoContext"
import "./TodoForm.css"



function TodoForm() {
    const [todoText, setTodoText] = React.useState("")

    const {
        addTodo,
        setOpenModal,

    } = React.useContext(Context)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
    setTodoText(event.target.value)
    }

    const onAdd = (event) => {
        event.preventDefault();

        (!todoText) ?
            alert("You must provide a ToDo")
       :
            addTodo(todoText)
        
        
        setOpenModal(false)
        setTodoText("")


    }

    return(
        <div className="background-modal">    
        <form onSubmit={onAdd}>
          <textarea onChange = {onChange}  id = "text" placeholder = "Make the homework"></textarea>
          <div className="buttons">
              <button className ="addBtn" type="submit" >Add Todo</button>
              <button className = "cancelBtn" onClick={onCancel}>Cancel</button>
          </div>
        </form>
        </div> 
    )
}

export {TodoForm}