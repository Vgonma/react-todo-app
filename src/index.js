/* eslint-disable */
import React from "react"
import { createRoot } from "react-dom/client"
import './App.css'
import { BrowserRouter } from "react-router-dom"

//component file
import TodoContainer from "./components/TodoContainer"
const rootDom = document.getElementById('root');
const root = createRoot(rootDom);

root.render (
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
)
