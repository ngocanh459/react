import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    /*
    fragment <> div div </>
    JSX luon tra ve mot khoi
    */
    // key:value - object
    state = {
        firstname: '',
        lastname: '',
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '$800' },
            { id: 'Job2', title: 'Tester', salary: '$500' },
            { id: 'Job3', title: 'Project Manager', salary: '$100' },
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // ham nay ngan chan submit - khong load lai website
        alert("Submit!")
    }

    render() {
        console.log(this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        value={this.state.firstname}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />

                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        value={this.state.lastname}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br />

                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstname}
                    age={'23'}
                    address={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent