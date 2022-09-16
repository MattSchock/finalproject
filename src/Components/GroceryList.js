import React, { useEffect } from "react";
import GroceryListApi  from "../Rest/GroceryListApi";
import GroceryItem from "./GroceryItem";


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