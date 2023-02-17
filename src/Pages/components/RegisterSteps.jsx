import React from 'react';
// import closeIcon from "../../Assets/close.svg"

export default function RegisterSteps({ verifyemailMsg }) {
    return (
        <>
            {verifyemailMsg &&
                <div className="alert alert-custom success alert-dismissible fade show mb-5" role="alert">
                    Email ID verified successfully
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            <div className="alert alert-custom alert-dismissible fade show mb-5" role="alert">
                Announcement: Welcome to CUET (UG) - 2023 Portal!
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div className="navigation_part" role="group" aria-label="Steps">
                <ol>
                    <li className="active">
                        <span>01</span>
                        <p>Registration</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>Application Form</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>Pay Examination Fee</p>
                    </li>
                </ol>
            </div>
        </>
    )
}
