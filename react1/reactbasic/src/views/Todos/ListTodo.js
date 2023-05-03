import React from "react";
import "./listTodo.scss"
import AddTodo from "./AddTodo";
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";



class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Videos' },
            { id: 'todo3', title: 'Fixing bugs' }

        ],
        editTodo: {}
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
        toast.info("Xoa thanh cong!")
    }

    handleUpdateTodo = (todo) => {
        // save
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        if (isEmptyObj == false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            return
        }
        // update
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeUpdateTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {

        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log("check empty obj: ", Object.keys(editTodo));

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
                                    {isEmptyObj == true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>{index + 1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeUpdateTodo(event)}
                                                /></span>
                                                :
                                                <span> {index + 1} - {item.title} </span>
                                            }
                                        </>
                                    }
                                    <button className="update"
                                        onClick={() => this.handleUpdateTodo(item)}
                                    >
                                        {isEmptyObj == false && editTodo.id == item.id ? 'Save' : 'Udate'}
                                    </button>
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