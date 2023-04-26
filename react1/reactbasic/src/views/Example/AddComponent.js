import React from "react";

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            TitleJob: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() // ham nay ngan chan submit - khong load lai website
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">Job title:</label>
                    <input
                        type="text"
                        value={this.state.TitleJob}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    /><br />

                    <label htmlFor="lname">Salary:</label>
                    <input
                        type="text"
                        value={this.state.Salary}
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