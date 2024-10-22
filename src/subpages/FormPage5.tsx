import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';
import {QuestionWithDetails, QuestionWithInput, QuestionWithCheckboxes, QuestionWithoutDetails} from '../components';

// Validation schema for page 2
const page5Schema = Yup.object().shape({
    dentalConcerns: Yup.string().required('Please provide your dental concerns'),
    lastDentalVisit: Yup.string().required('Please provide the date of your last dental visit'),
    lastDentalCleaning: Yup.string().required('Please provide the date of your last dental cleaning'),
    lastXRays: Yup.string().required('Please provide the date of your last X-rays'),
    painRightNow: Yup.string().required('Please indicate if you are experiencing pain'),
    painRightNowDetails: Yup.string().required('Please provide details about your pain'),
    gumSwelling: Yup.string().required('Please indicate if you suffer from gum swelling'),
    gumBleeding: Yup.string().required('Please indicate if your gums bleed when you brush'),
    jawProblems: Yup.string().required('Please indicate if you suffer from jaw problems'),
    dentalProblems: Yup.array(),
    otherDentalProblems: Yup.string().required('Please specify other dental problems'),
    upsettingExperience: Yup.string().required('Please indicate if you have had an upsetting experience'),
    upsettingExperienceDetails: Yup.string().required('Please provide details about your upsetting experience'),
    smileChange: Yup.string().required('Please indicate if you would like to change your smile'),
    smileChangeDetails: Yup.string().required('Please provide details about your smile change'),
    botherDental: Yup.string().required('Please indicate if anything about dental treatment bothers you'),
    botherDentalDetails: Yup.string().required('Please provide details about what bothers you'),
    premedication: Yup.string().required('Please indicate if you need premedication'),
    premedicationDetails: Yup.string().required('Please provide details about premedication'),
    medicationListing: Yup.string().required('Please list any medications you are routinely using'),
});

interface FormPage5Props {
    initialValues: {
        dentalConcerns: string;
        lastDentalVisit: string;
        lastDentalCleaning: string;
        lastXRays: string;
        painRightNow: string;
        painRightNowDetails: string;
        gumSwelling: string;
        gumBleeding: string;
        jawProblems: string;
        dentalProblems: string[];
        otherDentalProblems: string;
        upsettingExperience: string;
        upsettingExperienceDetails: string;
        smileChange: string;
        smileChangeDetails: string;
        botherDental: string;
        botherDentalDetails: string;
        premedication: string;
        premedicationDetails: string;
        medicationListing: string;
    }
    onNext: (values: any) => void;
    onBack: () => void;
}

const FormPage5: React.FC<FormPage5Props> = ({ initialValues, onNext, onBack }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page5Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-12 gap-10 w-full">
                        <div className="col-span-12 grid grid-cols-12 gap-4 items-center">
                            <h1 className="col-span-12 text-center font-semibold">DENTAL HISTORY</h1>
                        </div>

                        <QuestionWithInput
                            question="What concerns you most about your dental health?"
                            name="dentalConcerns"
                        />

                        <QuestionWithInput
                            question="Date of last dental visit."
                            name="lastDentalVisit"
                        />

                        <QuestionWithInput
                            question="Date of last dental cleaning."
                            name="lastDentalCleaning"
                        />

                        <QuestionWithInput
                            question="Date of last dental x-rays."
                            name="lastXRays"
                        />

                        <QuestionWithDetails
                            question="Are you having pain at this time?"
                            name="painRightNow"
                            detailName="painRightNowDetails"
                        />

                        <QuestionWithoutDetails
                            question="Do you suffer from pain and/or swelling of the gums?"
                            name="gumSwelling"
                        />

                        <QuestionWithoutDetails
                            question="Do your gums often bleed when you brush your teeth?"
                            name="gumBleeding"
                        />

                        <QuestionWithoutDetails
                            question="Do you suffer from problems of the jaw?"
                            name="jawProblems"
                        />

                        <QuestionWithCheckboxes
                            question="Have you experienced any of the following?"
                            name="dentalProblems"
                            otherName="otherDentalProblems"
                            options={[
                                'Clicking of the jaw',
                                'Pain in joint, ear or side of face',
                                'Difficulty in opening or closing',
                                'Difficulty in chewing',
                            ]}
                        />

                        <QuestionWithDetails
                            question="Have you ever had an upsetting experience in a dental office?"
                            name="upsettingExperience"
                            detailName="upsettingExperienceDetails"
                        />

                        <QuestionWithDetails
                            question="If you could, what features of your smile would you like to change?"
                            name="smileChange"
                            detailName="smileChangeDetails"
                        />

                        <QuestionWithDetails
                            question="Is there anything else about having dental treatment that bothers you?"
                            name="botherDental"
                            detailName="botherDentalDetails"
                        />

                        <QuestionWithDetails
                            question="Are you required to take any premedication before dental treatment advised by your general physician?"
                            name="premedication"
                            detailName="premedicationDetails"
                        />

                        <QuestionWithInput name='medicationListing' question='Please list any medications you are routinely using.' />


                    </div>

                    <div className="flex justify-between space-x-4 mt-10">
                        <Button onClick={onBack} color="default">
                            Back
                        </Button>

                        <Button type="submit" color="primary">
                            Next
                        </Button>
                    </div>


                </Form>
            )}
        </Formik>
    );
};

export default FormPage5;
