import React from 'react'
import { Link } from 'react-router-dom';

export default function Formstatus({ statusActive, loginScreen, verifyemailMsg,register,review }) {
    console.log(verifyemailMsg,"verifyemailMsg")
    let status = ["Apply for online registration", "Fill online application form", "Pay Examination fee"];
    // statusActive = statusActive ? statusActive : "";
    return (
        <div className='form-status'>
            <div className='form-card'>
                <div className='form-header'>
                    <h5>Form Status</h5>
                </div>
                <div className={'form-body postRegister'}>
                    <ul>
                        {
                            status.map((list, index) => (
                                <li className={parseFloat(statusActive) > index ? "active" : ""} key={index}>
                                    {list}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {loginScreen &&
                <div className='form-card mt-4'>
                    <div className='form-header'>
                        <h5>Not Registered?</h5>
                    </div>
                    <div className='form-body'>
                        <button type='submit' className='green_btn'>
                            <Link to="/cuet_nta_mock_registration">Click here to Register</Link>
                        </button>
                    </div>
                </div>
            }
            {!register&& !review&&<div className='form-card mt-4'>
                <div className='form-header'>
                    <h5>Quick Links</h5>
                </div>
                <div className='form-body'>
                    <ul className='verifyUsers'>
                        <li className='active'>Mobile number (Verified)</li>
                        <li className={verifyemailMsg ? "active" : ""}>{verifyemailMsg?"Email Id (Verified)":"Verify Email ID"}</li>
                    </ul>
                    <ul className="quickLinks">
                        <li>My Payments</li>
                        <li>Add University / Programme</li>
                        <li>Need Help?</li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}
