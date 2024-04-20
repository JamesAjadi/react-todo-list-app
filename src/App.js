import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import TodosList from './Components/TodosList';
import BackgroundImage from './Components/Assests/pexels.jpg';
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []; 
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const sectionStyle = {
    width : '100%',
    height : '100%',
    backgroundImage : `url(${BackgroundImage})`,
    backgroundSize : 'cover',
    backgroundPosition : 'center'
  };
  return (
    <div className="container" style={sectionStyle}>
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos} 
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo ={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
