import React, { useContext } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function PDReview() {
    const { userInfo } = useContext(UserContext);

    let ReviewList = [
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
                    "objName": "isPwBDBenchmark",
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

    return (
        <div className="review-card">
            {ReviewList.map((list) => (
                <div key={uid(list)} className="review-body">
                    <h4 className='review-subtitle'>{list.subTitle}</h4>
                    <div className='d-flex flex-wrap'>
                        {console.log(userInfo)}
                        {list.fieldsList.map((label) => (
                            <div key={uid(label)} className='flex_50 d-flex col-gap-20'>
                                <p className='flex_50'><strong>{label.labelTxt}</strong></p>
                                <p className='flex_50'>
                                    {label.objName === "dob" && new Date(userInfo[label.objName]).toLocaleDateString()}
                                    {label.objName !== "dob" && userInfo[label.objName]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
