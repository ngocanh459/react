import React from "react";

class ChildComponent extends React.Component {

    /*
    fragment <> div div </>
    JSX luon tra ve mot khoi
    */
    // key:value - object
    state = {
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
        console.log(this.props.arrJobs);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address, arrJobs } = this.props;

        return (
            <>
                {/* <div>Child Component: {name} - {age} - {address}</div> */}
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent