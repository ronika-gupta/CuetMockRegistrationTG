import React, { useEffect, useState } from 'react';
import Formstatus from './components/Formstatus';
import alertImg from "../Assets/warning.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import "react-client-captcha/dist/index.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const [appNo, setAppNo] = useState("");
    const [pwd, setPwd] = useState("");
    const [pin, setPin] = useState("");
    const [validPin, setValidPin] = useState(true);
    let navigate = useNavigate();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userInfo"))) {
            navigate("/cuet_nta_mock_simulation_applicationform");
        } else {
            loadCaptchaEnginge(6);
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateCaptcha(pin)) {
            setValidPin(true);
            axios.post("http://97.74.94.225:8282/besstMainApi/mockReg/loginCuetMockPreReg",
                {
                    appNo: appNo,
                    pwd: pwd,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Acces-Control-Allow-Origin": "*",
                        Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
                    },
                }).then((result) => {
                    console.log(result);
                    if (result.data.ResultMessage === "FAILURE") {
                        alert("Ivalid Application No and Password")
                    } else {
                        localStorage.setItem("userInfo", JSON.stringify(result.data.Data));
                        navigate("/cuet_nta_mock_simulation_applicationform")
                    }
                })
        } else {
            setValidPin(false);
        }
    }

    return (
        <div className='d-flex col-gap-20'>
            <Formstatus loginScreen={true} />
            <div className="login-form form-card">
                <form onSubmit={(e) => handleLogin(e)}>
                    <div className="alert alert_primary d-flex align-items-center col-gap-20" role="alert">
                        <img src={alertImg} alt="" />
                        Only Registered Candidates Sign in
                    </div>
                    <div className='formGroup d-flex col-gap-20 align-items-center'>
                        <label htmlFor='appNo'>Application Number</label>
                        <div className='form-input'>
                            <input
                                id='appNo'
                                type="text"
                                name='appNo'
                                required
                                value={appNo}
                                onChange={(e) => setAppNo(e.target.value)}
                                placeholder='Enter Application Number'
                            />
                        </div>
                    </div>
                    <div className='formGroup d-flex col-gap-20 align-items-center'>
                        <label htmlFor='pwd'>Password</label>
                        <div className='form-input'>
                            <input
                                id='pwd'
                                type="password"
                                name='pwd'
                                required
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                placeholder='Enter Password'
                            />
                        </div>
                    </div>
                    <div className='formGroup d-flex col-gap-20 align-items-center'>
                        <div className="captcha"><LoadCanvasTemplate /></div>
                    </div>
                    <div className='formGroup d-flex col-gap-20 align-items-center'>
                        <label htmlFor='pin'>Enter Security Pin</label>
                        <div className='form-input'>
                            <input
                                id='pin'
                                type="text"
                                name='pin'
                                required
                                className={validPin ? "" : "Invalid"}
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder='Enter Security Pin'
                            />
                        </div>
                    </div>
                    <button className='brown_btn mt-3'>LOGIN</button>
                    <p>Forgot <Link to="">Password?</Link> or <Link to="">Application No?</Link></p>
                </form>
            </div >
        </div >
    )
}
