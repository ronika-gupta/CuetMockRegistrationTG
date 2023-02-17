import React, { useEffect } from 'react';
import successImg from "../../Assets/Tick.png"
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function PaymentSuccess() {

    useEffect(()=>{
         Swal.fire({
  title: 'Congratulations !!!',
  text: 'You have successfully completed simulation of Registration process as per NTA on the platform of BESST.',
  imageUrl: 'https://i.pinimg.com/originals/d3/c6/8a/d3c68aeb6f9ead3e57f80f12d12304b8.gif',
  imageWidth: 230,
  imageHeight: 200,
  imageAlt: 'Custom image',
  background:'#E6E6E6',
  confirmButtonColor: 'green',
  cancelButtonColor: '#d33',
},[])
    })
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card p-5" style={{ width: "500px" }}>
                <img className='mx-auto' src={successImg} width="100" alt="" />
                <h4 className='text-danger mt-4 text-center'>Payment Success</h4>

                <div className="d-flex flex-wrap mt-4 row-gap-20">
                    <p className='flex_70'><b>Payment Status</b></p>
                    <p>Success</p>

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
