import React, { useEffect } from "react";
import GroceryListApi  from "../Rest/GeneralApi";
import GroceryItem from "./GroceryItem";
import GroceryForm from "./GroceryForm";


export default class GroceryList extends React.Component {
    state = {
        id: 0,
        groceryItems: []
    };


    fetchGrocery = async() => {
        const groceryItems = await GroceryListApi.get();
        this.setState(groceryItems)
    }

    componentDidMount() {
        this.fetchGrocery();
    }

    


    render() {
        return (
            <div>
                {/* Grocery items needed.
                <br></br>
                <form onSubmit={placeholderonsubmit}>
                    <input
                        type="text"
                        placeholder="grocery item goes here"
                        value={groceryName}
                        />
                    <button type="submit">Add grocery item.</button>
                </form> */}



                {this.state.groceryItems.map((groceryItem, index) => {
                    return (
                        <GroceryItem
                            groceryItem={groceryItem}
                            key={index}
                        />
                    )
                })}

            </div>
        )
    }

}




























// import React, { useEffect } from "react";
// import GroceryListApi  from "../Rest/GroceryListApi";
// import GroceryItem from "./GroceryItem";


// export default class GroceryList extends React.Component {
//     state = {
//         id: 0,
//         groceryItems: []
//     };


//     fetchGrocery = async() => {
//         const groceryItems = await GroceryListApi.get();
//         this.setState(groceryItems)
//     }

//     componentDidMount() {
//         this.fetchGrocery();
//     }


//     render() {
//         return (
//             <div>

//                 {this.state.groceryItems.map((groceryItem, index) => {
//                     return (
//                         <GroceryItem
//                             groceryItem={groceryItem}
//                             key={index}
//                         />
//                     )
//                 })}

//             </div>
//         )
//     }

// }









// function GroceryList() {
//     const groceryItems = async() => {
//         try {
//             const resp = await fetch(${GroceryListApi}), 
//             const data = await resp.json();
//             return data;
//             } catch (e) {
//                 console.log('not able to fetch data from api', e);
//             }
//         }
//     }


//     const tableRows = () => (

//     )
// }