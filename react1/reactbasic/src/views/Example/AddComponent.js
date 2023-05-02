import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // ham nay ngan chan submit - khong load lai website
        console.log(this.state);
        if (!this.state.title || !this.state.salary) {
            alert("Nhap todo")
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        // this.props.update({
        //     title: this.state.title,
        //     salary: this.state.salary
        // })
        // this.setState({
        //     title: '',
        //     salary: ''
        // })
    }


    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">Job title:</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    /><br />

                    <label htmlFor="lname">Salary:</label>
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    /><br />

                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

            </div>
        )
    }

}

export default AddComponent;