import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';
import QuestionWithDetails from '../QuestionWithDetails';
import QuestionWithInput from '../QuestionWithInput';

// Validation schema for page 2
const page4Schema = Yup.object().shape({
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
});

interface FormPage4Props {
    initialValues: {
        phone: string;
        address: string;
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
                            <h1 className="col-span-5">MEDICAL HISTORY</h1>
                            <h1 className="col-span-1">Yes</h1>
                            <h1 className="col-span-1">No</h1>
                            <h1 className="col-span-1">Not Sure</h1>
                            <h1 className="col-span-4">Explan If Needed</h1>
                        </div>
                        <QuestionWithDetails
                            question="Have you had a serious injury in the past?"
                            name="hadInjury"
                            detailName="injuryDetails"
                        />

                        <QuestionWithInput
                            question="When was your last medical checkup?"
                            name="lastCheckup"
                        />


                    </div>

                    <div className="flex justify-between space-x-4">
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
