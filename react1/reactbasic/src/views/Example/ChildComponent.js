import React from "react";

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
                        <button onClick={() => this.handleShowHide()}>
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