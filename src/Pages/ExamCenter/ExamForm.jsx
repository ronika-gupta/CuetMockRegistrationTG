import React, { useContext } from 'react';
import { useState } from 'react';
import { uid } from 'react-uid';
import { UserContext } from "../ContextApi/UserContext";

export default function ExamForm() {
    const { userInfo, setuserInfo, step } = useContext(UserContext);
    const [state, setstate] = useState({
        statePref1: "",
        statePref2: "",
        statePref3: "",
        statePref4: ""
    })

    const handleChange = (e) => {
         if ([e.target.name] == 'cityPref1' || [e.target.name] == 'cityPref2' || [e.target.name] == 'cityPref3' || [e.target.name] == 'cityPref4') {
            if (e.target.value == userInfo.cityPref1 || e.target.value == userInfo.cityPref2 || e.target.value == userInfo.cityPref3 || e.target.value == userInfo.cityPref4) {
                alert('You have already selected the city')
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

    const handleState = (e) => {
        setstate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    let dropdownValues = {
        subjects: ["English", "Hindi"],
        states: ["DELHI", "HARYANA", "UTTARPRADHESH","ANDAMAN AND NICOBAR ISLANDS","ARUNACHAL PRADESH","ASSAM",
        "KERALA","LAKSHADWEEP","MANIPUR","MEGHALAYA","MIZORAM","NAGALAND","PUDUCHERRY","SIKKIM","TAMIL NADU","TRIPURA",
        "UTTAR PRADESH","WEST BENGAL"],
        DELHI: ["DELHI/NEW DELHI (DL01)"],
        HARYANA: ["FARIDABAD (HR03)", "GURUGRAM (HR04)"],
        UTTARPRADHESH: ["GHAZIBAD (UP 07)", "MERUTI (UP14)", "NOIDA/GREATER NOIDA (UP 09)"],
        'ANDAMAN AND NICOBAR ISLANDS':["PORT BLAIR (AN01)"],
        "ARUNACHAL PRADESH" : ["ITANAGAR/NAHARLAGUN (AL01)","PAPUM PARE (AL02)",],
    "ASSAM":["Dibrugarh (AM01)","GUWAHATI (AM02)","JORHAT (AM03)","LAKHIMPUR (AM04)","SILCHAR(ASSAM)(AM05)","TEZPUR (AM06)"],
    "KERALA":["ANGAMALY (KL02)","CHENGANNUR (KL03)","ERNAKULAM (KL04)","IDUKKI (KL05)","KANNUR (KL06)","KASARAGOD (KL07)","KOLLAM (KL08)","KOTTAYAM (KL09)","KOZHIKODE/CALICUT (KL10)","MALAPPURAM (KL11)","MOOVATTUPUZHA (KL12)","PALAKKAD (KL13)","PATHANAMTHITTA (KL14)","PIYYANNUR (KL15)","THIRUVANANTHAPURAM (KL16)","THRISSUR (KL17)","WAYANAD (KL18)",],
"LAKSHADWEEP":["KAVARATTI (LD01)"],
"MANIPUR":["CHURACHANDPUR (MN01)","IMPHAL (MN02)","IMPHAL WEST (MN03)","UKHRUL (MN04)",],
"MEGHALAYA":["EAST KHASI HILLS (MG01)","RI BHOI (MG02)","SHILLONG (MG03)",],
"MIZORAM":["AIZAWL (MZ01)"],
"NAGALAND":["DIMAPUR (NL01)","KOHIMA (NL02)"],
"PUDUCHERRY":["PUDUCHERRY (PO01)"],
"SIKKIM":["GANGTOK (SM01)"],
"TAMIL NADU":["ARIYALUR (TN01)","CHENGALPET (TN02)","CHENNAI (TN03)","COIMBATORE (TN04)","CUDDALORE (TN05)","DHARMAPURI (TN06)","DINDIGUL (TN07)","ERODE (TN08)","KANCHIPURAM (TN09)","KANYAKUMARI/NAGERCOIL (TN10)","KARUR (TN11)","KRISHNAGIRI (TN12)","MADURAI (TN13)","NAMAKKAL (TN14)","PUDUKKOTTAI (TN15)","RAMANATHAPURAM (TN16)","SALEM (TN17)","SIVAGANGA (TN18)","THANJAVUR (TN19)","THIRUVALLUR (TN20)","THOOTHUKUDI (TN21)","TIRUCHIRAPPALLI (TN22)","TIRUNELVELI (TN23)","TIRUPPUR (TN24)","TIRUVANNAMALAI (TN25)","VELLORE (TN26)","VILUPPURAM (TN27)","VIRUDHUNAGAR (TN28)",],
"TRIPURA":["AGARTALA (TA01)","SOUTH TRIPURA (TA02)","WEST TRIPURA (TA03)",],
 "UTTAR PRADESH":["GHAZIABAD (UP16)","GREATER NOIDA (UP19)","MEERUT (UP28)","NOIDA (UP32)",],
 "WEST BENGAL":["ASANSOL (WB01)","BANKURA (WB02)","BURDWAN(BARDHAMAN)"," (WB03)","DARJEELING (WB04)","DURGAPUR (WB05)","HOOGHLY (WB06)","HOWRAH (WB07)","JALPAIGURI (WB08)","KALYANI (WB09)","KOLKATA (WB10)","MURSHIDABAD (WB11)","NORTH 24 PARGANAS (WB12)","PASCHIM MEDINIPUR (WB13)","PURBA MEDINIPUR (WB14)","SILIGURI (WB15)","SOUTH 24 PARGANAS (WB16)","SURI (WB17)",],


    }

    return (
        <div className={`form-body ${step.review ? "reviewPage" : ""}`}>
            <div className='subTitle'>
                <h4>Examination Center details</h4>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center">
                <label htmlFor="qPaperMedium">Question paper medium</label>
                <div className="form-input select-dropdown">
                    <select
                        id="qPaperMedium"
                        name="qPaperMedium"
                        required
                        className={userInfo.qPaperMedium ? "valid" : ""}
                        value={userInfo.qPaperMedium}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.subjects.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref1">Center City Preference 1</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref1"
                        name="statePref1"
                        required
                        className={state.statePref1 ? "valid" : ""}
                        value={state.statePref1}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref1"
                        name="cityPref1"
                        required
                        className={userInfo.cityPref1 ? "valid" : ""}
                        value={userInfo.cityPref1}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref1]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref2">Center City Preference 2</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref2"
                        name="statePref2"
                        required
                        className={state.statePref2 ? "valid" : ""}
                        value={state.statePref2}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref2"
                        name="cityPref2"
                        required
                        className={userInfo.cityPref2 ? "valid" : ""}
                        value={userInfo.cityPref2}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref2]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref3">Center City Preference 3</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref3"
                        name="statePref3"
                        required
                        className={state.statePref3 ? "valid" : ""}
                        value={state.statePref3}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref3"
                        name="cityPref3"
                        required
                        className={userInfo.cityPref3 ? "valid" : ""}
                        value={userInfo.cityPref3}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref3]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="formGroup d-flex col-gap-20 align-items-center doubleSelect">
                <label htmlFor="statePref4">Center City Preference 4</label>
                <div className="form-input select-dropdown state">
                    <select
                        id="statePref4"
                        name="statePref4"
                        required
                        className={state.statePref4 ? "valid" : ""}
                        value={state.statePref4}
                        onChange={(e) => handleState(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues.states.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
                <div className="form-input select-dropdown">
                    <select
                        id="cityPref4"
                        name="cityPref4"
                        required
                        className={userInfo.cityPref4 ? "valid" : ""}
                        value={userInfo.cityPref4}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">Select</option>
                        {dropdownValues[state.statePref4]?.map((obj) => (
                            <option key={uid(obj)} value={obj}>{obj}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
