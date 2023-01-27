/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import NotMatch from './components/pages/NotMatch';
import Navbar from './components/Navbar';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TodoContainer />}/>
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotMatch />} />
      </Routes>
      </>
  );
}

export default App;
