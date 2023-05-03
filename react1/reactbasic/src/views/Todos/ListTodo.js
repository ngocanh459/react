import React from "react";
import "./listTodo.scss"
import AddTodo from "./AddTodo";
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';



class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Videos' },
            { id: 'todo3', title: 'Fixing bugs' }

        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Them moi thanh cong!")
    }

    handleDeleteTodo = (todo) => {
        // console.log("check: ", todo);
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
    }

    render() {

        let { listTodos } = this.state

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
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