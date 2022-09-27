import React, { useState } from 'react';
import { Grocery } from './Grocery';

export const NewItemForm = (props) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(undefined);
    let [itemId, setItemId] = useState(0)

    const handleAmountInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setAmount(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        console.log('Event:', e);
        console.log(name, amount, 'nameandprice')
        
        e.preventDefault();
        if (name && amount) {
            itemId = Math.floor(Math.random() * 100000);
            props.addNewSale({name, amount, itemId});
            setName('');
            setAmount('');
        } else {
            console.log('invalid');
        }
    };

    return(
        <div>
            <h4>{Grocery.name}</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Grocery item needed."
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
            
            <input
                type='text'
                placeholder='amount needed'
                onChange={handleAmountInput}
                value={amount}
                />
                <button type='submit'>Add item</button>
            </form>
        </div>
    )

}