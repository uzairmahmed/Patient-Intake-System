import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@nextui-org/react';
import * as Yup from 'yup';
import { QuestionWithDetails, QuestionWithInput, QuestionWithCheckboxes, QuestionWithoutDetails } from '../components';

// Validation schema for page 2
const page4Schema = Yup.object().shape({
    lastMedicalCheckup: Yup.string(),
    medicationListing: Yup.string(),
    smoking: Yup.string(),
    alcohol: Yup.string(),
    seriousInjury: Yup.string(),
    seriousInjuryDetails: Yup.string(),
    allergies: Yup.array(),
    otherAllergies: Yup.string(),
    devices: Yup.array(),
    otherDevices: Yup.string(),
    conditions: Yup.array(),
    otherConditions: Yup.string(),
    conditionsExplanation: Yup.string(),
});

interface FormPage4Props {
    initialValues: {
        lastMedicalCheckup: string;
        medicationListing: string;
        smoking: string;
        alcohol: string;
        seriousInjury: string;
        seriousInjuryDetails: string;
        allergies: string[];
        otherAllergies: string;
        devices: string[];
        otherDevices: string;
        conditions: string[];
        otherConditions: string;
        conditionsExplanation: string;
    };
    onNext: (values: any) => void;
    onBack: () => void;
}

const FormPage4: React.FC<FormPage4Props> = ({ initialValues, onNext, onBack }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page4Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-12 gap-10 w-full">
                        <div className="col-span-12 grid grid-cols-12 gap-4 items-center">
                            <h1 className="col-span-12 text-center font-semibold">MEDICAL HISTORY</h1>
                        </div>

                        <QuestionWithInput
                            question="When was your last medical checkup?"
                            name="lastMedicalCheckup"
                        />

                        <QuestionWithInput name='medicationListing' question='Are you currently taking any prescribed medications?' />

                        <QuestionWithoutDetails
                            question="Do you smoke or chew tobacco products?"
                            name="smoking"
                        />

                        <QuestionWithoutDetails
                            question="Do you consume alcohol or use recreational drugs?"
                            name="alcohol"
                        />

                        <QuestionWithDetails
                            question="Have you had a serious injury in the past?"
                            name="seriousInjury"
                            detailName="seriousInjuryDetails"
                        />

                        <QuestionWithCheckboxes
                            question="Are you allergic to or have reacted adversely to any of the following? (Select All That Apply)"
                            name="allergies"
                            otherName="otherAllergies"
                            options={[
                                'Penicillin or other Antibiotics',
                                'Local Anesthetics (e.g., Novocaine)',
                                'Latex or Rubber Materials',
                                'Aspirin',
                                'Codeine or Other Narcotics',
                                'Sulfa Drugs',
                                'Ibuprofen or other NSAIDs',
                                'Barbiturates, Sedatives, or Sleeping Pills',
                                'Acrylic',
                                'Fluoride',
                                'Adhesives ',
                            ]}
                        />

                        <QuestionWithCheckboxes
                            question="Do you use any medical devices or require special medical care?"
                            name="devices"
                            otherName="otherDevices"
                            options={[
                                'Pacemaker',
                                'Heart Valve Replacement',
                                'Prosthetic Joints',
                                'Insulin Pump',
                                'Oxygen Therapy',
                                'CPAP Machine (for sleep apnea)',
                                'Dental Implant',
                            ]}
                        />

                        <QuestionWithCheckboxes
                            question="Do you have or have you had any of the following conditions? (Select All That Apply)"
                            name="conditions"
                            otherName="otherConditions"
                            options={[
                                'High Blood Pressure',
                                'Diabetes',
                                'Allergies or Hives',
                                'Sinus Problems (e.g., Hay Fever)',
                                'Asthma',
                                'Arthritis',
                                'Frequent Migraines or Headaches',
                                'Psychological Conditions (e.g., Depression, Bipolar Disorder, Eating Disorders)',
                                'Substance Dependency (e.g., Alcohol, Drugs)',
                                'Cancer (including Chemotherapy or Radiation Therapy)',
                                'Heart Disease (e.g., Heart Murmur, Angina)',
                                'Congenital Heart Disease',
                                'Kidney Disease',
                                'Liver Disease (e.g., Hepatitis, Jaundice)',
                                'Anemia or Bleeding Disorder',
                                'Herpes or Cold Sores',
                                'Tuberculosis or Lung Problems',
                                'Epilepsy or Seizures',
                                'Immune Deficiency (e.g., HIV/AIDS, Leukemia)',
                                'Stroke',
                                'Heart Transplant',
                                'Rheumatic Fever or Rheumatic Heart Disease',
                                'Osteoporosis',
                            ]}
                        />
                        <QuestionWithInput name='conditionsExplanation' question='If so, please explain.' />



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

export default FormPage4;
