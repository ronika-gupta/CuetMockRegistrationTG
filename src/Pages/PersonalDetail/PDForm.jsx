import React, { useContext } from 'react';
import { UserContext } from "../ContextApi/UserContext";
import { DayPicker, MonthPicker, YearPicker } from "react-dropdown-date";
import { Country, State, City } from "country-state-city";
import { uid } from 'react-uid';

export default function PDForm({ dob, dobHandler }) {

    const { userInfo, setuserInfo } = useContext(UserContext);

    const handleChange = (e) => {
        setuserInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const dropdownValues = {
        qualification: ["Not Applicable", "Illiterate", "Matriculate", "Graduate", "Post Graduate", "Others", "Doctorate"],
        occupation: ["Not Applicable", "Agriculture", "Business", "Medical", "Engineering", "Law Practice", "Government Service", "Public Sector Service", "Private Service", "Teaching/Research", "Architecture", "Pharmacy", "Self Employment", "Others", "Defense Services(Army,Navy,IAF)"],
        annualIncome: ["UPTO 100000", "RS. 100001 - 200000", "RS. 200001 - 300000", "RS. 300001 - 400000", "RS. 400001 - 500000", "RS. 500001 - 600000", "RS. 600001 - 700000", "RS. 700001 - 800000", "RS. 800001 AND ABOVE"],
        prepartion: ["Self", "Individual Tution", "Online Coaching", "Tutorial Classes in School", "Correspondence Course", "Others"],
        medium: ["Assamese", "Bangla", "Bodo", "Dogri", "English", "Gujarati", "Hindi", "Kashmiri", "Kannada", "Konkani", "Maithili", "Malayalam", "Manipuri", "Marathi", "Nepali", "Oriya", "Punjabi", "Tamil", "Telugu", "Santali", "Sindhi", "Urdu"],
    }
    

       const getStartYear=()=>{
const date= new Date();
let year = date.getFullYear();
console.log(year-15,"year")
return year - 15
   }
    return (
        <>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Personal Details</h4></div>
                <div className="form-container">
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="name">Candidate’s Name (As per class X or Equivalent Certificate)</label>
                        <div className="form-input">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                placeholder="Enter Candidate’s Name (As per class X or Equivalent Certificate)"
                                className={userInfo.name ? "valid" : ""}
                                value={userInfo.name}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="dob">Candidate’s date of birth</label>
                        <div className='form-input d-flex dob col-gap-20'>
                            <DayPicker
                                defaultValue={'--Day--'}
                                value={dob.day}
                                onChange={(day) => dobHandler(day, 'day')}
                                // year={dob.year}
                                // month={dob.month}
                                required
                                classes={dob.day ? "valid" : ""}
                            />
                            <MonthPicker
                                defaultValue={'--Month--'}
                                caps
                                value={dob.month}
                                onChange={(month) => dobHandler(month, 'month')}
                                required
                                classes={dob.month ? "valid" : ""}
                            />
                            <YearPicker
                                defaultValue={'--Year--'}
                                    end={getStartYear()}

                                value={dob.year}
                                reverse
                                onChange={(year) => dobHandler(year, 'year')}
                                required
                                classes={dob.year ? "valid" : ""}

                            />
                            {console.log(dob,"dob")}
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="gender">Gender</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="gender"
                                name="gender"
                                className={userInfo.gender ? "valid" : ""}
                                value={userInfo.gender}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Male"> Male </option>
                                <option value="Female"> Female </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="nationality">Nationality</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="nationality"
                                name="nationality"
                                required
                                className={userInfo.nationality ? "valid" : ""}
                                value={userInfo.nationality}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Indian"> Indian </option>
                                <option value="Overseas Citizen of India(OCI)"> Overseas of Citizen of India(OCI) </option>
                                <option value="Foreign(Other than OCI)"> Foreign(Other than OCI) </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="category">Category</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="category"
                                name="category"
                                required
                                className={userInfo.category ? "valid" : ""}
                                value={userInfo.category}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="General/Unreserved"> General/Unreserved </option>
                                <option value="OBC-NCL"> OBC-NCL </option>
                                <option value="SC"> SC </option>
                                <option value="ST"> ST </option>
                                <option value="EWS"> EWS </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isPwBDBenchmark">If you are a PwBD Candidate will benchmark disability 40% or more/severe where percentage is not defined</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isPwBDBenchmark"
                                name="isPwBDBenchmark"
                                required
                                className={userInfo.isPwBDBenchmark ? "valid" : ""}
                                value={userInfo.isPwBDBenchmark}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="yes"> Yes </option>
                                <option value="no"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="fathersName">Father’s Name</label>
                        <div className="form-input">
                            <input
                                id="fathersName"
                                type="text"
                                name="fathersName"
                                required
                                placeholder="Enter Father’s Name"
                                className={userInfo.fathersName ? "valid" : ""}
                                value={userInfo.fathersName}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="fathrQualif">Father’s Qualification</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="fathrQualif"
                                name="fathrQualif"
                                required
                                className={userInfo.fathrQualif ? "valid" : ""}
                                value={userInfo.fathrQualif}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.qualification.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="fathrOcc">Father’s Occupation</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="fathrOcc"
                                name="fathrOcc"
                                required
                                className={userInfo.fathrOcc ? "valid" : ""}
                                value={userInfo.fathrOcc}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.occupation.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="mothersName">Mother’s Name</label>
                        <div className="form-input">
                            <input
                                id="mothersName"
                                type="text"
                                name="mothersName"
                                placeholder="Enter Mother’s Name"
                                required
                                className={userInfo.mothersName ? "valid" : ""}
                                value={userInfo.mothersName}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="mothrQuali">Mother’s Qualification</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="mothrQuali"
                                name="mothrQuali"
                                required
                                className={userInfo.mothrQuali ? "valid" : ""}
                                value={userInfo.mothrQuali}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.qualification.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="mothrOcc">Mother’s Occupation</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="mothrOcc"
                                name="mothrOcc"
                                required
                                className={userInfo.mothrOcc ? "valid" : ""}
                                value={userInfo.mothrOcc}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.occupation.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="guardianName">Guardian’s Name</label>
                        <div className="form-input">
                            <input
                                id="guardianName"
                                type="text"
                                name="guardianName"
                                placeholder="Enter Guardian’s Name"
                                className={userInfo.guardianName ? "valid" : ""}
                                value={userInfo.guardianName}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="annualFamlyIncome">Annual Family Income</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="annualFamlyIncome"
                                name="annualFamlyIncome"
                                required
                                className={userInfo.annualFamlyIncome ? "valid" : ""}
                                value={userInfo.annualFamlyIncome}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.annualIncome.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isTwin">Are You Twin?</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isTwin"
                                name="isTwin"
                                required
                                className={userInfo.isTwin ? "valid" : ""}
                                value={userInfo.isTwin}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="domicileState">Domicile State</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="domicileState"
                                name="domicileState"
                                required
                                className={userInfo.domicileState ? "valid" : ""}
                                value={userInfo.domicileState}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {State?.getStatesOfCountry("IN").map((opt) => (
                                    <option key={uid(opt)} value={opt.isoCode}> {opt.name} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isDiabetic">Are you Diabetic?</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isDiabetic"
                                name="isDiabetic"
                                required
                                className={userInfo.isDiabetic ? "valid" : ""}
                                value={userInfo.isDiabetic}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="plcOfResi">Place of Residence</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="plcOfResi"
                                name="plcOfResi"
                                required
                                className={userInfo.plcOfResi ? "valid" : ""}
                                value={userInfo.plcOfResi}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Urban"> Urban </option>
                                <option value="Rural"> Rural </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="prepMode">Mode of Preparation</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="prepMode"
                                name="prepMode"
                                required
                                className={userInfo.prepMode ? "valid" : ""}
                                value={userInfo.prepMode}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.prepartion.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="medOfStudy">Medium of Study in Qualifying Examination</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="medOfStudy"
                                name="medOfStudy"
                                required
                                className={userInfo.medOfStudy ? "valid" : ""}
                                value={userInfo.medOfStudy}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {dropdownValues.medium.map((opt) => (
                                    <option key={uid(opt)} value={opt}> {opt} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Present Address</h4></div>
                <div className="form-container">
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrPremiseNoName">Premise No./Name</label>
                        <div className="form-input">
                            <input
                                id="presAddrPremiseNoName"
                                type="text"
                                name="presAddrPremiseNoName"
                                required
                                placeholder="Enter Premise No./Name"
                                className={userInfo.presAddrPremiseNoName ? "valid" : ""}
                                value={userInfo.presAddrPremiseNoName}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrSubLocality">Sub Locality</label>
                        <div className="form-input">
                            <input
                                id="presAddrSubLocality"
                                type="text"
                                name="presAddrSubLocality"
                                required
                                placeholder="Enter Sub Locality"
                                className={userInfo.presAddrSubLocality ? "valid" : ""}
                                value={userInfo.presAddrSubLocality}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrLocality">Locality</label>
                        <div className="form-input">
                            <input
                                id="presAddrLocality"
                                type="text"
                                name="presAddrLocality"
                                required
                                placeholder="Enter Locality"
                                className={userInfo.presAddrLocality ? "valid" : ""}
                                value={userInfo.presAddrLocality}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrCountry">Country</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="presAddrCountry"
                                name="presAddrCountry"
                                required
                                className={userInfo.presAddrCountry ? "valid" : ""}
                                value={userInfo.presAddrCountry}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {Country.getAllCountries().map((cou) => (
                                    <option key={uid(cou.name)} value={cou.isoCode}>{cou.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrState">State/UT</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="presAddrState"
                                name="presAddrState"
                                required
                                className={userInfo.presAddrState ? "valid" : ""}
                                value={userInfo.presAddrState}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {State?.getStatesOfCountry(userInfo.presAddrCountry).map((cou) => (
                                    <option key={uid(cou.name)} value={cou.isoCode}>{cou.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrDistrict">District</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="presAddrDistrict"
                                name="presAddrDistrict"
                                required
                                className={userInfo.presAddrDistrict ? "valid" : ""}
                                value={userInfo.presAddrDistrict}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {
                                    City.getCitiesOfState(
                                        userInfo.presAddrCountry,
                                        userInfo.presAddrState
                                    ).map((cou) => (
                                        <option key={uid(cou.name)} value={cou.name}>{cou.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="presAddrPincode">Pincode</label>
                        <div className="form-input">
                            <input
                                id="presAddrPincode"
                                type="text"
                                name="presAddrPincode"
                                required
                                placeholder="Enter Pincode"
                                className={userInfo.presAddrPincode ? "valid" : ""}
                                value={userInfo.presAddrPincode}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Permanent Address</h4></div>
                <div className="form-container">
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrPremiseNoName">Premise No./Name</label>
                        <div className="form-input">
                            <input
                                id="permAddrPremiseNoName"
                                type="text"
                                name="permAddrPremiseNoName"
                                required
                                placeholder="Enter Premise No./Name"
                                className={userInfo.permAddrPremiseNoName ? "valid" : ""}
                                value={userInfo.permAddrPremiseNoName}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrSubLocality">Sub Locality</label>
                        <div className="form-input">
                            <input
                                id="permAddrSubLocality"
                                type="text"
                                name="permAddrSubLocality"
                                required
                                placeholder="Enter Sub Locality"
                                className={userInfo.permAddrSubLocality ? "valid" : ""}
                                value={userInfo.permAddrSubLocality}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrLocality">Locality</label>
                        <div className="form-input">
                            <input
                                id="permAddrLocality"
                                type="text"
                                name="permAddrLocality"
                                required
                                placeholder="Enter Locality"
                                className={userInfo.permAddrLocality ? "valid" : ""}
                                value={userInfo.permAddrLocality}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrCountry">Country</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="permAddrCountry"
                                name="permAddrCountry"
                                required
                                className={userInfo.permAddrCountry ? "valid" : ""}
                                value={userInfo.permAddrCountry}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {Country.getAllCountries().map((cou) => (
                                    <option key={uid(cou.name)} value={cou.isoCode}>{cou.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrState">State/UT</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="permAddrState"
                                name="permAddrState"
                                required
                                className={userInfo.permAddrState ? "valid" : ""}
                                value={userInfo.permAddrState}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {State?.getStatesOfCountry(userInfo.presAddrCountry).map((cou) => (
                                    <option key={uid(cou.name)} value={cou.isoCode}>{cou.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrDistrict">District</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="permAddrDistrict"
                                name="permAddrDistrict"
                                required
                                className={userInfo.permAddrDistrict ? "valid" : ""}
                                value={userInfo.permAddrDistrict}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                {
                                    City.getCitiesOfState(
                                        userInfo.permAddrCountry,
                                        userInfo.permAddrState
                                    ).map((cou) => (
                                        <option key={uid(cou.name)} value={cou.name}>{cou.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="permAddrPincode">Pincode</label>
                        <div className="form-input">
                            <input
                                id="permAddrPincode"
                                type="text"
                                name="permAddrPincode"
                                required
                                placeholder="Enter Pincode"
                                className={userInfo.permAddrPincode ? "valid" : ""}
                                value={userInfo.presAddrPincode}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-body bb-grey">
                <div className="subTitle">
                    <h4>Other Quota &amp; Category</h4>
                </div>
                <div className="form-container">
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isBelowPoverty">Do you belong to below poverty line?</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isBelowPoverty"
                                name="isBelowPoverty"
                                required
                                className={userInfo.isBelowPoverty ? "valid" : ""}
                                value={userInfo.isBelowPoverty}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isKashmiriMigrant">Are you kashmiri migrant?</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isKashmiriMigrant"
                                name="isKashmiriMigrant"
                                required
                                className={userInfo.isKashmiriMigrant ? "valid" : ""}
                                value={userInfo.isKashmiriMigrant}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isDefenceOrExService">Ward of Defense Personnel / Ex-Servicemen</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isDefenceOrExService"
                                name="isDefenceOrExService"
                                required
                                className={userInfo.isDefenceOrExService ? "valid" : ""}
                                value={userInfo.isDefenceOrExService}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isNccQuota">Claim for NCC Quota</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isNccQuota"
                                name="isNccQuota"
                                required
                                className={userInfo.isNccQuota ? "valid" : ""}
                                value={userInfo.isNccQuota}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isSportsQuota">Claim for Sports Quota</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isSportsQuota"
                                name="isSportsQuota"
                                required
                                className={userInfo.isSportsQuota ? "valid" : ""}
                                value={userInfo.isSportsQuota}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                    <div className="formGroup d-flex col-gap-20 align-items-center">
                        <label htmlFor="isUniversityEmployeeWard">Are you a ward of University Employee?</label>
                        <div className="form-input select-dropdown">
                            <select
                                id="isUniversityEmployeeWard"
                                name="isUniversityEmployeeWard"
                                required
                                className={userInfo.isUniversityEmployeeWard ? "valid" : ""}
                                value={userInfo.isUniversityEmployeeWard}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Select</option>
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
