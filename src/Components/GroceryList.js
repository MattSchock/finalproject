import React from 'react';
import { Grocery } from './Grocery'
import { groceryListApi } from '../Rest/GroceryListApi';

export default class GroceryList extends React.Component {
   state = {
       items: []
   };
// grabs customers from api
   componentDidMount() {
       this.fetchGrocery();
   };
// grabs customers from api part 2
   fetchGrocery = async() => {
       const items = await groceryListApi.get();
       this.setState({ items });
   };
// updates sales if customer object changes
   updateGrocery = async (updatedCustomer) => {
       await groceryListApi.put(updatedCustomer);
       this.fetchGrocery();
   };

   render() {
       return(
           <div className='customer-list'>
               
               {this.state.items.map((grocery) => (
                   <Grocery 
                   grocery={grocery}
                   key={grocery._id}
                   updateGrocery={this.updateGrocery}
                   
                   />
                   
               ))}
               
           </div>
       )
   }


}