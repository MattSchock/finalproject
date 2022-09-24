import React from 'react';
import { useEffect, useState } from 'react';
import Todoitem from './Todoitem';

import EditForm from './EditForm';
import TodoItem from './Todoitem';
import ToDoApi from '../Rest/GeneralApi';

export default class ToDoList extends React.Component {
    state = {
        todoitems: []
    };

    componentDidMount() {
        this.fetchToDoItems();
    };

    fetchToDoItems = async() => {
        const todoitems = await ToDoApi.get();
        this.setState({ todoitems });
    };

    updateToDoItem = async (updatedToDoItem) => {
        await ToDoApi.put(updatedToDoItem);
        this.fetchToDoItems();
    };

    render() {
        return (
            <div>
                <form>
                    <input placeholder="enter task">
                    </input>
                    <button type='submit'>Add</button>
                </form>
                <div>
                    
                    {this.state.todoitems.map((todoitem) => (
                        <TodoItem
                            todoitem={todoitem}
                            key={todoitem._id}
                            updateToDoItem={this.updateToDoItem}
                        />
                    ))}
                </div>
            </div>
        )
    }


}