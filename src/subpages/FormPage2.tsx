import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@nextui-org/react';
import * as Yup from 'yup';
import { InputWithText } from '../components';

// Validation schema for page 2
const page2Schema = Yup.object().shape({
    parentFirstName: Yup.string().required('Parent First Name is required'),
    parentLastName: Yup.string().required('Parent Last Name is required'),
    parentPhone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Parent Phone is required'),
    emergName: Yup.string().required('Emergency Contact Name is required'),
    emergRelationship: Yup.string().required('Emergency Contact Relationship is required'),
    emergPhone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Emergency Contact Phone is required'),
    doctorName: Yup.string().required('Doctor Name is required'),
    doctorClinic: Yup.string().required('Doctor Clinic is required'),
    doctorPhone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Doctor Phone is required'),
});

interface FormPage2Props {
    initialValues: {
        parentFirstName: string;
        parentLastName: string;
        parentPhone: string;
        emergName: string;
        emergRelationship: string;
        emergPhone: string;
        doctorName: string;
        doctorClinic: string;
        doctorPhone: string;
    };
    onNext: (values: any) => void;
    onBack: () => void;
}

const FormPage2: React.FC<FormPage2Props> = ({ initialValues, onNext, onBack }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page2Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-5">
                        {/* Parent/Guardian Section */}
                        <div className='border-2 border-dashed border-green-500 p-5 space-y-5'>
                            <h2 className='font-semibold text-green-500'>Parent/Guardian</h2>
                            <div className='grid grid-cols-6 col-span-6 gap-10'>
                                <InputWithText
                                    cols={2}
                                    name='parentFirstName'
                                    question='First Name *'
                                    required={true}
                                    type='text'
                                />
                                <InputWithText
                                    cols={2}
                                    name='parentLastName'
                                    question='Last Name *'
                                    required={true}
                                    type='text'
                                />
                                <InputWithText
                                    cols={2}
                                    name='parentPhone'
                                    question='Phone Number *'
                                    required={true}
                                    type='tel'
                                />
                            </div>
                        </div>

                        {/* Emergency Contact Section */}
                        <div className='border-2 border-dashed border-red-500 p-5 space-y-5'>
                            <h2 className='font-semibold text-red-500'>Emergency Contact</h2>
                            <div className='grid grid-cols-6 col-span-6 gap-10'>
                                <InputWithText
                                    cols={2}
                                    name='emergName'
                                    question='Name *'
                                    required={true}
                                    type='text'
                                />
                                <InputWithText
                                    cols={2}
                                    name='emergRelationship'
                                    question='Relationship *'
                                    required={true}
                                    type='text'
                                />
                                <InputWithText
                                    cols={2}
                                    name='emergPhone'
                                    question='Phone Number *'
                                    required={true}
                                    type='tel'
                                />
                            </div>
                        </div>

                        {/* Family Doctor Section */}
                        <div className='border-2 border-dashed border-blue-500 p-5 space-y-5'>
                            <h2 className='font-semibold text-blue-500'>Family Doctor</h2>
                            <div className='grid grid-cols-6 col-span-6 gap-10'>
                                <InputWithText
                                    cols={2}
                                    name='doctorName'
                                    question='Name *'
                                    required={true}
                                    type='text'
                                />
                                <InputWithText
                                    cols={2}
                                    name='doctorClinic'
                                    question='Clinic Name *'
                                    required={true}
                                    type='text'
                                />
                                <InputWithText
                                    cols={2}
                                    name='doctorPhone'
                                    question='Phone Number *'
                                    required={true}
                                    type='tel'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons for navigation */}
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

export default FormPage2;
