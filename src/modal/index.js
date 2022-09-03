import React from "react"
import ReactDOM from "react-dom"
import "./index.css"



function Modal (props) {

    return ReactDOM.createPortal ( 
       props.children,
        document.getElementById("modal")
        )
}

export {Modal}