import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@nextui-org/react';
import { InputWithText } from '../components';
import { Page2Values, page2Schema } from '../interfaces';

interface FormPage2Props {
    initialValues: Page2Values;
    birthdate: string;
    onNext: (values: any) => void;
    onBack: () => void;
}

const FormPage2: React.FC<FormPage2Props> = ({ initialValues, birthdate, onNext, onBack }) => {
    const calculateAge = (birthdate: string): number => {
        const birthDateObj = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();

        // Adjust age if birth date has not occurred this year yet
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }
        return age;
    };

    const isUnder18 = calculateAge(birthdate) < 18;

    return (
        <Formik
            initialValues={{ ...initialValues, isUnder18 }}
            validationSchema={page2Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit, errors }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-5">
                        {isUnder18 ? (
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
                        ) : (
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
                        )}
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

                        <Button onClick={() => {
                            console.log('Errors:', errors); // Log errors when Next is clicked
                        }} type="submit" color="primary">
                            Next
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormPage2;
