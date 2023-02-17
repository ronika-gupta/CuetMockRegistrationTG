import React, { useContext } from 'react';
import { UserContext } from "../ContextApi/UserContext";
import EDForm from './EDForm';
import EDReview from './EDReview';

export default function EducationDetail() {
    const { step } = useContext(UserContext);

    return (
        <>
            {step.form && <EDForm />}
            {step.review && <EDReview />}
        </>
    )
}
