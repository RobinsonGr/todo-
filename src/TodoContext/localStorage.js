import React from "react";

function useLocalStorage(itemName, initialValue)  {

  const test = "works"

    //effect (simulating load time wait)
    const [item, setItem] = React.useState(initialValue);  
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
  
    React.useEffect(
    () => {
      setTimeout (() => {
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
        
          } catch (err) {
            setError(err)
        
          }
        
          }, 1000)
    }
  , []) 
  
    
  
     
    //save updates
    const saveItem = (newItem) => {
  
      const stringifiedItem = JSON.stringify(newItem)
    
      localStorage.setItem ("ToDos.V1", stringifiedItem)
      
      setItem(newItem)
    
     }
  
     return {
      item,
      saveItem,
      loading,
      error,
      test,
       }
     
  
  }

  export {useLocalStorage} 

 