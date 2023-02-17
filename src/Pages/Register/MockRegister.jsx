import React, { useEffect } from 'react';
import { useState } from 'react';
import Registerform from './Registerform';
import RegisterReview from './RegisterReview';
import Formstatus from '../components/Formstatus';
import { useNavigate } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

export default function MockRegister() {
    const [register, setRegister] = useState({
        name: "",
        fathersName: "",
        mothersName: "",
        gname: "",
        dob: "",
        gender: "",
        nationality: "",
        identityType: "",
        identificationNo: "",
        presAddrPremiseNoName: "",
        presAddrSubLocality: "",
        presAddrLocality: "",
        presAddrCountry: "",
        presAddrState: "",
        presAddrDistrict: "",
        presAddrPincode: "",
        email: "",
        confirmEmail: "",
        mobNo: "",
        confirmMob: "",
        altMobNo: "",
        sameAdd: false,
        permAddrPremiseNoName: "",
        permAddrSubLocality: "",
        permAddrLocality: "",
        permAddrCountry: "",
        permAddrState: "",
        permAddrDistrict: "",
        permAddrPincode: "",
        pwd: "",
        confrimPass: "",
        secQues: "",
        secAns: "",
    })
const[showOTPAlert,setShowOTPAlert]=useState(false)
    const [boolean, setBoolean] = useState({
        register: true,
        review: false
    });

    let navigate = useNavigate();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userInfo"))) {
            navigate("/cuet_nta_mock_simulation_applicationform");
        }
    }, [navigate])

    return (
        <>
        <Header/>
              <div className='container py-5 pt-5 cst_container'>

           {showOTPAlert &&
                <div className="alert alert-custom success alert-dismissible fade show mb-5 mt-5" role="alert">
                   A Verification code has been sent to your Mobile Number  {register.mobNo}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            <div className='d-flex col-gap-20 mt-5'>
                <Formstatus statusActive="1" register={boolean.register} review={boolean.review}/>
                <div className='register-form '>
                    {boolean.register && <Registerform setShowOTPAlert={setShowOTPAlert} register={register} setRegister={setRegister} setBoolean={setBoolean} />}
                    {boolean.review && <RegisterReview setShowOTPAlert={setShowOTPAlert} register={register} setBoolean={setBoolean} />}
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}
