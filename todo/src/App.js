// import logo from './logo.svg';
import {useState} from 'react';

//import logo from './tek_logo.png';
import './App.css';
import Todo from './Components/Todo';

function App() {

  const [todos, setTodos] = useState(["eat","sleep","code","pray","repeat"]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
      setTodos(even.target.value);
  };

const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, todos];
    });
    setTodos("");
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          <p>Create a Todo List App</p>
          <input type = "text" value = {todo } placeholder="Add Items" onChange = {itemEvent}/>;
          <button onClick={(listItems)}> + </button>
        <Todo item="1"/>
          <Todo item="2"/>
          <Todo item="3"/>
          <ol>
          {items.map((itemval) =>{ 
          return <li>{itemval} </li>;})}
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
