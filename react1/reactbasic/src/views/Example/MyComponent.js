import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {


    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '800' },
            { id: 'Job2', title: 'Tester', salary: '500' },
            { id: 'Job3', title: 'Project Manager', salary: '1000' },
        ]

    }

    render() {
        console.log(this.state);
        return (
            <>
                <AddComponent />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent