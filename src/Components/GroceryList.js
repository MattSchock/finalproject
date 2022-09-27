import React, { useEffect } from "react";
import GroceryItem from "./GroceryItem";
import GroceryForm from "./GroceryForm";
import GroceryListApi from "../Rest/GroceryListApi";


class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            groceryItems: [],
        };
    }

    grabGroceries() {
        this.setState({
            groceryItems: GroceryListApi.get()
        })
    }

    submitFormClickhandler(input) {

    }


    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Enter Grocery Item"
                    ></input>
                    <button
                        onClick={() =>
                            this.setState({
                                groceryItems: [
                                    ...this.state.groceryItems,
                                ],
                            })
                        }
                    >
                        Enter
                    </button>
                </form>
                <div>
                    {this.state.groceryItems.map((GroceryItemName, index) => {
                        return (
                            <GroceryItem
                                GroceryItemName={GroceryItemName}
                                id={index}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default GroceryList;











// export default class GroceryList extends React.Component {
//     state = {
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
//                 <form onSubmit={}>
//                     <input 
//                         type="text"
//                         placeholder='grocerys needed'>

//                     </input>
//                 </form>
//                 {/* Grocery items needed.
//                 <br></br>
//                 <form onSubmit={placeholderonsubmit}>
//                     <input
//                         type="text"
//                         placeholder="grocery item goes here"
//                         value={groceryName}
//                         />
//                     <button type="submit">Add grocery item.</button>
//                 </form> */}



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