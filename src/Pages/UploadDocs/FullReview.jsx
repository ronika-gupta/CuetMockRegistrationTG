import React, { useContext } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function FullReview() {
    const { userInfo } = useContext(UserContext);

    let PersonalReview = [
        {
            "subTitle": "Personal Details",
            "fieldsList": [
                {
                    "objName": "name",
                    "labelTxt": "Candidate’s Name (As per class X or Equivalent Certificate)"
                },
                {
                    "objName": "dob",
                    "labelTxt": "Candidate’s date of birth"
                },
                {
                    "objName": "gender",
                    "labelTxt": "Gender"
                },
                {
                    "objName": "nationality",
                    "labelTxt": "Nationality"
                },
                {
                    "objName": "category",
                    "labelTxt": "Category"
                },
                {
                    "objName": "PwBD",
                    "labelTxt": "If you are a PwBD Candidate will benchmark disability 40% or more/severe where percentage is not defined"
                },
                {
                    "objName": "fathersName",
                    "labelTxt": "Father’s Name"
                },
                {
                    "objName": "fathrQualif",
                    "labelTxt": "Father’s Qualification"
                },
                {
                    "objName": "fathrOcc",
                    "labelTxt": "Father’s Occupation"
                },
                {
                    "objName": "mothersName",
                    "labelTxt": "Mother’s Name"
                },
                {
                    "objName": "mothrQuali",
                    "labelTxt": "Mother’s Qualification"
                },
                {
                    "objName": "mothrOcc",
                    "labelTxt": "Mother’s Occupation"
                },
                {
                    "objName": "guardianName",
                    "labelTxt": "Guardian’s Name"
                },
                {
                    "objName": "annualFamlyIncome",
                    "labelTxt": "Annual Family Income"
                },
                {
                    "objName": "isTwin",
                    "labelTxt": "Are You Twin?"
                },
                {
                    "objName": "domicileState",
                    "labelTxt": "Domicile State"
                },
                {
                    "objName": "isDiabetic",
                    "labelTxt": "Are you Diabetic?"
                },
                {
                    "objName": "plcOfResi",
                    "labelTxt": "Place of Residence"
                },
                {
                    "objName": "prepMode",
                    "labelTxt": "Mode of Preparation"
                },
                {
                    "objName": "medOfStudy",
                    "labelTxt": "Medium of Study in Qualifying Examination"
                }
            ]
        },
        {
            "subTitle": "Present Address",
            "fieldsList": [
                {
                    "objName": "presAddrPremiseNoName",
                    "labelTxt": "Premise No./Name"
                },
                {
                    "objName": "presAddrSubLocality",
                    "labelTxt": "Sub Locality"
                },
                {
                    "objName": "presAddrLocality",
                    "labelTxt": "Locality"
                },
                {
                    "objName": "presAddrCountry",
                    "labelTxt": "Country"
                },
                {
                    "objName": "presAddrState",
                    "labelTxt": "State/UT"
                },
                {
                    "objName": "presAddrDistrict",
                    "labelTxt": "District"
                },
                {
                    "objName": "presAddrPincode",
                    "labelTxt": "Pincode"
                }
            ]
        },
        {
            "subTitle": "Permanent Address",
            "fieldsList": [
                {
                    "objName": "permAddrPremiseNoName",
                    "labelTxt": "Premise No./Name"
                },
                {
                    "objName": "permAddrSubLocality",
                    "labelTxt": "Sub Locality"
                },
                {
                    "objName": "permAddrLocality",
                    "labelTxt": "Locality"
                },
                {
                    "objName": "permAddrCountry",
                    "labelTxt": "Country"
                },
                {
                    "objName": "permAddrState",
                    "labelTxt": "State/UT"
                },
                {
                    "objName": "permAddrDistrict",
                    "labelTxt": "District"
                },
                {
                    "objName": "permAddrPincode",
                    "labelTxt": "Pincode"
                }
            ]
        },
        {
            "subTitle": "Other Quota & Category",
            "fieldsList": [
                {
                    "objName": "isBelowPoverty",
                    "labelTxt": "Do you belong to below poverty line?"
                },
                {
                    "objName": "isKashmiriMigrant",
                    "labelTxt": "Are you kashmiri migrant?"
                },
                {
                    "objName": "isDefenceOrExService",
                    "labelTxt": "Ward of Defense Personnel / Ex-Servicemen"
                },
                {
                    "objName": "isNccQuota",
                    "labelTxt": "Claim for NCC Quota"
                },
                {
                    "objName": "isSportsQuota",
                    "labelTxt": "Claim for Sports Quota"
                },
                {
                    "objName": "isUniversityEmployeeWard",
                    "labelTxt": "Are you a ward of University Employee?"
                }
            ]
        }
    ]

    let educationReview = [
        {
            "subTitle": "Class Xth or Equivalent Educational Details",
            "fieldsList": [
                {
                    "objName": "resultStatus",
                    "labelTxt": "Result Status"
                },
                {
                    "objName": "passingYr",
                    "labelTxt": "Passing Year"
                },
                {
                    "objName": "qualifyingExam",
                    "labelTxt": "Qualifying Exam"
                },
                {
                    "objName": "schoolingPlc",
                    "labelTxt": "Place of Schooling"
                },
                {
                    "objName": "schoolCollegType",
                    "labelTxt": "Type of School / College"
                },
                {
                    "objName": "qualifyingExamCountry",
                    "labelTxt": "Qualifying Examination Country"
                },
                {
                    "objName": "qualifyingExamState",
                    "labelTxt": "Qualifying Examination State"
                },
                {
                    "objName": "qualifyingExamDistrict",
                    "labelTxt": "Qualifying Examination District"
                },
                {
                    "objName": "boardName",
                    "labelTxt": "Board Name"
                },
                {
                    "objName": "schoolCollegNameAndAddr",
                    "labelTxt": "School/College Name and Address"
                },
                {
                    "objName": "schoolCollegNameAndPin",
                    "labelTxt": "School/College Pincode"
                },
                {
                    "objName": "rollNo",
                    "labelTxt": "Roll Number"
                },
                {
                    "objName": "resultMode",
                    "labelTxt": "Result Mode"
                },
                {
                    "objName": "maxMarks",
                    "labelTxt": "Maximum Marks"
                },
                {
                    "objName": "marksObtd",
                    "labelTxt": "Marks Obtained"
                },
                {
                    "objName": "percentage",
                    "labelTxt": "Percentage"
                }
            ]
        },
        {
            "subTitle": "Class XIIth or Equivalent Educational Details",
            "fieldsList": [
                {
                    "objName": "resultStatus",
                    "labelTxt": "Result Status"
                },
                {
                    "objName": "passingYr",
                    "labelTxt": "Passing Year"
                },
                {
                    "objName": "qualifyingExam",
                    "labelTxt": "Qualifying Exam"
                },
                {
                    "objName": "schoolingPlc",
                    "labelTxt": "Place of Schooling"
                },
                {
                    "objName": "schoolCollegType",
                    "labelTxt": "Type of School / College"
                },
                {
                    "objName": "qualifyingExamCountry",
                    "labelTxt": "Qualifying Examination Country"
                },
                {
                    "objName": "qualifyingExamState",
                    "labelTxt": "Qualifying Examination State"
                },
                {
                    "objName": "qualifyingExamDistrict",
                    "labelTxt": "Qualifying Examination District"
                },
                {
                    "objName": "boardName",
                    "labelTxt": "Board Name"
                },
                {
                    "objName": "schoolCollegNameAndAddr",
                    "labelTxt": "School/College Name and Address"
                },
                {
                    "objName": "schoolCollegNameAndPin",
                    "labelTxt": "School/College Pincode"
                },
                {
                    "objName": "rollNo",
                    "labelTxt": "Roll Number"
                },
                {
                    "objName": "resultMode",
                    "labelTxt": "Result Mode"
                },
                {
                    "objName": "maxMarks",
                    "labelTxt": "Maximum Marks"
                },
                {
                    "objName": "marksObtd",
                    "labelTxt": "Marks Obtained"
                },
                {
                    "objName": "percentage",
                    "labelTxt": "Percentage"
                }
            ]
        }
    ]

    return (
        <div className="fullReview">
            <div className='form-body bb-grey'>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className='d-flex align-items-center'>
                        <p>Application Status:</p>
                        <button className='remove-btn ms-2'>Not Submitted</button>
                    </div>
                    <p className='text-center'><b>Common University Entrance Test <br /> CUET )UG( - 2023</b></p>
                    <img src={`data:image/jpeg;base64,${userInfo.usrPicStr}`} width="150" alt="" />
                </div>
                <p className='mb-3'><b>Application Form</b></p>
                <p className='mb-5'>Review the following particulars carefully. If you would like to change any particulars entered, you may do so by using ‘Left Links’ button or press ‘FINAL SUBMIT’ button for final submission. Please ensure correctness of following fields as ‘No Correction will be permitted at later stage.</p>
                <ul>
                    <li>Candidate Name</li>
                    <li>Father Name</li>
                    <li>Mother Name</li>
                    <li>Date of Birth</li>
                    <li>Gender</li>
                    <li>Category</li>
                    <li>Person with Disability (PwD)</li>
                    <li>Question Paper Medium</li>
                    <li>State/UT from where 12th/Equivalent Passed/Appearing</li>
                </ul>
            </div>
            <div className="bb-grey">
                {PersonalReview.map((list) => (
                    <div key={uid(list)} className="form-body">
                        <div className="subTitle">
                            <h4>{list.subTitle}</h4>
                        </div>
                        <div className='d-flex flex-wrap row-gap-20'>
                            {list.fieldsList.map((label) => (
                                <div key={uid(label)} className='flex_50 d-flex col-gap-20'>
                                    <p className='flex_50'>{label.labelTxt}</p>
                                    <p className='flex_50'>
                                        <b>{label.objName === "dob" && new Date(userInfo[label.objName]).toLocaleDateString()}
                                            {label.objName !== "dob" && userInfo[label.objName]}</b>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="bb-grey">
                {educationReview.map((list, index) => (
                    <div key={uid(list)} className="form-body">
                        <div className="subTitle">
                            <h4>{list.subTitle}</h4>
                        </div>
                        <div className='d-flex flex-wrap row-gap-20'>
                            {list.fieldsList.map((label) => (
                                <div key={uid(label)} className='flex_50 d-flex'>
                                    <p className='flex_50'>{label.labelTxt}</p>
                                    <p className='flex_50'>
                                        <b>{userInfo.cuetPreRegXAndXIIDtlsBeanList[index][label.objName]}</b>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>University /programme Selection</h4>
                </div>
                <div className='d-flex flex-wrap row-gap-20'>
                    {userInfo.univrstyAndProgDtls.map((uni) => (
                        <div className="flex_50 d-flex">
                            <p className='flex_50'><strong>{uni.universityName}</strong></p>
                            <p className='flex_50'><strong>{uni.programmeName}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Test Paper/Subject(s) selection</h4>
                </div>
                <p className='mb-3'><b>Test Paper/Subject(s) selection for first slot</b></p>
                <div className="d-flex mb-4">
                    <div className="flex_70">
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Language from Section 1A</p>
                            <p className='flex_50'><b>{userInfo.slot1LangSubj}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Domain-Specific Subject 1</p>
                            <p className='flex_50'><b>{userInfo.slot1DomainSubj1}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Domain-Specific Subject 2</p>
                            <p className='flex_50'><b>{userInfo.slot1DomainSubj2}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Do you want to apply for General Test Section III</p>
                            <p className='flex_50'><b>{userInfo.slot1IsGenSubj}</b></p>
                        </div>
                    </div>
                </div>
                <p className='mb-3'><b>Test Paper/Subject(s) selection for second slot</b></p>
                <div className="d-flex">
                    <div className="flex_70">
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Additional language from Section IA + Section IB</p>
                            <p className='flex_50'><b>{userInfo.slot2LangSubjAlternative}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Additional language from Section IA + Section IB i lieu of domain specific subject</p>
                            <p className='flex_50'><b>{userInfo.slot2DomainSubj3}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Domain-Specific Subject 3</p>
                            <p className='flex_50'><b>{userInfo.slot2DomainSubj4}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Domain-Specific Subject 4</p>
                            <p className='flex_50'><b>{userInfo.slot2DomainSubj5}</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Examination Center Details</h4>
                </div>
                <div className="d-flex">
                    <div className="flex_70">
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Question paper medium</p>
                            <p className='flex_50'><b>{userInfo.qPaperMedium}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Center City Preference 1</p>
                            <p className='flex_50'><b>{userInfo.cityPref1}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Center City Preference 2</p>
                            <p className='flex_50'><b>{userInfo.cityPref2}</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Center City Preference 3</p>
                            <p className='flex_50'><b>{userInfo.cityPref3}</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Fee Details</h4>
                </div>
                <div className="d-flex">
                    <div className="flex_70">
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Opted for Exam Center(s) outside India</p>
                            <p className='flex_50'><b>No</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Fee for Slot 1 papers (101: English, 306: Computer Science/ Information Practices, General test Section III)</p>
                            <p className='flex_50'><b>₹ 650</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Fee for Slot 2 papers (102: Hindi, 110: Punjabi, 307: Environmental Studies, 313: Geography, 309: Economics/business Economics)</p>
                            <p className='flex_50'><b>₹ 650</b></p>
                        </div>
                        <div className="d-flex col-gap-20 mb-2 align-items-center">
                            <p className='flex_50'>Total amount to be Paid</p>
                            <p className='flex_50'><b>₹ 1300</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-body">
                <div className="subTitle">
                    <h4 className='brownTxt'>Particluars checklist to be verified</h4>
                </div>
                <div className="formGroup checkbox">
                    <input id="nameVerify" type="checkbox" required />
                    <label htmlFor="nameVerify">
                        My name is {userInfo.name} as per the Xth Marksheet/Certificate.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="fVerify" type="checkbox" required />
                    <label htmlFor="fVerify">
                        My Father’s Name is {userInfo.fathersName}.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="mVerify" type="checkbox" required />
                    <label htmlFor="mVerify">
                        My Mother’s Name is {userInfo.mothersName}.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="dobVerify" type="checkbox" required />
                    <label htmlFor="dobVerify">
                        My Date of Birth is {new Date(userInfo.dob).toLocaleDateString()} as per the Xth Marksheet/Certificate
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="gender" type="checkbox" required />
                    <label htmlFor="gender">
                        My Gender is {userInfo.gender}.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="category" type="checkbox" required />
                    <label htmlFor="category">
                        My Category is {userInfo.category}. Category change claims will not be entertained in future
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="eduV" type="checkbox" required />
                    <label htmlFor="eduV">
                        My Educate details are correct.
                    </label>
                </div>


                <div className="formGroup checkbox">
                    <input id="myState" type="checkbox" required />
                    <label htmlFor="myState">
                        My state/UT from where I Passes/Appearing in 12th/Equivalent is correct, which is
                        {" " + userInfo.cuetPreRegXAndXIIDtlsBeanList[1].qualifyingExamState}
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="qSubject" type="checkbox" required />
                    <label htmlFor="qSubject">
                        I have read the university admission guidelines and eligibility criteria and choose my examination subjects accordingly.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="med" type="checkbox" required />
                    <label htmlFor="med">
                        My question paper medium is correct, which is {" " + userInfo.medOfStudy}.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="examCities" type="checkbox" required />
                    <label htmlFor="examCities">
                        My choice of examination cities in order of preference are
                    </label>
                </div>
                <div className="formGroup">
                    <label>Preference 1 : {userInfo.cityPref1}</label>
                </div>
                <div className="formGroup">
                    <label>Preference 2 : {userInfo.cityPref2}</label>
                </div>
                <div className="formGroup">
                    <label>Preference 3 : {userInfo.cityPref3}</label>
                </div>
                <div className="formGroup">
                    <label>Preference 4 : {userInfo.cityPref4}</label>
                </div>


                <div className="formGroup checkbox">
                    <input id="declar1" type="checkbox" required />
                    <label htmlFor="declar1">
                        I have verified my university programme selection and applied for eligible programmes.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="declar2" type="checkbox" required />
                    <label htmlFor="declar2">
                        I hereby declare that I have filled up this online application after carefully reading the Information Bulletin and fully understanding the provisions/procedures mentioned them. i further declare that all the particulars given by me in this application are true to the best of my knowledge and belief. i agree that my Result may be withheld/ not declared/ my candidature may automatically stand cancelled, in case it is found at any point of time in future that false information has been furnished in this application. i shall abide by these terms and conditions as well as those laid down in the Information Bulletin. public Notices and Advisories issued by NTA regarding this exam from time to time.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="declar3" type="checkbox" required />
                    <label htmlFor="declar3">
                        The information given above is true to the best of my knowledge and belief. i am responsible for the information provided by me in the application form and the documents uploaded along with it. in case if it is discovered at a later dte in the subsequent stages of admission process that the information is incorrect. i understand that my candidature is liable to be cancelled and further action may be taken against me by NTA or the participating Institution or other Authorities.
                    </label>
                </div>
                <div className="formGroup checkbox">
                    <input id="declar4" type="checkbox" required />
                    <label htmlFor="declar4">
                        Further, i authorize NTA to share the details submitted by me in my application form and those relating of my appearance in CUET (UG) - 2023, if required, with the University/ies to whom I intend to apply, whose name/s are indicated by me ijn my application form, to facilitate the admission process.
                    </label>
                </div>
            </div>
        </div>
    )
}
