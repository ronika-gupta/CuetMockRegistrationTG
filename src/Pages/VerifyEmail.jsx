import React, { useEffect, useState } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "react-client-captcha/dist/index.css";
import axios from 'axios';
import * as CryptoJS from 'crypto-js';
import Loadingbox from './components/Loadingbox';
import { useContext } from "react";
import { UserContext } from "./ContextApi/UserContext";

export default function VerifyEmail() {

    const { setStep, setuserInfo } = useContext(UserContext);

    const [obj, setObj] = useState({
        email: "",
        confirmEmail: "",
        verifyCode: "",
        pin: "",
        validPin: true,
        sendCode: true,
        loading: false
    })

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const key = "Test@001Best@001";
    const sendtoCode = (EmailId) => {
        axios.post("http://97.74.94.225:8282/besstMainApi/wl/sendOTP",
            {
                EmailId: EmailId,
                OtpType: 3
            }).then((result) => {
                console.log(result);
                if (result.data.ResultMessage === "SUCCESS") {
                    setObj((prev) => ({
                        ...prev,
                        sendCode: false,
                        loading: false
                    }))
                } else {
                    alert(result.data.ResultMessage)
                    setObj((prev) => ({
                        ...prev,
                        loading: false
                    }))
                }
            })
    }

    const verificationCode = (EmailId) => {
        let otp = CryptoJS.AES.encrypt(obj.verifyCode, key).toString();
        axios.post("http://97.74.94.225:8282/besstMainApi/wl/verifyOTP",
            {
                EmailId: EmailId,
                Otp: otp
            }).then((result) => {
                console.log(result);
                if (result.data.ResultMessage === "SUCCESS") {
                    setObj((prev) => ({
                        ...prev,
                        loading: false
                    }))
                    setStep((prev) => ({
                        ...prev,
                        verifyEmail: false,
                        trackAppl: true,
                    }))
                    setuserInfo((prev) => ({
                        ...prev,
                        isEmailIdVerified: true
                    }))
                } else {
                    alert("please enter valid verification code");
                    setObj((prev) => ({
                        ...prev,
                        loading: false
                    }))
                }
            })
    }

    const handleVerify = (e) => {
        e.preventDefault();
        setObj((prev) => ({
            ...prev,
            loading: true
        }))
        let EmailId = CryptoJS.AES.encrypt(obj.email, key).toString();
        if (validateCaptcha(obj.pin)) {
            if (obj.sendCode) {
                sendtoCode(EmailId);
                loadCaptchaEnginge(6);
            } else {
                verificationCode(EmailId);
                loadCaptchaEnginge(6);
            }
        } else {
            setObj((prev) => ({
                ...prev,
                validPin: false,
                loading: false
            }))
        }
    }

    return (
        <>
            {obj.loading && <Loadingbox />}
            <div className='verifyEmail mt-5'>
                <div className='form-card mb-4'>
                    <div className='form-header'>
                        <h5>Email ID</h5>
                    </div>
                    <form onSubmit={(e) => handleVerify(e)}>
                        <div className='form-body bb-grey'>
                            <div className='subTitle'>
                                <h4>Contact Details</h4>
                            </div>
                            <div className='form-container'>
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label htmlFor='name'>Candidate’s Email ID</label>
                                    <div className='form-input'>
                                        <input
                                            id='fname'
                                            type="email"
                                            name='fname'
                                            required
                                            placeholder='Enter email id'
                                            value={obj.email}
                                            onChange={(e) => setObj((prev) => ({ ...prev, email: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label htmlFor='confirmEmail'>Confrm Email ID</label>
                                    <div className='form-input'>
                                        <input
                                            id='confirmEmail'
                                            type="email"
                                            name='confirmEmail'
                                            required
                                            className={obj.confirmEmail.length ? obj.email === obj.confirmEmail ? "valid" : "Invalid" : ""}
                                            placeholder='Enter email id'
                                            value={obj.confirmEmail}
                                            onChange={(e) => setObj((prev) => ({ ...prev, confirmEmail: e.target.value }))}
                                        />
                                    </div>
                                </div>
                                {!obj.sendCode && (
                                    <div className='formGroup d-flex col-gap-20 align-items-center'>
                                        <label htmlFor='verifyCode'>Verification Code</label>
                                        <div className='form-input'>
                                            <input
                                                id='verifyCode'
                                                type="text"
                                                name='verifyCode'
                                                required
                                                placeholder='Enter Code'
                                                value={obj.verifyCode}
                                                onChange={(e) => setObj((prev) => ({ ...prev, verifyCode: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className='formGroup d-flex col-gap-20 align-items-center'>
                                    <label></label>
                                    <div className='form-input'>
                                        <div className="captcha mb-3"><LoadCanvasTemplate /></div>
                                        <label htmlFor='pin' className='mb-2'>Enter Security Pin (Click on the text to change)</label>
                                        <input
                                            id='pin'
                                            type="text"
                                            name='pin'
                                            required
                                            placeholder='Enter PIN Code'
                                            className={obj.validPin ? "" : "Invalid"}
                                            value={obj.pin}
                                            onChange={(e) => setObj((prev) => ({ ...prev, pin: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-footer justify-content-center d-flex col-gap-20'>
                            <button
                                type='button'
                                className='outline_btn'
                                onClick={() => setStep((prev) => ({
                                    ...prev,
                                    verifyEmail: false,
                                    trackAppl: true
                                }))}
                            >
                                Back
                            </button>
                            <button
                                type='submit'
                                className='green_btn'
                                disabled={
                                    obj.email === obj.confirmEmail ? false : true
                                }
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
