 import { useLocalStorage } from "./localStorage"
 import React from "react"
import { AppUI } from "../App/AppUI"



const Context = React.createContext()

function TodoProvider (props) {


    const { 

        item,
        saveItem,
        loading,
        error,
      
      } = useLocalStorage("ToDos.V1", [])
      
      const [openModal, setOpenModal] = React.useState(false)

      // input State
       const [searchValue, setSearchValue] = React.useState("")
      
       //counter
       const todoCompleted = item.filter(todo => todo.completed).length
       const totalTodos = item.length
      
      console.log("completed", todoCompleted)
       //SearchEngine (for input)
       let searchedValues;
      
       if (searchValue.length >= 1) {
        const search = item.filter(todo => {
          const todoLower = todo.text.toLowerCase()
          const searchLower = searchValue.toLowerCase()
      
          return todoLower.includes(searchLower)})
      
        searchedValues = search;
      
      
       }  else {
        searchedValues = item
        
       }
      
      
      // add ToDos
      const addTodo = (text) => {
      
        const newTodo = [...item];
        newTodo.push({
          text: text,
          completed: false,
        })
        saveItem(newTodo)
      
      }


       // mark ToDos
      
      
      
       const onComplete = (currentText) => {
          const todoIndex = item.findIndex(todo => todo.text === currentText);
      
      
          // they are mutable
          const newTodo = [...item];
          newTodo[todoIndex].completed = true;
          saveItem(newTodo)
        
        }
      
      // delete ToDos
      
      const onDelete = (currentText) => {
        const todoIndex = item.findIndex(todo => todo.text === currentText);
        const newTodo = [...item];
      
        newTodo.splice(todoIndex, 1)
      
        saveItem(newTodo)
      
      }

      return (

        <Context.Provider value={{
          item,
          saveItem,
            totalTodos ,
            todoCompleted ,
            searchValue,
            setSearchValue,
            onComplete,
            onDelete,
            useLocalStorage,
            searchedValues,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}>
          {props.children} 

        </Context.Provider>

      )


 }

export {Context, TodoProvider}