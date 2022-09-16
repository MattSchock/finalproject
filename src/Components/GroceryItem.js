import React from 'react';

class GroceryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GroceryList: this.props.GroceryList,
            GroceryItemName: this.props.GroceryItemName,
            Id: this.props.id,
        };
    }


    render() {
        return(
            <tr>
                <td>
                    {this.state.GroceryItemName}
                </td>
                <td>
                    Placeholder.
                </td>
            </tr>
        )
    }
}

export default GroceryItem