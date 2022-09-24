// import React, { useState } from 'react';

// export const GroceryForm = (props) => {
//     const [name, setName] = useState('');
//     let [saleId, setSaleId] = useState(0)


//     const onSubmit = (e) => {
//         console.log('Event:', e);
//         console.log(name, 'nameandprice')
        
//         e.preventDefault();
//         if (name) {
//             saleId = Math.floor(Math.random() * 100000);
//             props.addNewSale({name, saleId});
//             setName('');
//         } else {
//             console.log('invalid');
//         }
//     };

//     return(
//         <div>
//             <h4>Add a sale</h4>
//             <form onSubmit={onSubmit}>
//                 <input
//                     type="text"
//                     placeholder="name"
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                     />
//                 <button type='submit'>Add Sale</button>
//             </form>
//         </div>
//     )

// }

