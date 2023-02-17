import React, { useRef, useContext } from 'react';
import { UserContext } from "../ContextApi/UserContext";
import FullReview from './FullReview';

export default function UploadDocsForm() {
    const { userInfo, setuserInfo, step } = useContext(UserContext);

    function readImage(e, func, obj) {
        console.log(e.target.value);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            console.log(e);
            let binaryData = e.target.result;
            let base64String = window.btoa(binaryData);
            func((prev) => ({
                ...prev,
                [obj]: base64String
            }));
        };

        let image = reader.readAsBinaryString(file);
        return image;
    }

    const upload1 = useRef();
    const upload2 = useRef();

    const removeImg = (myRef, obj) => {
        setuserInfo((prev) => ({
            ...prev,
            [obj]: ""
        }))
        myRef.current.value = "";
    }

    return (
        <>
            {step.form &&
                <>
                    <div className="form-body">
                        <p className='red mb-4'>Instruction for Uploading Image/Photo of Document, Certificate and Signature-</p>
                        <p className='red'>
                            1. Photo and Signature are required in .jpg or.jpeg image format<br />
                            2. File size of photo must be within 10kb to 200kb limit <br />
                            3. File size of signature must be within 4kb to 30kb limit <br />
                            4. Document/Certificate must be in .pdf format and within 50kb to 300kb limit.
                        </p>
                    </div>
                    <div className="form-body">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <td>
                                        Candidate’s Photograph (with 80% face without mask) <br />
                                        <span>Accepted formats .jpeg, .jpg</span>
                                    </td>
                                    <td>
                                        <input
                                            type="file"
                                            id='choose-file'
                                            name='usrPicStr'
                                            accept="image/jpeg"
                                            required={userInfo.usrPicStr ? false : true}
                                            ref={upload1}
                                            onChange={event => {
                                                readImage(event, setuserInfo, "usrPicStr");
                                            }}
                                        />
                                        <label htmlFor="choose-file">Select File</label>
                                        {userInfo.usrPicStr &&
                                            <>
                                                <img className='mx-3' src={`data:image/jpeg;base64,${userInfo.usrPicStr}`} alt="" width="150" />
                                                <button
                                                    className="remove-btn"
                                                    onClick={() => removeImg(upload1, "usrPicStr")}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Candidate’s Signature    <br />
                                        <span>Accepted formats .jpeg, .jpg</span>
                                    </td>
                                    <td>
                                        <input
                                            type="file"
                                            id='choose_file'
                                            name='usrSignStr'
                                            accept="image/jpeg"
                                            required={userInfo.usrSignStr ? false : true}
                                            ref={upload2}
                                            onChange={event => {
                                                readImage(event, setuserInfo, "usrSignStr");
                                            }}
                                        />
                                        <label htmlFor="choose_file">Select File</label>
                                        {userInfo.usrSignStr &&
                                            <>
                                                <img className='mx-3' src={`data:image/jpeg;base64,${userInfo.usrSignStr}`} alt="uploaded" width="150" />
                                                <button
                                                    className="remove-btn"
                                                    onClick={() => removeImg(upload2, "usrSignStr")}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>}

            {step.review && <FullReview />}
        </>
    )
}
