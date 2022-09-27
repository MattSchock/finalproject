import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ToDoList from './Components/ToDoList';
import GroceryList from './Components/GroceryList';
import GroceryForm from './Components/GroceryForm';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom';
import ToDoList2 from './Components/ToDoList2';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="todolistpath" element={<ToDoList2/>}></Route>
        <Route path="grocerylistpath" ></Route>
        <Route path="chorespath"></Route>
        <Route path="schedulepath"></Route>
        <Route path="generalshoppingpath"></Route>
        <Route path="deepcleaningpath"></Route>

      </Routes>
    </div>
  );
}

export default App;
