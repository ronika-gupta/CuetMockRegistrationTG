import React, { useContext, useState } from 'react';
import University from './University/University';
import TestPaper from './TestPaper/TestPaper';
import ExamForm from './ExamCenter/ExamForm';
import UploadDocsForm from './UploadDocs/UploadDocsForm';
import { UserContext } from "./ContextApi/UserContext";
import PersonalDetail from './PersonalDetail/PersonalDetail';
import EducationDetail from './EducationDetail/EducationDetail';
import { useEffect } from 'react';
import axios from 'axios';

export default function FormField() {
    const { userInfo, step, setuserInfo, setStep } = useContext(UserContext);

    const [dob, setDob] = useState({
        day: new Date(userInfo.dob).getDate(),
        month: new Date(userInfo.dob).getMonth(),
        year: new Date(userInfo.dob).getFullYear()
    })

    const [showUni, setShowUni] = useState([])

    // let date = new Date();
    // const dobHandler = (value, obj) => {
    //     setDob((prev) => ({ ...prev, [obj]: value }));
    //     if (dob.day && dob.month && dob.year) {
    //         date.setDate(dob.day);
    //         date.setMonth(dob.month);
    //         date.setFullYear(dob.year);
    //     }
    // }
    const [dobYear,setDobYear]=useState(new Date())
    let date = new Date();
    const dobHandler = (value, obj) => {
        // console.log(obj,value,"val")
        setDob((prev) => ({ ...prev, [obj]: value }));
        // console.log(dob)
        // if (dob.day && dob.month && dob.year) {
        //     date.setDate(dob.day);
        //     date.setMonth(dob.month);
        //     date.setFullYear(dob.year);
        //     setDobYear(JSON.stringify(date))
        // }
    }
useEffect(()=>{
   if (dob.day && dob.month && dob.year) {
            date.setDate(dob.day);
            date.setMonth(dob.month);
            date.setFullYear(dob.year);
            console.log(typeof(date),date)
            setDobYear(Object(date))
            console.log(String(date),"..../")
        }
                console.log(dob)

},[dob.day,dob.month,dob.year])

    let titleText = [
        {
            title: "Personal Details",
            footText: "Update Personal Form",
            class: ''
        },
        {
            title: "Educational Details",
            footText: "Update Educational Details",
            class: ''
        },
        {
            title: "University/Programme Selection",
            footText: "University/Programme Selection Preview",
            class: 'university'
        },
        {
            title: "Test Paper/Subject(s) selection",
            footText: "Update Test Paper",
            class: 'testPaper'
        },
        {
            title: "Examination Center Selection ",
            footText: "Update Examination Center",
            class: 'examCenter'
        },
        {
            title: "Upload Documents",
            footText: "Update Application Form",
            class: 'uploadDocs'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step.currentStep === 1) {
            setuserInfo((prev) => ({ ...prev, dob: dobYear }))
        }

        if (step.currentStep === 3) {
            setuserInfo((prev) => ({
                ...prev,
                univrstyAndProgDtls: showUni
            }))
        }

        setStep((prev) => ({
            ...prev,
            review: true,
            form: false
        }))
    }

    const handleNext = () => {
        if (step.currentStep < 6) {
            setStep((prev) => ({
                ...prev,
                currentStep: step.currentStep + 1,
                form: true,
                review: false,
            }))
             setuserInfo((prev) => ({
                ...prev,
                isProceedToPymnt: true,
                isAppSubmitted:true
            }))
        } else {
            console.log(userInfo,"userinfo")
            setStep((p) => ({ ...p, loading: true, }))
            axios.post("http://97.74.94.225:8282/besstMainApi/mockReg/saveCuetMockPreReg",
                userInfo,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
                    },
                }).then((result) => {
                    console.log(result);
                    if (result.data.ResultMessage === "SUCCESS") {
                        setStep((prev) => ({
                            ...prev,
                            loading: false,
                            currentStep: null,
                            payment: true,
                        }))
                    }
                });

        }
    }

    const formBack = () => {
        if (step.currentStep === 1) {
            setStep((prev) => ({
                ...prev,
                trackAppl: true,
                currentStep: null,
            }))
        } else {
            setStep((prev) => ({
                ...prev,
                currentStep: step.currentStep - 1,
                form: true,
                review: false
            }))
        }
    }

    useEffect(() => {
        if (userInfo.dob) {
            setDob({
                day: new Date(userInfo.dob).getDate(),
                month: new Date(userInfo.dob).getMonth(),
                year: new Date(userInfo.dob).getFullYear()
            })
        }
    }, [userInfo])

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className={`form-card mb-4 application_form ${titleText[step.currentStep - 1]?.class}`}>
                <div className='form-header'>
                    <h5>Application Form: {titleText[step.currentStep - 1]?.title}</h5>
                </div>
                {(step.currentStep && step.currentStep === 1) && <PersonalDetail dob={dob} dobHandler={dobHandler} />}
                {(step.currentStep && step.currentStep === 2) && <EducationDetail />}
                {(step.currentStep && step.currentStep === 3) && <University showUni={showUni} setShowUni={setShowUni} />}
                {(step.currentStep && step.currentStep === 4) && <TestPaper />}
                {(step.currentStep && step.currentStep === 5) && <ExamForm />}
                {(step.currentStep && step.currentStep === 6) && <UploadDocsForm />}
                {step.form &&
                    <div className='form-footer d-flex justify-content-between'>
                        <button
                            type='button'
                            className='outline_btn'
                            onClick={formBack}
                        >Back </button>
                        <button
                            type='submit'
                            className='brown_btn'
                        >Save</button>
                    </div>
                }

                {step.review &&
                    <div className='form-footer d-flex justify-content-between'>
                        <button
                            type='submit'
                            className={step.currentStep === 6 ? 'outline_btn black_btn' : 'outline_btn'}
                            onClick={() => setStep((prev) => ({
                                ...prev,
                                trackAppl: true,
                                currentStep: null,
                            }))}
                        >
                            {step.currentStep === 6 ? "Update Application Form" : "Back to Dashboard "}
                        </button>

                        {step.currentStep !== 6 && <button
                            type='submit'
                            className='update_btn'
                            onClick={() => setStep((prev) => ({
                                ...prev,
                                form: true,
                                review: false
                            }))}
                        >
                            {titleText[step.currentStep - 1].footText}
                        </button>
                        }
                        <button
                            type='submit'
                            className='green_btn'
                            onClick={handleNext}
                        >
                            Procced to {step.currentStep === 6 ? "Payment" : "Next Slection"}
                        </button>
                    </div>
                }
            </div>
        </form>
    )
}
