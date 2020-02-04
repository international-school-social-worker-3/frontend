import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Onboarding = props => {

    const options = [
        {
            text: "I'm a school admin",
            accType: `admin`
        },
        {
            text: "I'm a social worker",
            accType: `socialWorker`
        },
        {
            text: "I'm a board member",
            accType: `boardMember`
        },
        {
            text: "I'm a teacher",
            accType: `teacher`
        }
    ]

//     const handleAccType = e => {
//         axiosWithAuth
//         .post("/api/register", e.accType)
//         .then(res => {
//             console.log(res);
//             props.history.push("/protected/org");
//         })
//         .catch(err => console.log(err));
//   };

    return (
        <div>
            <h2>Tell us who you are!</h2>
            <div className="ob-frame">
                {
                    options.map(item =>
                        <div className="ob" >
                            <h2>{item.text}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Onboarding;