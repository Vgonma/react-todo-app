/* eslint-disable */
import React from "react"
import { createRoot } from "react-dom/client"
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"

//component file
import TodoContainer from "./components/TodoContainer"
import App from "./App"

const rootDom = document.getElementById('root');
const root = createRoot(rootDom);

root.render (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
