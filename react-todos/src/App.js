import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  //todos will be inside the useState & setTodos used to update the variable
  const[todos, setTodos] = useState([
    {rowNumber: 1,rowDescription: 'Feed cat',rowAssigned:'User one'},
    {rowNumber: 2,rowDescription: 'Get haircut',rowAssigned:'User two'},
    {rowNumber: 3,rowDescription: 'Study',rowAssigned:'User one'},
    {rowNumber: 4,rowDescription: 'Make dinner',rowAssigned:'User two'}
  
  ]);

//Dynamic onclick listener to btn 'Add new todo'
//rerender applications 
const addTodo = (description, assigned) => {
  let rowNumber = 0; 
  if (todos.length > 0){
    rowNumber = todos[todos.length -1].rowNumber + 1;
  }else{
    rowNumber = 1;
  }
    const newTodo = {
    rowNumber: rowNumber, 
    rowDescription: description,
    rowAssigned: assigned
    };
  
    setTodos(todos => [...todos, newTodo]) //setting todos by first construct todos that already in exists + add new todos 
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's List!
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}> {/* {addTodo} is a pointer for our onclick, pointing to addTodo fxn */}
            Add new todo
            </button>
            <NewTodoForm
            addTodo={addTodo}
            />
        </div>
      </div>
    </div>
  );
}


export default App;
