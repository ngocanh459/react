import React from "react";
import "./Demo.scss"

class ChildComponent extends React.Component {

    /*
    fragment <> div div </>
    JSX luon tra ve mot khoi
    */
    // key:value - object
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        // console.log('delete: ', job);
        this.props.deleteJob(job)
    }

    handleOnClickUpdate = (job) => {
        console.log('update', job);
    }


    render() {
        console.log(this.props.arrJobs);
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('check: ', check);

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button style={{ color: 'red' }} onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                            <></> <span onClick={() => this.handleOnClickUpdate(item)}>update</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }

            </>
        )
    }
}

export default ChildComponent