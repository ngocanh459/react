import React from "react";

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
        event.preventDefault()
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
            </>
        )
    }
}

export default MyComponent