import React, { useState, useEffect } from 'react';
import VerifyEmail from './VerifyEmail';
import TrackApplication from './components/TrackApplication';
import { useNavigate } from "react-router-dom";
import { UserContext } from "./ContextApi/UserContext";
import FormField from './FormField';
import Payment from './Payment/Payment';
import Loadingbox from './components/Loadingbox';
import Header from './Header';
import Footer from './Footer';

export default function Home() {
    const [userInfo, setuserInfo] = useState({
    });

    const [step, setStep] = useState({
        loading: false,
        trackAppl: true,
        verifyEmail: false,
        currentStep: null,
        form: true,
        review: false,
        payment: false,
    });

    let navigate = useNavigate();

    useEffect(() => {
        let getUserinfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(getUserinfo,"getUserinfo")
        if (getUserinfo) {
            setuserInfo(getUserinfo || null)
        } else {
            navigate("/cuet_nta_mock_simulation_login");
        }
    }, [navigate])

    useEffect(() => {
        if (userInfo.name) {
            console.log(userInfo);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    }, [userInfo])

    return (
        <>
        <Header/>
              <div className='container py-5 cst_container'>

        <div className='mt-5'>
            {step.loading && <Loadingbox />}
            <UserContext.Provider value={{ userInfo, setuserInfo, setStep, step }}>
                {step.verifyEmail && <VerifyEmail />}
                {step.trackAppl && <TrackApplication />}
                {step.currentStep && <FormField />}
                {step.payment && <Payment />}
            </UserContext.Provider>
           
            </div>
            </div>
             <Footer/>
        </>
    )
}
