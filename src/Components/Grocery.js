import React from 'react';
import { groceryListApi } from '../Rest/GroceryListApi';
import { NewItemForm } from './NewItemForm';



export const Grocery = (props) => {
    console.log(props);
    const { grocery, updateGrocery } = props;


    // delete sale points to the api delete function
    const deleteItem = (grocery, saleId) => {
        console.log('customerid:', grocery)
        groceryListApi.delete(grocery, saleId)
        const updatedGrocery = {
            ...grocery,
            sales: grocery.items.filter((x) => x._id !== grocery)
            
        };
        console.log(updatedGrocery, 'updatedcustomer');
        updateGrocery(updatedGrocery);
        
    }
// adds new sales to each customer object
    const addNewItem = (item) => updateGrocery({...grocery, items: [...grocery.items, item]});
// iterates over sales array
    const items = () => (
        <ul>
          {grocery.items.map((item, index) => (
            <li key={index}>
                <label>{`${item.name} Amount needed: ${item.amount}`}</label>
                <button onClick={(e) => deleteItem(grocery, item.itemId)}>Delete Item</button>
            </li>
          ))}  
        </ul>
    );


    // creates divs to hold customer objects including newsaleforms
    return(
        <div>
            
            <h1>{grocery.store}</h1>
            {
                items({ items, groceryId: grocery._id, deleteItem})
            }
            <NewItemForm addNewItem= {addNewItem} />
        </div>
    )

}