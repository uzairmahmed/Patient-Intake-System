import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@nextui-org/react';
import { QuestionWithDetails, QuestionWithInput, QuestionWithCheckboxes, QuestionWithoutDetails } from '../components';
import { Page5Values, page5Schema } from '../interfaces';

interface FormPage5Props {
    initialValues: Page5Values;
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

                        <QuestionWithDetails
                            question="Are you currently experiencing any pain or discomfort?"
                            name="painRightNow"
                            detailName="painRightNowDetails"
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

                        <QuestionWithoutDetails
                            question="Do your gums bleed when brushing?"
                            name="gumBleeding"
                        />
                        <QuestionWithoutDetails
                            question="Do you experience pain or swelling in the gums?"
                            name="gumSwelling"
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
                            question="Have you ever had an upsetting experience at a dental office?"
                            name="upsettingExperience"
                            detailName="upsettingExperienceDetails"
                        />

                        <QuestionWithDetails
                            question="Is there anything that bothers you about receiving dental treatment?"
                            name="botherDental"
                            detailName="botherDentalDetails"
                        />
                        <QuestionWithDetails
                            question="What features of your smile would you like to change, if any?"
                            name="smileChange"
                            detailName="smileChangeDetails"
                        />


                        <QuestionWithDetails
                            question="Have you been advised to take premedication before dental treatment?"
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
