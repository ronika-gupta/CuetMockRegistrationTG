import React, { useContext } from 'react';
import { UserContext } from "../ContextApi/UserContext";
import PDForm from './PDForm'
import PDReview from './PDReview';

export default function PersonalDetail({ dob, dobHandler }) {
    const { step } = useContext(UserContext);

    return (
        <>
            {step.form && <PDForm dob={dob} dobHandler={dobHandler} />}
            {step.review && <PDReview />}
        </>
    )
}
