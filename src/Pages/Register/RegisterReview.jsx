import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Loadingbox from '../components/Loadingbox';
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "react-client-captcha/dist/index.css";

export default function RegisterReview({ register, setBoolean,setShowOTPAlert }) {

    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [pin, setPin] = useState("");
    const [validPin, setValidPin] = useState(true);
    const [verifyOtp, setVerifyOtp] = useState("");
    const [validOtp, setValidOtp] = useState(false);

    const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(15);
  const [hours, setHours] = useState(0);
    let navigate = useNavigate();

      useEffect(() => {
        if(showOtp){
    let timer;
      timer = setInterval(() => {
        setSeconds((seconds) =>  seconds-1);
        if (seconds === 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
        //   setHours((hours) => hours + 1);
        setSeconds(0)
          setMinutes(0);
           clearTimeout(timer)
        }
      }, 1000);
    
    
    return () => {
      clearTimeout(timer);
    }}
  });

    const handleReview = (e) => {
      if(window.confirm('Please verify your details. If you want to proceed click ok else click cancel')){
          setLoading(true);
        e.preventDefault();
        
        axios.post("http://97.74.94.225:8282/besstMainApi/mockReg/saveCuetMockPreReg",
            {
                name: register.name,
                fathersName: register.fathersName,
                mothersName: register.mothersName,
                dob: register.dob,
                gender: register.gender,
                nationality: register.nationality,
                identityType: register.identityType,
                identificationNo: register.identificationNo,
                presAddrPincode: register.presAddrPincode,
                email: register.email,
                mobNo: register.mobNo,
                pwd: register.pwd,
                presAddrPremiseNoName: register.presAddrPremiseNoName,
                presAddrSubLocality: register.presAddrPremiseNoName,
                presAddrLocality: register.presAddrLocality,
                presAddrCountry: register.presAddrCountry,
                presAddrState: register.presAddrState,
                presAddrDistrict: register.presAddrDistrict,
                altMobNo: register.altMobNo,
                permAddrPremiseNoName: register.permAddrPremiseNoName,
                permAddrSubLocality: register.permAddrSubLocality,
                permAddrLocality: register.permAddrLocality,
                permAddrCountry: register.permAddrCountry,
                permAddrState: register.permAddrState,
                permAddrDistrict: register.permAddrDistrict,
                permAddrPincode: register.permAddrPincode,
                secQues: register.secQues,
                secAns: register.secAns
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Acces-Control-Allow-Origin": "*",
                    Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
                },
            }).then((result) => {
                setLoading(false);
                console.log(result.data.Data);
                if (result.data.ResultMessage === "FAILURE") {
                    alert("user is already exists")
                } else {
                    setShowOTPAlert(true)
                    setShowOtp(true);
                    setVerifyOtp(result.data.Data.otp);
                    console.log(result.data.Data);
                }
            });
      }else{
                e.preventDefault();

      }
    }

    const handleOtp = (e) => {
        setOtp(e.target.value);
        if (e.target.value === verifyOtp) {
            setValidOtp(true)
        } else {
            setValidOtp(false)
        }
    }

    useEffect(() => {
        if (showOtp) {
            loadCaptchaEnginge(6);
        }
    }, [showOtp]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateCaptcha(pin)) {
            if(validOtp){
 setValidPin(true);
//  
  axios.post("http://97.74.94.225:8282/besstMainApi/mockReg/sendCuetRegSubmitEmail",
            {
               
                email: register.email,
               
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Acces-Control-Allow-Origin": "*",
                    Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
                },
            }).then((result) => {
                setLoading(false);
                console.log(result.data.Data);
                if (result.data.ResultMessage === "FAILURE") {
                    alert("user is already exists")
                } else {
                   alert("Registered Successfully");
            navigate("/cuet_nta_mock_simulation_login");
                }
            });
          
            }
           
        } else {
            setValidPin(false);
        }
    }


    return (
        <>
            {loading && <Loadingbox />}
         
            <div className='reviewPage'>
                <div className='review-card mb-4'>
                    <div className="review-body">
                        <h2 className='review-title'>Review Page - Online Registration Form</h2>
                    </div>
                    <div className="review-body">
                        <h4 className='review-subtitle'>Personal Details</h4>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Candidate’s Name (As per class X or Equivalent Certificate)</strong></p>
                                <p className='flex_50'>{register.name}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Father’s Name</strong></p>
                                <p className='flex_50'>{register.fathersName}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Mother’s Name</strong></p>
                                <p className='flex_50'>{register.mothersName}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Guardian’s Name</strong></p>
                                <p className='flex_50'>{register.gname}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Date of Birth</strong></p>
                                <p className='flex_50'>{new Date(register.dob).toISOString().replace(/T.*/,'').split('-').reverse().join('-')}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Gender</strong></p>
                                <p className='flex_50'>{register.gender.charAt(0).toUpperCase() + register.gender.slice(1)
}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Nationality</strong></p>
                                <p className='flex_50'>{register.nationality}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Identity Type</strong></p>
                                <p className='flex_50'>{register.identityType}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Valid Identification Number</strong></p>
                                <p className='flex_50'>{register.identificationNo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-body">
                        <h4 className='review-subtitle'>Present Address</h4>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Permises No./name</strong></p>
                                <p className='flex_50'>{register.presAddrPremiseNoName}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Sub Locality</strong></p>
                                <p className='flex_50'>{register.presAddrSubLocality}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Locality</strong></p>
                                <p className='flex_50'>{register.presAddrLocality}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Country</strong></p>
                                <p className='flex_50'>{Country.getCountryByCode(register.presAddrCountry).name}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>State</strong></p>
                                <p className='flex_50'>{State.getStateByCodeAndCountry(register.presAddrState, register.presAddrCountry).name}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>District</strong></p>
                                <p className='flex_50'>{register.presAddrDistrict}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Pincode</strong></p>
                                <p className='flex_50'>{register.presAddrPincode}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Mobile Number</strong></p>
                                <p className='flex_50'>{register.mobNo}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Email</strong></p>
                                <p className='flex_50'>{register.email}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Alternative Number</strong></p>
                                <p className='flex_50'>{register.altMobNo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-body">
                        <h4 className='review-subtitle'>Permanent Address</h4>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Permises No./name</strong></p>
                                <p className='flex_50'>{register.permAddrPremiseNoName}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Sub Locality</strong></p>
                                <p className='flex_50'>{register.permAddrSubLocality}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Locality</strong></p>
                                <p className='flex_50'>{register.permAddrLocality}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Country</strong></p>
                                <p className='flex_50'>{register.permAddrCountry}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>State</strong></p>
                                <p className='flex_50'>{register.permAddrState}</p>
                            </div>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>District</strong></p>
                                <p className='flex_50'>{register.permAddrDistrict}</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='flex_50 d-flex'>
                                <p className='flex_50'><strong>Pincode</strong></p>
                                <p className='flex_50'>{register.permAddrPincode}</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-body">
                        <h4 className='review-subtitle'>Security Question</h4>
                        <div className='d-flex col-gap-20'>
                            <p><strong>{register.secQues}</strong></p>
                            <p>{register.secAns}</p>
                        </div>
                    </div>
                    <form onSubmit={(e) => handleReview(e)}>
                        <div className="review-body">
                            <h4 className='review-subtitle'>Particulars Checklist to be verified</h4>
                            <p className='info'>Kindly verify all the particulars listed below carefully and ensure you have filled correct information.</p>
                            <div className='d-flex'>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='myName' className='checked' type="checkbox"  />
                                        <label  htmlFor='myName' className='fontsuccess'>My Name</label>
                                    </div>
                                </div>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='DOB' type="checkbox" />
                                        <label htmlFor='DOB' className='fontsuccess'>Date of Birth</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='fatherName' type="checkbox" />
                                        <label htmlFor='fatherName' className='fontsuccess'>Father's Name</label>
                                    </div>
                                </div>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='motherName' type="checkbox" />
                                        <label htmlFor='motherName' className='fontsuccess'>Mother's Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='email' type="checkbox" />
                                        <label htmlFor='email' className='fontsuccess'>Email Address</label>
                                    </div>
                                </div>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='mobile' type="checkbox" />
                                        <label htmlFor='mobile' className='fontsuccess'>Mobile</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='presAdd' type="checkbox" />
                                        <label htmlFor='presAdd' className='fontsuccess'>Present Address</label>
                                    </div>
                                </div>
                                <div className='flex_50 d-flex'>
                                    <div className='formGroup checkbox'>
                                        <input required id='permAdd' type="checkbox" />
                                        <label htmlFor='permAdd' className='fontsuccess'>Permanent Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className='formGroup checkbox'>
                                <input required id='declaration' type="checkbox" />
                                <label  htmlFor='declaration' className='text-justify fontsuccess'>I hereby decalre that I have filled up this online application after carefully reading the Information Bulletin and fully understanding the provisions/ procedures mentioned therein. I further decalre that all the particulars given by me in this application are true to the best of my knowledge and belief. I agree that my Result may be withheld/ not decalred/ my candidature may automatically stand cancelled. in case it is found at any point of time in future that false informatin haas been furnished in this application. I shall abide by these terms and conditions as well as those laid down in the Information Bulletin. Public Notices and Advisories issued by NTA regarding this exam from time to time.</label>
                            </div>
                        </div>
                        {!showOtp &&
                            <div className="review-body">
                                <div className="d-flex justify-content-between">
                                    <button
                                        type='button'
                                        className='outline_btn'
                                        onClick={() => setBoolean((prev) => ({
                                            ...prev,
                                            register: true,
                                            review: false
                                        }))}
                                    >
                                        Edit registration Details
                                    </button>
                                    <button
                                        type='submit'
                                        className='green_btn'
                                    >
                                        Submit and send OTP to Mobile
                                    </button>
                                </div>
                            </div>
                        }
                    </form>
                    {
                        showOtp &&
                        <div className="review-body">
                            <div className='otp_info'>
                                <p>Please do not refresh this page. <br />Time remaining to enter the verification code: <span>{hours < 10 ? "0" + hours : hours}:
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}</span> </p>
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className='formGroup d-flex col-gap-20 align-items-center review-form'>
                                    <label htmlFor='otp'>Enter  One Time Password(OTP)(Sent on given Mobile No.  {register.mobNo}) </label>
                                    <div className='form-input'>
                                        <input
                                            id='otp'
                                            type="text"
                                            name='otp'
                                            className={otp.length ? validOtp ? "valid" : "Invalid" : ""}
                                            value={otp}
                                            onChange={(e) => handleOtp(e)}
                                            required
                                            placeholder='Enter OTP'
                                        />
                                    </div>
                                </div>
                                <div className='formGroup d-flex col-gap-20 align-items-center review-form'>
                                    <label htmlFor='otp'></label>
                                    <div className='form-input'>
                                        <LoadCanvasTemplate />
                                        <label htmlFor='pin' className='mb-2'>Enter Security Pin</label>
                                        <input
                                            id='pin'
                                            type="text"
                                            name='pin'
                                            required
                                            className={validPin ? "" : "Invalid"}
                                            value={pin}
                                            onChange={(e) => setPin(e.target.value)}
                                            placeholder='Select'
                                        />
                                    </div>
                                </div>
                                <div className='formGroup d-flex col-gap-20 align-items-center review-form'>
                                    <label htmlFor='otp'></label>
                                    <div className='form-input'>
                                        <label></label>
                                        <button
                                            type='submit'
                                            className='green_btn'

                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
