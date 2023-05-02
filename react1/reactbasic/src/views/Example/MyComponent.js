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
    addNewJob = (job) => {
        // let curentJob = this.state.arrJobs
        // curentJob.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: curentJob
        })
        console.log('check job: ', this.state.arrJobs);
    }

    deleteJob = (job) => {
        let curentJob = this.state.arrJobs
        curentJob = curentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: curentJob
        })
    }

    updateJob = (job) => {
        let newJob = this.update(job)
        this.setState({
            arrJobs: [this.state.arrJobs, newJob]
        })

    }

    update = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    componentDidMount() {
        console.log("run componentdistmount");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("run componentdicupdate: ", prevState, "abc: ", this.state);
    }

    render() {
        console.log(this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent