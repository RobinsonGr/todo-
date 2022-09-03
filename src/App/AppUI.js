import React from "react";
import {TodoList} from "../TodoItem/TodoList"
import {TodoItem} from "../TodoItem/TodoItem"
import {TodoCounter} from "../TodoCounter/TodoCounter.js"
import {TodoSearch} from "../TodoSearch/TodoSearch.js"
import {Context} from "../TodoContext/index"
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton"
import {Modal} from "../modal"
import "../modal"
import { TodoForm } from "../TodoForm";
import "./App.css"




function AppUI( ) {


    const {totalTodos,
        todoCompleted ,
        searchValue,
        setSearchValue,
        onComplete,
        onDelete,
        useLocalStorage,
        searchedValues,
        loading,
        openModal,
        setOpenModal,
        error,
        addTodo
    } = React.useContext(Context)

    return (
<> 
     <TodoCounter 
     totalTodos = {totalTodos}
     todoCompleted = {todoCompleted}
     >
     </TodoCounter>
         
     <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}>

     </TodoSearch> 

        
         <TodoList> 
         {loading && <div className="loading"></div>}
         {error && <p>"error"</p>} 
{/*         {(!loading && !searchedValues.length) && <p>"Completed"</p>} 
 */}
         {searchedValues.map(todo => (
         <TodoItem 
         key={todo.text} 
         text={todo.text} 
         completed={todo.completed}
         onComplete = {() => onComplete(todo.text)}
         onDelete = {() => onDelete(todo.text)}
         />))}
     </TodoList>

     <CreateTodoButton openModal = {openModal} setOpenModal = {setOpenModal}/>

    <Modal>
         {openModal && 
         <TodoForm></TodoForm>
         }    
    </Modal>
     </>  
       

       
        
      )
}

export {AppUI}