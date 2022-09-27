// import React, { Component } from 'react';
// import ToDoApi from '../Rest/GeneralApi';
// import TodoItems2 from './ToDoItems2';

// export default class ToDoList2 extends Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             items: []
//         };
//         this.addItem = this.addItem.bind(this);
//         this.deleteItem = this.deleteItem.bind(this);
//     }

//     addItem(e) {
//         if (this._inputElement.value !== '') {
           
//             let newItem = {
//                 text: this._inputElement.value,
//                 id: Date.now()
                
//             };
//             console.log(newItem)
            
//             this.setState((prevState) => {
//                 return {
//                     items: prevState.items.concat(newItem)
                    
//                 };
//             });
            
//             this._inputElement.value = '';
//         }
//         console.log(this.state.items);
//         e.preventDefault();

//     }

//     deleteItem(key) {
//         let filteredItems = this.state.items.filter(function (item) {
//           return (item.key !== key);
//         });
       
//         this.setState({
//           items: filteredItems
//         });
//       }


//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.addItem}>
//                     <input ref={(a) => this._inputElement = a}
//                         placeholder='enter something you need to do'>
//                     </input>
//                     <button type='submit'>Submit</button>
//                 </form>
//                 <TodoItems2 entries={this.state.items}
//                     delete={this.deleteItem}/>
//             </div>
//         );
//     }
// }