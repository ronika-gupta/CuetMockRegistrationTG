import React from 'react';
import { useState, useEffect } from 'react';
import { DayPicker, MonthPicker, YearPicker } from "react-dropdown-date";
import { Link } from 'react-router-dom';
import info from "../../Assets/images/info.svg";
import showPass from "../../Assets/show-pass.png";
import hidePass from "../../Assets/hide-pass.png";
import { Country, State, City } from "country-state-city";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "react-client-captcha/dist/index.css";

export default function Registerform({ register, setRegister, setBoolean }) {

    let Nationality = ['Indian', 'Overseas Citizen of India(OCI)', 'Foreign(Other than OCI)'];

    let Identity = ["PAN Card", "School ID Card", "Passport", "Voter ID", "Ration Card with photograph", "Bank Passbook with photograph", "Driving License", "Other Valid Govt Identity with photograph"];

    let SecQuestion = ["Which is your fav book ?", "Which is the website your rarely visit ?", "What is the name of your first school ?","What is your neighbour's pet name ?","What is the registration number of your first vehicle"]

    const [dob, setDob] = useState({
        day: "",
        month: "",
        year: ""
    })
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


    const apendDropdown = (getDropdown) => {
        let option = getDropdown.map((value, index) =>
            <option key={index} value={value}>{value}</option>
        )
        return option;
    }

    const [identityErr, setIdentityErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [passShow, setPassShow] = useState(false);

    const identityValidate = () => {
        if (register.identityType) {
            if (register.identityType === "PAN Card") {
                var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
                if (regex.test(register.identificationNo.toUpperCase())) {
                    setIdentityErr(false)
                } else {
                    setIdentityErr(true)
                }
            }
            else if (register.identityType === "Driving License") {
                var dregex = /([A-Z]){2}([0-9]){13}$/;
                if (dregex.test(register.identificationNo.toUpperCase())) {
                    setIdentityErr(false)
                } else {
                    setIdentityErr(true)
                }
            }
        } else {
            setIdentityErr(true)
        }
    }

    const passValidate = () => {
        var regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,13}$/;
        if (regx.test(register.pwd)) {
            setPassErr(false)
        } else {
            setPassErr(true)
        }
    }

    useEffect(() => {
        if (register.dob) {
            let UpdDate = register.dob.getDate();
            let UpdMonth = register.dob.getMonth();
            let UpdYear = register.dob.getFullYear();

            setDob({
                day: UpdDate,
                month: UpdMonth,
                year: UpdYear
            })
        }
    }, [register.dob])

    const handlePermAdd = (val) => {
        if (val) {
            setRegister((prev) => ({
                ...prev,
                permAddrPremiseNoName: register.presAddrPremiseNoName,
                permAddrSubLocality: register.presAddrSubLocality,
                permAddrLocality: register.presAddrLocality,
                permAddrCountry: register.presAddrCountry,
                permAddrState: register.presAddrState,
                permAddrDistrict: register.presAddrDistrict,
                permAddrPincode: register.presAddrPincode,
                sameAdd: val
            }));
        } else {
            setRegister((prev) => ({
                ...prev,
                sameAdd: val
            }));
        }
    }

    const [pin, setPin] = useState("")
    const [validPin, setValidPin] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dobYear,"dobyear")
        setRegister((prev) => ({ ...prev, dob: dobYear }))
        if (validateCaptcha(pin)) {
            setValidPin(true);
            setBoolean((prev) => ({
                ...prev,
                register: false,
                review: true
            }));
        } else {
            setValidPin(false);
        }
    }
   const getStartYear=()=>{
const date= new Date();
let year = date.getFullYear();
console.log(year-15,"year")
return year - 15
   }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-card mb-4'>
                <div className='form-header'>
                    <h5 className='text-center'>Registration Form</h5>
                </div>
                <div className='form-body bb-grey'>
                    <div className='subTitle'>
                        <h4>Personal Details</h4>
                    </div>
                    <div className='form-container'>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='name'>Candidate’s Name <br />(As per class X or Equivalent Certificate)</label>
                            <div className='form-input'>
                                <input
                                    id='name'
                                    type="text"
                                    name='name'
                                    required
                                    placeholder='Enter Candidate’s name'
                                    className={register.name.length ? register.name.length > 1 ? "valid" : "Invalid" : " "}
                                    value={register.name}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, name: e.target.value.replace(/[^A-Za-z]/, " ") }))}
                                />
                            </div>
                            <img src={info} alt="info" />
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='fathersName'>Father’s Name</label>
                            <div className='form-input'>
                                <input
                                    id='fathersName'
                                    type="text"
                                    name='fathersName'
                                    required
                                    placeholder='Enter Father’s Name'
                                    className={register.fathersName.length ? register.fathersName.length > 1 ? "valid" : "Invalid" : ""}
                                    value={register.fathersName}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, fathersName: e.target.value.replace(/[^A-Za-z]/, " ") }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='mothersName'>Mother’s Name</label>
                            <div className='form-input'>
                                <input
                                    id='mothersName'
                                    type="text"
                                    name='mothersName'
                                    required
                                    placeholder='Enter Mother’s Name'
                                    className={register.mothersName.length ? register.mothersName.length > 1 ? "valid" : "Invalid" : ""}
                                    value={register.mothersName}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, mothersName: e.target.value.replace(/[^A-Za-z]/, " ") }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='gname'>Guardian’s Name</label>
                            <div className='form-input'>
                                <input
                                    id='gname'
                                    type="text"
                                    name='gname'
                                    placeholder='Enter Guardian’s Name'
                                    className={register.gname.length ? register.gname.length > 1 ? "valid" : "Invalid" : ""}
                                    value={register.gname}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, gname: e.target.value.replace(/[^A-Za-z]/, " ") }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='dob'>Candidate’s Date<br /> of Birth</label>
                            <div className='form-input d-flex dob col-gap-20'>
                                <DayPicker
                                    defaultValue={'--Day--'}
                                    value={dob.day}
                                    onChange={(day) => dobHandler(day, 'day')}
                                    year={dob.year}
                                    month={dob.month}
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
                                    value={dob.year}
                                    end={getStartYear()}

                                    reverse
                                    onChange={(year) => dobHandler(year, 'year')}
                                    required
                                    classes={dob.year ? "valid" : ""}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='gender'>Gender</label>
                            <div className='form-input select-dropdown'>
                                <select
                                    id='gender'
                                    name='gender'
                                    required
                                    className={register.gender ? "valid" : ""}
                                    value={register.gender}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, gender: e.target.value }))}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='nationality'>Nationality</label>
                            <div className='form-input select-dropdown'>
                                <select
                                    id='nationality'
                                    name='nationality'
                                    required
                                    className={register.nationality ? "valid" : ""}
                                    value={register.nationality}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, nationality: e.target.value }))}
                                >
                                    <option value="">Select </option>
                                    {apendDropdown(Nationality)}
                                </select>
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='identityType'>Identity Type</label>
                            <div className='form-input select-dropdown'>
                                <select
                                    id='identityType'
                                    name='identityType'
                                    required
                                    className={register.identityType ? "valid" : ""}
                                    value={register.identityType}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, identityType: e.target.value }))}
                                >
                                    <option value="">Select</option>
                                    {apendDropdown(Identity)}
                                </select>
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='identificationNo'>Valid Identification<br />Number</label>
                            <div className='form-input'>
                                <input
                                    id='identificationNo'
                                    type="text"
                                    name='identificationNo'
                                    placeholder='Enter Valid Identification number'
                                    required
                                    className={register.identificationNo.length ? identityErr ? "Invalid" : "valid" : ""}
                                    value={register.identificationNo}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, identificationNo: e.target.value }))}
                                    onKeyUp={identityValidate}
                                />
                                {identityErr && <p className='error'>Enter Valid Identification Number</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-body bb-grey'>
                    <div className='subTitle'>
                        <h4>Present Address</h4>
                    </div>
                    <div className='form-container'>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='premisesNo'>Premises No./Name</label>
                            <div className='form-input'>
                                <input
                                    id='premisesNo'
                                    type="text"
                                    name='presAddrPremiseNoName'
                                    placeholder='Enter Premises No./Name'
                                    required
                                    className={register.presAddrPremiseNoName ? "valid" : ""}
                                    value={register.presAddrPremiseNoName}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, presAddrPremiseNoName: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='subLocality'>Sub Locality</label>
                            <div className='form-input'>
                                <input
                                    id='subLocality'
                                    type="text"
                                    name='presAddrSubLocality'
                                    placeholder='Enter Sub Locality'
                                    required
                                    className={register.presAddrSubLocality ? "valid" : ""}
                                    value={register.presAddrSubLocality}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, presAddrSubLocality: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='locality'>Locality</label>
                            <div className='form-input'>
                                <input
                                    id='locality'
                                    type="text"
                                    name='presAddrLocality'
                                    placeholder='Enter Locality'
                                    required
                                    className={register.presAddrLocality ? "valid" : ""}
                                    value={register.presAddrLocality}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, presAddrLocality: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='country'>Country</label>
                            <div className='form-input select-dropdown'>
                                <select
                                    id='country'
                                    name='presAddrCountry'
                                    required
                                    className={register.presAddrCountry ? "valid" : ""}
                                    value={register.presAddrCountry}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, presAddrCountry: e.target.value }))}
                                >
                                    <option value="">Select </option>
                                    {
                                        Country.getAllCountries().map((cou, index) => (
                                            <option key={index} value={cou.isoCode}>{cou.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        {register.presAddrCountry &&
                            <>
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label htmlFor='state'>State</label>
                                    <div className='form-input select-dropdown'>
                                        <select
                                            id='state'
                                            name='presAddrState'
                                            required
                                            className={register.presAddrState ? "valid" : ""}
                                            value={register.presAddrState}
                                            onChange={(e) => setRegister((prev) => ({ ...prev, presAddrState: e.target.value }))}
                                        >
                                            <option value="">Select State</option>
                                            {
                                                State?.getStatesOfCountry(register.presAddrCountry).map((cou, index) => (
                                                    <option key={index} value={cou.isoCode}>{cou.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label htmlFor='district'>District</label>
                                    <div className='form-input select-dropdown'>
                                        <select
                                            id='district'
                                            name='presAddrDistrict'
                                            required
                                            className={register.presAddrDistrict ? "valid" : ""}
                                            value={register.presAddrDistrict}
                                            onChange={(e) => setRegister((prev) => ({ ...prev, presAddrDistrict: e.target.value }))}
                                        >
                                            <option value="">Select District</option>
                                            {
                                                City.getCitiesOfState(
                                                    register.presAddrCountry,
                                                    register.presAddrState
                                                ).map((cou, index) => (
                                                    <option key={index} value={cou.name}>{cou.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </>
                        }
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='pincode'>Pincode</label>
                            <div className='form-input'>
                                <input
                                    id='pincode'
                                    type="text"
                                    name='presAddrPincode'
                                    placeholder='Enter Pincode'
                                    required
                                    className={register.presAddrPincode ? "valid" : ""}
                                    value={register.presAddrPincode}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, presAddrPincode: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='email'>Email Address</label>
                            <div className='form-input'>
                                <input
                                    id='email'
                                    type="text"
                                    name='email'
                                    placeholder='Enter Email Address'
                                    required
                                    className={register.email ? "valid" : ""}
                                    value={register.email}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, email: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='confrimEmail'>Confirm Email <br />Address</label>
                            <div className='form-input'>
                                <input
                                    id='confrimEmail'
                                    type="email"
                                    name='confirmEmail'
                                    placeholder='Confirm Email Address'
                                    required
                                    className={register.confirmEmail ? register.email === register.confirmEmail ? "valid" : "Invalid" : ""}
                                    value={register.confirmEmail}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, confirmEmail: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='mobile'>Mobile Number</label>
                            <div className='form-input'>
                                <input
                                    id='mobile'
                                    type="text"
                                    name='mobNo'
                                    placeholder='Enter Mobile number'
                                    required
                                    className={register.mobNo ? "valid" : ""}
                                    value={register.mobNo}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, mobNo: e.target.value.replace(/[^0-9]/, "") }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='confrimMobile'>Confirm Mobile <br />Number</label>
                            <div className='form-input'>
                                <input
                                    id='confrimMobile'
                                    type="text"
                                    name='confirmMob'
                                    placeholder='Confirm Mobile Number'
                                    required
                                    className={register.confirmMob ? register.mobNo === register.confirmMob ? "valid" : "Invalid" : ""}
                                    value={register.confirmMob}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, confirmMob: e.target.value.replace(/[^0-9]/, "") }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='alterNumber'>Alternate Contact <br />Number</label>
                            <div className='form-input'>
                                <input
                                    id='alterNumber'
                                    type="text"
                                    name='altMobNo'
                                    placeholder='Enter alternate Contact Number'
                                    className={register.altMobNo ? "valid" : ""}
                                    value={register.altMobNo}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, altMobNo: e.target.value.replace(/[^0-9]/, "") }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-body bb-grey'>
                    <div className='d-flex col-gap-20 subTitle'>
                        <h4>Permanent Address</h4>
                        <div className='formGroup d-flex align-items-center checkbox m-0'>
                            <input
                                id='samePresent'
                                type="checkbox"
                                checked={register.sameAdd}
                                onChange={(e) => handlePermAdd(e.target.checked)}
                            />
                            <label htmlFor='samePresent'>Click if same as Present Address</label>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='PpremisesNo'>Premises No./Name</label>
                            <div className='form-input'>
                                <input
                                    id='PpremisesNo'
                                    type="text"
                                    name='permAddrPremiseNoName'
                                    placeholder='Enter Premises No./Name'
                                    required
                                    className={register.permAddrPremiseNoName ? "valid" : ""}
                                    value={register.permAddrPremiseNoName}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, permAddrPremiseNoName: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='PsubLocality'>Sub Locality</label>
                            <div className='form-input'>
                                <input
                                    id='PsubLocality'
                                    type="text"
                                    name='permAddrSubLocality'
                                    placeholder='Enter Sub Locality'
                                    required
                                    className={register.permAddrSubLocality ? "valid" : ""}
                                    value={register.permAddrSubLocality}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, permAddrSubLocality: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='Plocality'>Locality</label>
                            <div className='form-input'>
                                <input
                                    id='Plocality'
                                    type="text"
                                    name='permAddrLocality'
                                    placeholder='Enter Locality'
                                    required
                                    className={register.permAddrLocality ? "valid" : ""}
                                    value={register.permAddrLocality}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, permAddrLocality: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='permAddrCountry'>Country</label>
                            <div className='form-input select-dropdown'>
                                <select
                                    id='permAddrCountry'
                                    name='permAddrCountry'
                                    required
                                    className={register.permAddrCountry ? "valid" : ""}
                                    value={register.permAddrCountry}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, permAddrCountry: e.target.value }))}
                                >
                                    <option value="">Select </option>
                                    {
                                        Country.getAllCountries().map((cou, index) => (
                                            <option key={index} value={cou.isoCode}>{cou.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        {register.permAddrCountry &&
                            <>
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label htmlFor='state'>State</label>
                                    <div className='form-input select-dropdown'>
                                        <select
                                            id='state'
                                            name='permAddrState'
                                            required
                                            className={register.permAddrState ? "valid" : ""}
                                            value={register.permAddrState}
                                            onChange={(e) => setRegister((prev) => ({ ...prev, permAddrState: e.target.value }))}
                                        >
                                            <option value="">Select State</option>
                                            {
                                                State?.getStatesOfCountry(register.permAddrCountry).map((cou, index) => (
                                                    <option key={index} value={cou.isoCode}>{cou.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label htmlFor='district'>District</label>
                                    <div className='form-input select-dropdown'>
                                        <select
                                            id='district'
                                            name='permAddrDistrict'
                                            required
                                            className={register.permAddrDistrict ? "valid" : ""}
                                            value={register.permAddrDistrict}
                                            onChange={(e) => setRegister((prev) => ({ ...prev, permAddrDistrict: e.target.value }))}
                                        >
                                            <option value="">Select District</option>
                                            {
                                                City.getCitiesOfState(
                                                    register.permAddrCountry,
                                                    register.permAddrState
                                                ).map((cou, index) => (
                                                    <option key={index} value={cou.name}>{cou.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </>
                        }
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='Ppincode'>Pincode</label>
                            <div className='form-input'>
                                <input
                                    id='Ppincode'
                                    type="text"
                                    name='permAddrPincode'
                                    placeholder='Enter Pincode'
                                    required
                                    className={register.permAddrPincode ? "valid" : ""}
                                    value={register.permAddrPincode}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, permAddrPincode: e.target.value }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-body bb-grey'>
                    <div className='subTitle'>
                        <h4>Choose Password</h4>
                    </div>
                    {passErr &&
                        <p className='pass-info mb-4'>
                            Password must be 8 - 13 characters, must have one special character, one upper case character, one lower case character one numeric value
                        </p>
                    }
                    <div className='form-container'>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='pass'>Password (Minimum 8 characters)</label>
                            <div className='form-input'>
                                <input
                                    id='pass'
                                    type={passShow ? "text" : "password"}
                                    name='pass'
                                    placeholder='Enter Password'
                                    required
                                    className={register.pwd.length ? passErr ? "Invalid" : "valid" : ""}
                                    value={register.pwd}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, pwd: e.target.value }))}
                                    onKeyUp={passValidate}
                                />
                                <Link className='show_hidePass' to="" onClick={() => setPassShow(passShow ? false : true)}>
                                    <img src={passShow ? hidePass : showPass} alt={passShow ? 'hide password' : 'show password'} width="25px" />
                                </Link>
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='confrimPass'>Confirm  Password</label>
                            <div className='form-input'>
                                <input
                                    id='confrimPass'
                                    type="password"
                                    name='confrimPass'
                                    placeholder='Confirm Password'
                                    required
                                    className={register.confrimPass ? register.pwd === register.confrimPass ? "valid" : "Invalid" : ""}
                                    value={register.confrimPass}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, confrimPass: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='securityQue'>Security Question</label>
                            <div className='form-input select-dropdown'>
                                <select
                                    id='securityQue'
                                    required
                                    className={register.securityQue ? "valid" : ""}
                                    value={register.securityQue}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, securityQue: e.target.value }))}
                                >
                                    <option value="">Select</option>
                                    {apendDropdown(SecQuestion)}
                                </select>
                            </div>
                        </div>
                        <div className='formGroup d-flex col-gap-20 align-items-center'>
                            <label htmlFor='securityAns'>Security Answer</label>
                            <div className='form-input'>
                                <input
                                    id='securityAns'
                                    type="text"
                                    name='secAns'
                                    placeholder='Enter Security Answer'
                                    required
                                    className={register.secAns ? "valid" : ""}
                                    value={register.secAns}
                                    onChange={(e) => setRegister((prev) => ({ ...prev, secAns: e.target.value }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-body bb-grey'>
                    <div className='subTitle'>
                        <h4>Security Pin</h4>
                    </div>
                    <div className='form-container text-center'>
                        <div className='formGroup'>
                            <LoadCanvasTemplate />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor='securityPin'>Enter Security Pin (Click on the text to change)</label>
                            <div className='form-input mt-2'>
                                <input
                                    id='securityPin'
                                    type="text"
                                    placeholder='Enter Security Pin'
                                    required
                                    value={pin}
                                    className={validPin ? "securityPin" : "Invalid securityPin"}
                                    onChange={(e) => setPin(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div >
                <div className='form-footer text-center' >
                    <button
                        type='submit'
                        className='green_btn'
                        disabled={
                            register.email === register.confirmEmail && register.mobNo === register.confirmMob &&
                                register.pwd === register.confrimPass && !passErr && !identityErr ? false : true
                        }
                    >Submit</button>
                </div>
            </div>
        </form>
    )
}