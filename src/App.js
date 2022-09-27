import React from 'react';
import './App.css';
import CustomerList from './Components/ToDoList';
import GroceryList from './Components/GroceryList';
import NavBar from './Components/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="todolistpath" element={<CustomerList/>}></Route>
        <Route path="grocerylistpath" element={<GroceryList/>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
