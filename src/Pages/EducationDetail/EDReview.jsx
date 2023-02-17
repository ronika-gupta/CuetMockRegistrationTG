import React, { useContext } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function EDReview() {
    const { userInfo } = useContext(UserContext);

    let ReviewList = [
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
        <div className="review-card">
            {ReviewList.map((list, index) => (
                <div key={uid(list)} className="review-body">
                    <h4 className='review-subtitle'>{list.subTitle}</h4>
                    <div className='d-flex flex-wrap'>
                        {list.fieldsList.map((label) => (
                            <div key={uid(label)} className='flex_50 d-flex col-gap-20'>
                                <p className='flex_50'><strong>{label.labelTxt}</strong></p>
                                <p className='flex_50'>
                                    {userInfo.cuetPreRegXAndXIIDtlsBeanList[index][label.objName]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
