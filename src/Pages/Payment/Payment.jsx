import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { UserContext } from "../ContextApi/UserContext";
import {DecryptText} from "../../Pages/components/Encrypt/CryptoEncryption"

export default function Payment() {
    const { userInfo, setuserInfo, setStep } = useContext(UserContext);

    const handlePayment = (e) => {
        e.preventDefault();
        setuserInfo((prev) => ({
            ...prev,
            orderAmt: 1300,
            isProceedToPymnt: true
        }))
        setStep((p) => ({ ...p, loading: true }))
        if (userInfo.orderAmt) {
            axios.post("http://97.74.94.225:8282/besstMainApi/mockReg/saveCuetMockPreReg",
                userInfo,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
                    },
                }).then((result) => {
                    console.log(result);
                    if (result.data.ResultMessage === "SUCCESS") {
                   
                        setuserInfo((prev) => ({
                            ...prev,
                            "mid": result.data.Data.mid,
                            "orderId": result.data.Data.orderId,
                            "txnToken": result.data.Data.txnToken,
                            "checksum": result.data.Data.checksum
                        }))
                         const decryptMid = DecryptText(result.data.Data.mid);

          window.open(`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${decryptMid}&orderId=${result.data.Data.orderId}&txnToken=${result.data.Data.txnToken}&flow=checkout&mode=webview`, "_self");
                        setStep((prev) => ({
                            ...prev,
                            loading: false,
                            trackAppl: true,
                            payment: false,
                        }))
                    }
                });
        }
    }
    const handlepaymentModal=(e)=>{
        e.preventDefault()
        Swal.fire({
  icon: '',
  title: '',
  text:  'This payment gateway button is a dummy one. Click on Paytm gateway for further simulation process. !',
})
 
    }

    return (
        <div className='form-card mb-4 application_form payment'>
            <div className="form-header">
                <h5>Registration Payment</h5>
            </div>
            {userInfo.name &&
                <form onSubmit={(e) => handlePayment(e)} className="form-body">
                    <div className="d-flex flex-wrap row-gap-20">
                        <p className="flex_70">Candidate’s Name (As per class X or Equivalent Certificate)</p>
                        <p className="flex_30">{userInfo.name}</p>

                        <p className="flex_70">Gender</p>
                        <p className="flex_30">{userInfo.gender}</p>

                        <p className="flex_70">Category</p>
                        <p className="flex_30">{userInfo.category}</p>

                        <p className="flex_70">PwBD Category</p>
                        <p className="flex_30">{userInfo.isPwBDBenchmark}</p>

                        <p className="flex_70">Opted for Exam Centre(s) outside India</p>
                        <p className="flex_30">{userInfo.cuetPreRegXAndXIIDtlsBeanList[0].qualifyingExamCountry === "India" ? "No" : "Yes"}</p>

                        <p className="flex_70">
                            Fee for Slot 1 paper(s)
                            ({userInfo.slot1LangSubj + ", " + userInfo.slot1DomainSubj1 + ", " + userInfo.slot1DomainSubj2 + ", " + userInfo.slot1IsGenSubj})
                        </p>
                        <p className="flex_30">₹ 650</p>

                        <p className="flex_70">
                            Fee for Slot 2 paper(s)
                            ({userInfo.slot2LangSubj + ", " + userInfo.slot2DomainSubj3 + ", " + userInfo.slot2DomainSubj4 + ", " + userInfo.slot2DomainSubj5 + ", " + userInfo.slot2LangSubjAlternative})
                        </p>
                        <p className="flex_30">₹ 650</p>

                        <p className="flex_70">Total Amount To be Paid</p>
                        <p className="flex_30">₹ 1300</p>
                    </div>

                    <hr />

                    <p className='mb-3'>Processing charges and Goods & services taxes (GST) are to be paid by the candidates, as aaplicable.</p>
                    <p className='mb-3'>If your payment is deducted please check your payment status in My payments section before initiating second transaction.</p>
                    <p>no modifications will be allowed after completion of payment process.</p>

                    <hr />

                    <div className="d-flex justify-content-center col-gap-20 mb-5">
                        <button onClick={(e)=>handlepaymentModal(e)} className='brown_btn'>State bank of india(SBI)</button>
                        <button onClick={(e)=>handlepaymentModal(e)} className='brown_btn'>Canara Bank</button>
                        <button onClick={(e)=>handlepaymentModal(e)} className='brown_btn'>ICICI Bank</button>
                        <button type='submit' className='brown_btn'>Paytm</button>
                    </div>

                    <button
                        type='button'
                        className='outline_btn mb-3'
                        onClick={() => setStep((prev) => ({
                            ...prev,
                            trackAppl: true,
                            payment: false,
                        }))}
                    >
                        Back to Dashboard
                    </button>
                </form>
            }
        </div>
    )
}
