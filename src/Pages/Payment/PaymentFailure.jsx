import React from 'react';
import failImg from "../../Assets/Fail.png"

export default function PaymentFailure() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card p-5" style={{ width: "500px" }}>
                <img className='mx-auto' src={failImg} width="100" alt="" />
                <h4 className='text-danger mt-4 text-center'>Payment Failed</h4>

                <div className="d-flex flex-wrap mt-4 row-gap-20">
                    <p className='flex_70'><b>Payment Status</b></p>
                    <p>Failed</p>

                    <p className='flex_70'><b>Transaction Id</b></p>
                    <p>123456789</p>

                    <p className='flex_70'><b>Order Id</b></p>
                    <p>123456789</p>

                    <p className='flex_70'><b>Order Amount</b></p>
                    <p>₹ 1300</p>
                </div>
            </div>
        </div>
    )
}