import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ToDoList from './Components/ToDoList';
import GroceryList from './Components/GroceryList';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="todolistpath" element={<ToDoList/>}></Route>
        <Route path="grocerylistpath" element={<GroceryList/>}></Route>
        <Route path="chorespath"></Route>
        <Route path="schedulepath"></Route>
        <Route path="generalshoppingpath"></Route>
        <Route path="deepcleaningpath"></Route>

      </Routes>
    </div>
  );
}

export default App;
