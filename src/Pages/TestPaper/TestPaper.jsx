import React, { useContext } from 'react';
import { useState } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function TestPaper() {
    const { userInfo, setuserInfo, step } = useContext(UserContext);
    const [checkbox, setCheckbox] = useState(false)

    const handleChange = (e) => {
        console.log(userInfo, "userInfo")
        if ([e.target.name] == 'slot1LangSubj' || [e.target.name] == 'slot2LangSubjAlternative') {
            if (e.target.value == userInfo.slot1LangSubj || e.target.value == userInfo.slot2LangSubjAlternative) {
                alert('You have already selected the subject')
                setuserInfo((prev) => ({
                    ...prev,
                    [e.target.name]: ''
                }))
            } else {
                setuserInfo((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value
                }))
            }
        }else if([e.target.name] == 'slot1DomainSubj1' || [e.target.name] == 'slot1DomainSubj2' || [e.target.name] == 'slot2DomainSubj3' || [e.target.name] == 'slot2DomainSubj4' || [e.target.name] == 'slot2DomainSubj5'){
        if (e.target.value == userInfo.slot1DomainSubj1 || e.target.value == userInfo.slot1DomainSubj2 || e.target.value == userInfo.slot2DomainSubj3 || e.target.value == userInfo.slot2DomainSubj4 || e.target.value == userInfo.slot2DomainSubj5) {
                alert('You have already selected the subject')
                setuserInfo((prev) => ({
                    ...prev,
                    [e.target.name]: ''
                }))
            } else {
                setuserInfo((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value
                }))
            }
        }
        else {
            setuserInfo((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }

    let dropdownValues = {
        subjects: ["Assamese"
            , "Hindi"
            , "Marathi"
            , "Tamil"
            , "Bengali "
            , "Kannada"
            , "Odia"
            , "Telegu"
            , "English"
            , "Malayalam"
            , "Punjabi"
            , "Urdu"
            , "Gujrati"]
    }
    let Domain_Specific_Subject_1 = {
        subjects: ["Accountancy / Bookkeeping",
            "Agriculture",
            "Anthropology",
            "Biologyc / Biological Studies / Biotechnology / Biochemistry",
            "Business Studies",
            "Chemistry",
            "Environmental Studies",
            "Computer Science / Informative Practices",
            "Economics / Business Economics",
            "Engineering Graphics",
            "Fine Arts / Visual Arts / Commercial Art",
            "Geography / Geology",
            "History",
            "Home Science",
            "Knowledge Tradition Practices India",
            "Legal Studies",
            "Mass Media / Mass Communication",
            "Mathematics",
            "Performing Arts: i) Dance(Kathak / Bharatnatyam / Kathakali / Odissi / Kuchipudi / Manipuri), ii) Drama, iii) Music(Hindustani / Carnatic / Rabindra Sangeet / Percussion / Non-Percussion)",
            "Physical Education/National Cadet Corps(NCC)/Yoga",
            "Physics",
            "Political Science",
            "Psychology",
            "Sanskrit",
            "Sociology",
            "Teaching Aptitude"]
    }
    let General_Test_Section_III = {
        subjects: ["General Knowledge"
            , "Current Affairs"
            , "General Mental Ability"
            , "Numerical Ability"
            , "Quantitative Reasoning (Simple Application of Basic Mathematical Concept/Arithmetic/Algebra/Geometry/Mensuration/Statistics taught till class 8) "
            , "Logical and Analytical reasoning"]
    }
    let Section_IB = {
        subjects: ["Arabic "
            , "German "
            , "Maithili"
            , "Santhali "
            , "Bodo  "
            , "Chinese  "
            , "Dogri"
            , "French"
            , "Italian "
            , "Japanese"
            , "Kashmiri "
            , "Konkani"
            , "Manipuri ",
            "Nepali ",
            "Persian ",
            "Russian ",
            "Santhali ",
            "Sindhi ",
            "Spanish ",
            "Sanskrit ",
            "Tibetan"]
    }


    return (
        <>
            <div className="form-body paperNotes">
                <p><strong>Note:</strong></p>
                <ul>
                    <li>I have read the rules for selection of test paper/Subject(s) desaulted in CUET (UG) - 2023 Information Bulletin.</li>
                    <li>Candidte must select Test paper/Subject(s) based on the eligibility criteria of the Programme/University in which the candidate wants to seek admission.</li>
                </ul>
                <div className="table-responsive">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>First Slot (Maximum 4 tests)</th>
                                <th>Second Slot (Maximum 5 tests)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Section I A: Only Language</p>
                                    <p>Section II 2: Domain Specific Subjects</p>
                                    <p>Section III: German Test</p>
                                </td>
                                <td>
                                    <p>Section IA + 1B: One (Two of the subjects are less than 4)</p>
                                    <p>Section II Maximum of 4 Subjects</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>1.  A Candidate can choose a maximum of <b>any 3 languages</b> from Section 1A and Section 1B taken together. (in case 3 languages are chosen then 1 needs to be in lieu of Domain specific subjects).</p>
                <p>2. Examination will be taken in two or more slots on different days depending on the subjects/ tests taken by the candidates. However, in Slot One which will be in morning shift a candidate may take upto 4 tests only, and in Slot 2 which will be in the afternoon shift a candidate can take upto 5 tests. Combining Slot 1 and Slot 2 together a candidate may take maximum 9 Tests.</p>
                <hr />
            </div>
            <div className={`form-body ${step.review ? "reviewPage" : ""}`}>
                <div className='subTitle'>
                    <h4>Select Test Paper/Subject(s) selection for first slot</h4>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1LangSubj">Language from Section 1A</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1LangSubj"
                            name="slot1LangSubj"
                            required
                            className={userInfo.slot1LangSubj ? "valid" : ""}
                            value={userInfo.slot1LangSubj}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 101)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1DomainSubj1">Domain-Specific Subject 1</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1DomainSubj1"
                            name="slot1DomainSubj1"
                            required
                            className={userInfo.slot1DomainSubj1 ? "valid" : ""}
                            value={userInfo.slot1DomainSubj1}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {Domain_Specific_Subject_1.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 114)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1DomainSubj2">Domain-Specific Subject 2</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1DomainSubj2"
                            name="slot1DomainSubj2"
                            required
                            className={userInfo.slot1DomainSubj2 ? "valid" : ""}
                            value={userInfo.slot1DomainSubj2}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {Domain_Specific_Subject_1.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 114)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot1IsGenSubj">Do you want to apply for General Test Section III</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot1IsGenSubj"
                            name="slot1IsGenSubj"
                            required
                            className={userInfo.slot1IsGenSubj ? "valid" : ""}
                            value={userInfo.slot1IsGenSubj}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {General_Test_Section_III.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 140)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr />
                <div className='subTitle'>
                    <h4>Select Test Paper/Subject(s) selection for second slot</h4>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2LangSubj">Additional language from Section IA + Section IB</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2LangSubj"
                            name="slot2LangSubj"
                            required
                            className={userInfo.slot2LangSubj ? "valid" : ""}
                            value={userInfo.slot2LangSubj}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {Section_IB.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 101)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2LangSubjAlternative">Additional language from Section IA + Section IB i lieu of domain specific subject</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2LangSubjAlternative"
                            name="slot2LangSubjAlternative"
                            required
                            className={userInfo.slot2LangSubjAlternative ? "valid" : ""}
                            value={userInfo.slot2LangSubjAlternative}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {dropdownValues.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 101)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2DomainSubj3">Domain-Specific Subject 3</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2DomainSubj3"
                            name="slot2DomainSubj3"
                            required
                            className={userInfo.slot2DomainSubj3 ? "valid" : ""}
                            value={userInfo.slot2DomainSubj3}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {Domain_Specific_Subject_1.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 114)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2DomainSubj4">Domain-Specific Subject 4</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2DomainSubj4"
                            name="slot2DomainSubj4"
                            required
                            className={userInfo.slot2DomainSubj4 ? "valid" : ""}
                            value={userInfo.slot2DomainSubj4}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {Domain_Specific_Subject_1.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 114)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="formGroup d-flex col-gap-20 align-items-center">
                    <label htmlFor="slot2DomainSubj5">Domain-Specific Subject 5</label>
                    <div className="form-input select-dropdown">
                        <select
                            id="slot2DomainSubj5"
                            name="slot2DomainSubj5"
                            required
                            className={userInfo.slot2DomainSubj5 ? "valid" : ""}
                            value={userInfo.slot2DomainSubj5}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="">Select</option>
                            {Domain_Specific_Subject_1.subjects.map((obj,index) => (
                                <option key={uid(obj)} value={obj}>{(index + 114)+': '+ obj}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr />
                <div className="formGroup checkbox">
                    <input
                        id="declaration"
                        type="checkbox"
                        required
                        checked={checkbox}
                        onChange={() => setCheckbox(checkbox ? false : true)}
                        disabled={step.review ? true : false}
                    />
                    <label htmlFor="declaration">
                        I hereby declare that I have selected above subjects for CUET (UG) -2023 examination and understand that the selected subject is not liable to change or modified in the later stage of the application and examination.
                    </label>
                </div>
            </div>
        </>
    )
}
