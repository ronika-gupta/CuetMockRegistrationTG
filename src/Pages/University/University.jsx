import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "../ContextApi/UserContext";

export default function University({ showUni, setShowUni }) {
    const { userInfo, step } = useContext(UserContext);

    let dropdown = {
        university: ["Aligarh Muslim University", "Assam University", "Babasaheb Bhimrao Ambedkar University"],
        progamme: ["Bsc", "Bcom", "BE"]
    }

    const [university, setUniversity] = useState({
        universityName: "",
        programmeName: ""
    })

    const addUniversity = () => {
        if (university.universityName && university.programmeName) {
            setShowUni((prev) => ([
                ...prev,
                university
            ]));

            setUniversity({
                universityName: "",
                programmeName: ""
            })
        }
    }

    const removeUniversity = (key) => {
        let filteredArr = showUni.filter((x, index) => index !== key ? x : "");
        setShowUni(filteredArr);
    }

    useEffect(() => {
        if (userInfo.univrstyAndProgDtls) {
            setShowUni(userInfo.univrstyAndProgDtls)
        }
    }, [userInfo, setShowUni])


    return (
        <div className="">
            <div className="form-body">
                <div className="important_notes">
                    <h4>Important Note:</h4>
                    <p>The applicants shall ensure that they have read and understood the eligibility criteria, qulification other conditions, and understand the minimum required subjects of the programe opted of the respective university for CUET - 2023 examination.</p>
                    <p>NTA or the respective university will not be under any circumstances will hold responsible for the selection of the subjects, opted program, or eligibility criteria/ conditions.</p>
                    <p>The applicant shall ensure to select the language, domain-specific subjects and general test in the next section of the application form as per the opted program of the respective university.</p>
                </div>
            </div>
            <div className="form-body">
                {!step.review && <div className='d-flex col-gap-20 align-items-center'>
                    <div className="formGroup flex_40">
                        <label htmlFor="universityName">Select University Name</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="universityName"
                                name="universityName"
                                value={university.universityName}
                                onChange={(e) => setUniversity((prev) => ({ ...prev, universityName: e.target.value }))}
                                required={showUni?.length ? false : true}
                            >
                                <option value="">Select</option>
                                {dropdown.university.map((obj, index) => (
                                    <option key={index} value={obj}>{obj}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup flex_40">
                        <label htmlFor="programmeName">Select Programme Name</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="programmeName"
                                name="programmeName"
                                required={showUni?.length ? false : true}
                                value={university.programmeName}
                                onChange={(e) => setUniversity((prev) => ({ ...prev, programmeName: e.target.value }))}
                            >
                                <option value="">Select</option>
                                {dropdown.progamme.map((obj, index) => (
                                    <option key={index} value={obj}>{obj}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex_15">
                        <button
                            type='button'
                            className='green_btn'
                            onClick={addUniversity}
                            disabled={university.universityName && university.programmeName ? false : true}
                        >ADD</button>
                    </div>
                </div>}
                {showUni?.length ?
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>UNIVERSITY NAME</th>
                                    <th>PROGRAMME NAME</th>
                                    <th>LIST OF SUBJECT(S) REQUIRED
                                        TO APPEAR IN CUET (UG)</th>
                                    <th>ELIGIBILITY	</th>

                                    {!step.review && <th>ACTION</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showUni.map((uni, index) => (
                                        <tr key={index}>
                                            <td>{uni.universityName}</td>
                                            <td>{uni.programmeName}</td>
                                            <td>	General Test</td>
                                            <td>	<a target="_blank" href="https://cuet.samarth.ac.in/index.php/app/info/eligibility?q=APEX#APEX75">Click here</a></td>


                                            {!step.review && <td>
                                                <button
                                                    type='button'
                                                    className='remove-btn'
                                                    onClick={() => removeUniversity(index)}
                                                >
                                                    REMOVE
                                                </button>
                                            </td>}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    : ""
                }
            </div>
        </div>
    )
}
