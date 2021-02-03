import {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([""]);
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    if(event.target.value === null){

    }
    else{
      setTodos(event.target.value);
    }
  };

const listItems = () => {
    setItems((oldItems) => {
      if(setItems.length === 0){

      }else{
      return [...oldItems, todos];
      }
    });
    setTodos("");
};

  const deleteItem = index =>{
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const deleteAll = () =>{
    const zeroItems = []
    setItems(zeroItems);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div>
         <br/>
          <p>Jordan's ToDo List: </p>
          <input type = "text" value = {todos} placeholder="Add Items" onChange = {itemEvent}/>
          <button onClick={(listItems)}> + </button>
          <ol>
          {items.map((itemval) =>{ 
          return <ul> 
         <input type = "checkbox" defaultChecked={false} ></input> {itemval}  <button onClick={(deleteItem)}> x </button> </ul>;})}
          <button onClick={(deleteAll)}> delete all </button>
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
