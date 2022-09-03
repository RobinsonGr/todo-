import React from "react";
import {AppUI} from "./AppUI"
import { TodoProvider } from "../TodoContext";


/* function useLocalStorage(itemName, initialValue)  {


  //effect (simulating load time wait)

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false) 
  const [item, setItem] = React.useState(initialValue)


  React.useEffect ( () => {setTimeout( () => {

    try {
    const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
      
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
      
  } else {
      
  parsedItem = JSON.parse(localStorageItem)
  setItem(parsedItem)
  setLoading(false)
} 
    }  catch(err) {
      setError(err)
    }  
  }, 1000)}, [])
  
   
               

  //save updates
  const saveItem = (newItem) => {

    const stringifiedItem = JSON.stringify(newItem)
  
    localStorage.setItem (itemName, stringifiedItem)
    
    setItem(newItem)
  
   }

   return {
    item,
    saveItem,
    loading,
    error,
  }
} */

const todos = JSON.stringify([ {
  text: "make the coffe",
  completed: false
},
{
  text: "sleep",
  completed: false
},
{
  text: "running",
  completed: false
}])


function App() { 

  

return(
<>
<TodoProvider> 
  <AppUI/> 
</TodoProvider>


</>
)


}

export default App;
