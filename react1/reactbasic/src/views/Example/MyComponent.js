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
        lastname: ''
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
                    name={'Ngoc Anh'}
                    age={'23'}
                />
            </>
        )
    }
}

export default MyComponent