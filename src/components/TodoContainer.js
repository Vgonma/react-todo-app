/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes, Link } from 'react-router-dom';
// component imports
import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import Navbar from './Navbar';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotMatch />} />
        </Routes>
        <div className='container'>
          <div className='inner'>
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      </>
    );
  }
}
export default TodoContainer;
