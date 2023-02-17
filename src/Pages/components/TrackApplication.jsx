import React from 'react';
import RegisterSteps from "./RegisterSteps";
import Formstatus from "./Formstatus";
import { useContext } from "react";
import { UserContext } from "../ContextApi/UserContext";

export default function TrackApplication() {
    const { userInfo, setStep } = useContext(UserContext);

    const handleSteps = () => {
        if (userInfo.isEmailIdVerified) {
            setStep((prev) => ({
                ...prev,
                verifyEmail: false,
                currentStep: 1,
                trackAppl: false
            }))
        } else {
            setStep((prev) => ({
                ...prev,
                verifyEmail: true,
                trackAppl: false,
            }))
        }
    }
console.log(userInfo,"userinfo")
    return (
        <>
            {!userInfo?.orderId && <RegisterSteps verifyemailMsg={userInfo.isEmailIdVerified} />}
            <div className='d-flex col-gap-20'>
                <Formstatus statusActive={userInfo?.orderId ? "3" : "1"} verifyemailMsg={userInfo.isEmailIdVerified} />
                <div className='register-form'>
                    <div className='form-card mb-4'>
                        <div className='form-header'>
                            <h5 className='text-center'>Common University Entrance Test CUET (UG) - 2023</h5>
                        </div>
                        <div className='form-body bb-grey'>
                            <div className='application'>
                                <h5>Welcome, CUET (UG) - 2023 Applicant!</h5>
                                <p>You can apply and track your CUET (UG) - 2023 application here.<br />
                                    Your application number <strong>{userInfo.appNo}</strong> and your application status is
                                    <span className={userInfo?.orderId ? "active" : ""}>
                                        {userInfo?.orderId ? "SUBMITTED" : "NOT SUBMITTED"}
                                    </span>
                                </p>
                            </div>
                            <div className="text-center py-4">
                                {userInfo?.orderId
                                    ? <button className='green_btn'>Download / Print : Confirmation Page </button>
                                    : <button onClick={handleSteps} className='brown_btn'>Continue Application Form</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
