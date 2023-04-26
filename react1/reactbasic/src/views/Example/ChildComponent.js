import React from "react";

// class ChildComponent extends React.Component {

//     /*
//     fragment <> div div </>
//     JSX luon tra ve mot khoi
//     */
//     // key:value - object
//     state = {
//     }


//     render() {
//         console.log(this.props.arrJobs);
//         // let name = this.props.name;
//         // let age = this.props.age;
//         let { name, age, address, arrJobs } = this.props;
//         let a = '';

//         return (
//             <>
//                 {/* <div>Child Component: {name} - {age} - {address}</div> */}
//                 <div className="job-lists">
//                     {
//                         a = arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                     {console.log('check map array: ', a)}
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    console.log('check props: ', props);
    let { arrJobs } = props;

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


export default ChildComponent