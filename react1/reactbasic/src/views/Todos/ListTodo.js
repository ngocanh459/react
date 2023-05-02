import React from "react";
import "./listTodo.scss"


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Videos' },
            { id: 'todo3', title: 'Fixing bugs' }

        ]
    }

    render() {

        let { listTodos } = this.state

        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input type="text" />
                    <button type="button" className="add">Add</button>
                </div>
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>

                            )
                        })
                    }
                </div>

            </div>

        )
    }

}

export default ListTodo;