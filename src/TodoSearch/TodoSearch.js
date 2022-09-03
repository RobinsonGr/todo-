import React from 'react';
import "./TodoSearch.css"
import "../App"
import { Context } from '../TodoContext';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(Context)
    
    const onSearchChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }


    return (
        <input 
        value={searchValue}
        onChange={onSearchChange} 
        className="todo-input" 
        placeholder = {"What' are you looking for?"}/> 
    
    )
}

   export {TodoSearch}