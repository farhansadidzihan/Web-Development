import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './my_components/Header';
import {Todos} from './my_components/Todos';
import {About} from './my_components/About';
// import {RegisterForm} from './my_components/hook';
// import {App2} from './my_components/prop';
// import {TodoItem} from './my_components/TodoItem';
import {AddTodo} from './my_components/addTodo';
import {Footer} from './my_components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("I'm on Delete")
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
  } 

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1; 
    }  
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
    // if (localStorage.getItem('todos')) {
    // }
  }
  return (
    <>
    <Router>
      <Header title={"Todo List"} searchBar={false} />
      <Routes>
        <Route exact path='/' element={
          <>
            <AddTodo addTodo= {addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>
        } />
          <Route exact path='/about' element={<About/>} />
          {/* <Route exact path='/form' element={<RegisterForm />} />
          <Route exact path='/app' element={<App2 />} /> */}
      </Routes>
    </Router>
    <Footer />
    </>
  );
}
export default App;