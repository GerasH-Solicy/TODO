import { createContext, useReducer, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import TodoReducer from "./reducers/TodoReducer";
import Navigation from "./components/Navigation";
import './App.css'



export default function App() {
  const initialTodos = [
    {
      id: 1,
      text: 'Feed cat.',
      status: true
    },
    {
      id: 2,
      text: 'Go for a walk.',
      status: false
    },
    {
      id: 3,
      text: 'Learn React.',
      status: true
    },
  ]

  const [filter, setFilter] = useState(null)
  const [todos, dispatch] = useReducer(TodoReducer, initialTodos)

  return (
    <div className="App">
      <Header />
      <Navigation dispatch={dispatch} setFilter={setFilter}/>
      <TodoList todos={todos} dispatch={dispatch} filter={filter}/>
      <Footer todoDispatch={dispatch} />
    </div>
  );
}


