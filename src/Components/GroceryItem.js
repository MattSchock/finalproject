import React from 'react';

class GroceryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            GroceryItemName: this.props.GroceryItemName,
            id: this.props.id,
        };
    }


    render() {
        return(
            <tr>
                <td>
                    {this.state.GroceryItemName}
                </td>
                <td>
                    Testing placeholder
                </td>
            </tr>
        )
    }
}

export default GroceryItem