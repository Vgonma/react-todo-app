/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"
import './App.css'
import { BrowserRouter } from "react-router-dom"
//component file
import TodoContainer from "./components/TodoContainer"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
