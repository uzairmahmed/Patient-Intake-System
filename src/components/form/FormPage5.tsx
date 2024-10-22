import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';
import QuestionWithDetails from '../QuestionWithDetails';
import QuestionWithInput from '../QuestionWithInput';
import QuestionWithText from '../QuestionWithText';
import QuestionWithCheckboxes from '../QuestionWithCheckboxes';
import QuestionWithoutDetails from '../QuestionWithoutDetails';

// Validation schema for page 2
const page5Schema = Yup.object().shape({
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
});

interface FormPage5Props {
    initialValues: {
        phone: string;
        address: string;
    };
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
                            name="lastCheckup"
                        />

                        <QuestionWithInput
                            question="Date of last dental visit."
                            name="lastVisit"
                        />

                        <QuestionWithInput
                            question="Date of last dental cleaning."
                            name="lastCleaning"
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
                            name="gumBleed"
                        />

                        <QuestionWithoutDetails
                            question="Do you suffer from problems of the jaw?"
                            name="jawProblems"
                        />

                        <QuestionWithCheckboxes
                            question="Have you experienced any of the following?"
                            name="dentalProblems"
                            otherName="otherAllergies"
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
