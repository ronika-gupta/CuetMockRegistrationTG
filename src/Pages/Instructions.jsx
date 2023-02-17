import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import baseUrl from './components/baseurl';
import { EncryptText } from './components/Encrypt/CryptoEncryption';
import Footer from './Footer';
import Header from './Header';
import DownloadPDF from './components/download'
export default function Instructions() {
    const [authUser,setAuthUser]=useState(false)
    let navigate = useNavigate();
        const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const res = searchParams.get("email");
    console.log(res,"res")

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/cuet_nta_mock_registration");
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userInfo"))) {
            navigate("/cuet_nta_mock_simulation_applicationform");
        }
    }, [navigate])

      useEffect(() => {
        console.log(res,'===============')
     axios
      .post(
        baseUrl() + "/mockReg/cuetMockRegUsrValidate",
        {
            "email":EncryptText(res)
        },
        {
          headers: {
            "Acces-Control-Allow-Origin": "*",
            Client_ID: "MVOZ7rblFHsvdzk25vsQpQ==",
            Authorization: `${Cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response,"response=====")
        if (response.status === 200) {
            
setAuthUser(true)
        //  navigate("/cuet_nta_mock_simulation_instruction")
        }
        else{
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Unauthorized User!',
})    
 setAuthUser(false)
        }
      }).catch(error=>console.log(error,"ERRor"));
  }, []);

  const handleDownload=(opt)=>{
    console.log("otp",opt)
     DownloadPDF.downloadPage(
      "Credit Card – Terms and Condition",
      opt
    ).then((res) => {});
  }
    return (
        <>
        { authUser &&
        <div className="">
            <Header/>
                  <div className='container py-5  cst_container'>

            <form onSubmit={handleSubmit} className="instruct pt-5">
                <p role="heading" aria-level="1"><b>Instructions and Procedure for online submission of Application Form</b></p>
                <div className="btn-container" id='pdfEdge'>
                    <button style={{textDecoration:"none",zIndex:999}} className="orange-btn" onClick={()=>handleDownload("9")} type="button">Download Information Bulletin</button>
                </div>
                <ol>
                    <li><p>Candidates must read carefully the instructions ( including how to fill up the Application form online) given in
                        the
                        information bulletin available on the NTA website. Candidates not comply with the instructions shall be
                        summarily
                        disqualified.</p></li>
                    <li><p>Candidates can apply for CUET(UG)-2023 through the online mode only. The Application form in any other mode will
                        not
                        be accepted.</p></li>
                    <li><p>Submission of Application form should be made by the candidate online through the NTA website:
                        <a href="https://cuet.samarth.ac.in/" title="cuet samarth website">https://cuet.samarth.ac.in/</a></p>
                    </li>
                    <li><p>Instruction for filling Online Application Form.</p>
                        <ul className="ul-disc-list">
                            <li><p>Download Information Bulletin and Replica of Application Form. Read these carefully to ensure your
                                eligibility.</p></li>
                            <li><p>Follow the steps given below to Apply Online</p>
                                <p className="mb-0"><b>Step 1: Registration form:</b></p>
                                <p className="mb-20">Register for the Online Application form and note down the system-generated Application Number. The
                                    Candidate should
                                    provide the required details while filling the Online Application Form and is also required to create
                                    PASSWORD and
                                    choose Security Question and enter his/her Answer . After successful submission of the personal details,
                                    an Application
                                    Number will be generated and it will be used to complete the remaining Steps of the Application Form and
                                    will also be
                                    required for future reference/correspondence . For subsequent logins, the candidate will be able to
                                    login directly with
                                    the respective system-generated Application Number and created Password.</p>
                                <p className="mb-0"><b>Step 2: Application Form:</b></p>
                                <p className="mb-20">The Candidates can log in with the system-generated Application Number and pre-created Password for
                                    completing the
                                    Application Form including filling up personal details, providing the details of educational
                                    qualification,
                                    university/programme selection, test paper details , choosing the Examination Cities and uploading the
                                    images and
                                    documents ( if any)</p>
                                <p><b>Upload scanned Images of Candidate’s Photograph, Signature, Class X/ Equivalent Certificate and
                                    Category Certificate (
                                    if applicable), and PwBD Certificate ( wherever applicable)</b></p>
                            </li>
                            <li><p><b>The recent photograph should be either in colour or black & white with 80% face ( without mask)visible
                                including ears
                                against a white background.</b></p></li>
                            <li><p>Scanned photograph and signature should be in JPG/JPEG format ( clearly legible)</p></li>
                            <li><p>The size of the scanned photograph should be between <b>10 kb to 200 kb</b> ( clearly legible)</p></li>
                            <li><p>The size of the scanned signature should be between <b>4 kb to 30 kb</b> ( clearly legible)</p></li>
                            <li><p>The size of the scanned copy of the category certificate (SC/ST/OBC/EWS etc) should be in pdf between <b>50
                                kb to 300 kb</b>
                                ( clearly legible)</p></li>
                            <li><p className="mb-20">The size of the scanned copy of the PwBD certificate should be in pdf between <b>50 kb to 300 kb</b> (
                                clearly legible)</p>
                                <p className="mb-20"><b>Note:</b> The Candidate must upload only his/her own photograph, signature, and certificate(s) as
                                    mentioned above ( and
                                    not of anybody else) in a correct/ proper manner. In case it is found at any time in the future that the
                                    Candidate has
                                    used/uploaded the photograph, signature and certificate(s) of someone else in his/her Application Form/
                                    Admit Card, or
                                    <b>he/she tampered his/her Admit Card/ Result/ Score card, these acts of the candidates shall be treated
                                        as Unfair Means
                                        (UFM) Practices and he/she shall be proceeded with the actions as contemplated under the provisions
                                        of the Information
                                        Bulletin relating to Unfair Means Practices.</b>
                                </p>
                                <p className="mb-20"><b>Please check your photograph and signature before submission of the Application Form. In case the
                                    photograph or
                                    signature is blurred or not visible to identify the identity of the candidate then, the application
                                    will be rejected.</b></p>
                                <p><b>Step 3: Fee Payment:</b></p>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td rowspan="4" className="v-align-mid">Slot: Timing of Examination</td>
                                            <td colspan="5" className="text-center">Fees Payable by candidates (CUET(UG)-2023) in INR @</td>
                                        </tr>
                                        <tr>
                                            <td rowspan="4" className="v-align-mid">No. of Tests/ Subjects</td>
                                            <td colspan="4">UG/UI and part time Programmes</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">Centres in India</td>
                                            <td rowspan="2" className="v-align-mid">Centres Outside India</td>
                                        </tr>
                                        <tr>
                                            <td>General ( unreserved)</td>
                                            <td>OBC (NCL*/EWS**)</td>
                                            <td>SC/ST/PwBD/Third gender</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Slot- 1 09.00 a.m. to 12.15 p.m.</td>
                                            <td>Upto 4</td>
                                            <td>650/-</td>
                                            <td>600/-</td>
                                            <td>550/-</td>
                                            <td>3000/-</td>
                                        </tr>
                                        <tr>
                                            <td>Slot- 2 03.00 p.m. to 06.45 p.m.</td>
                                            <td>Upto 5</td>
                                            <td>650/-</td>
                                            <td>550/-</td>
                                            <td>550/-</td>
                                            <td>3000/-</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><b>*NCL : Non Creamy Layer</b></p>
                                <p className="mb-20"><b>**EWS : Economically Weaker section</b></p>
                                <p><b>@ Processing charges and Goods & Services Taxes ( GST) are to be paid by the candidate, as
                                    applicable.</b></p>
                                <p>After completing Step 1 and step 2, the candidates must pay the requisite examination fee. The fee can be
                                    submitted only
                                    online Net Banking, Credit card, Debit Card, UPI, or PayTm Services. Processing Charges and GST as
                                    applicable are
                                    chargeable to the candidate ( in addition to the examination fee) by the concerned bank/ payment gateway
                                    Integrator.</p>
                                <p>The confirmation page of the online Application Form will be generated only after successful payment by
                                    the candidate.
                                    In case the Confirmation page is not generated after payment of fee, then the candidate may have to
                                    approach the
                                    concerned Bank/ Payment Gateway ( in the helpline number and e-mail given in the Information Bulletin)
                                    for ensuring the
                                    successful payment or for obtaining the refund of duplicate/multiple payments</p>
                            </li>
                        </ul>
                    </li>

                    <li><p>Candidates shall ensure that the information entered by them in their respective online Application Form is
                        Correct.</p></li>
                    <li><p><b>All candidates must ensure that they have provided the correct e-mail address and mobile number.</b></p></li>
                    <li><p>Information provided by the candidates in their respective online application forms, like the Name of the
                        Candidate,
                        Contact details, Address Details, Category, Gender, PwBD Status, Educational Qualification Details, Date of
                        Birth,
                        Choice of Exam cities, etc will be treated as final. <b>Any request for change in such particulars will not be
                            considered
                            by NTA under any circumstances.</b></p></li>
                    <li><p>NTA does not edit/modify/alter any information entered by the candidates after completion of the application
                        process
                        under any circumstances. Any request for change in information thereafter will not be entertained. Therefore
                        candidates
                        are advised to exercise utmost caution before filling up the correct details in the Application Form.</p></li>
                    <li><p>NTA disclaims any liability that may be arise to a candidate(s) due to incorrect information provided by him/her
                        in
                        his/her online Application Form.</p></li>
                    <li><p>Candidates must ensure that their email address and mobile number to be registered in their online Application
                        Form
                        are their own, as relevant /important information/communication will be sent by NTA through e-mail on the
                        registered
                        E-mail Address and through SMS on the registered mobile number only. NTA shall not be responsible for any
                        non-communication/miscommunication with a candidate in the E-mail Address or mobile Number given by him/her
                        other than
                        his/her own.</p></li>
                    <li><p>Candidates are advised to visit the NTA website ( <a href="www.nta.ac.in" title="nta website">www.nta.ac.in</a>)
                        and check their Emails regularly for the latest
                        updates</p></li>
                    <li><p>Candidates shall appear at their own cost at the Examination Centre on the Date, Shift and Time indicated on
                        their
                        Admit card issued by the NTA in due course through its Website.</p></li>
                    <li><p className="mb-0">Important Instruction about PASSWORD</p>
                        <ol className="ol-small-roman mb-20">
                            <li>During online form filling, the candidate will be required to choose PASSWORD and Security Question and
                                its Answer.
                                The candidate is advised to record / remember their password for all future logins</li>
                            <li>For Subsequent logins, the candidate will be able to login directly with their respective system
                                generated
                                Application Number and the chosen Password.</li>
                            <li>The candidate is advised not to disclose or share their password with anybody .Neither NTA nor SAMARTH
                                will be
                                responsible of or the violation or misuse of the password of a candidate.</li>
                            <li>Candidates can change his/her passwords after login if desired .</li>
                            <li>Candidates should remember to log out at the end of the session so that the particulars of the candidate
                                cannot be
                                tempered with or modified by unauthorized persons.</li>
                        </ol>
                        <p className="mb-0">The Password must be as per the following Password policy.</p>
                        <ol className="ol-small-roman mb-20">
                            <li>Password must be <b>8 to 13</b> characters long</li>
                            <li>Password must have at least <b>one Uppercase</b> alphabet.</li>
                            <li>Password must have at least <b>one Lower case</b> alphabet.</li>
                            <li>Password must have at least <b>one numeric value.</b></li>
                            <li>Password must have at least <b>one special character e.g. !@#$%^&*-.</b></li>
                        </ol>
                        <p className="mb-0">How to reset your Password: The following options are available to reset Password.</p>
                        <ol className="ol-small-roman">
                            <li>Using Security Question and its Answer you have chosen during Form filling.</li>
                            <li>Using a verification code sent via text message (SMS) to your Registered Mobile No.</li>
                            <li>Using a reset link sent via Email to your Registered Email address.</li>
                        </ol>
                    </li>
                </ol>
                <div className="formGroup checkbox">
                    <input
                        id="declaration"
                        type="checkbox"
                        required
                    />
                    <label htmlFor="declaration">
                        <b>I have downloaded the Information Bulletin of CUET (UG)- 2023, read and understood all the Instructions
                            therein as well
                            as those mentioned above and fill up the online Application Form for the CUET ( UG)- 2023 accordingly .</b>
                    </label>
                </div>
                <div className="btn-container">
                    <button className="green_btn" type="subbmit">Click here to Proceed</button>
                </div>
            </form>
        </div>
                    <Footer/>

        </div>
                                    }
                                    </>
    )
}
