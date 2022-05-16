import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { AppTodo } from './components/AppTodo/AppTodo';
import { ListTodo } from './components/ListTodo/ListTodo';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'go to the store',
      status: true
    },
    {
      id: 2,
      title: 'do housework',
      status: true
    },
    {
      id: 3,
      title: 'do homework',
      status: false
    },

  ]);

  return (
    <div className="App">
      <Container>
        <Header />
        <AppTodo todo={todo} setTodo={setTodo} />
        <ListTodo todo={todo} setTodo={setTodo} />
      </Container>
    </div>
  );
}

export default App;
