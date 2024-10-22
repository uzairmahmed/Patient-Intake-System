import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';
import { InputWithText } from '../components';

// Validation schema for page 2
const page3Schema = Yup.object().shape({
    nameOfInsured1: Yup.string(),
    birthdateOfInsured1: Yup.date(),
    relationshipToInsured1: Yup.string(),
    insuranceCarrier1: Yup.string(),
    employerForInsurance1: Yup.string(),
    policyNumber1: Yup.string(),
    idNumber1: Yup.string(),
    nameOfInsured2: Yup.string(),
    birthdateOfInsured2: Yup.date(),
    relationshipToInsured2: Yup.string(),
    insuranceCarrier2: Yup.string(),
    employerForInsurance2: Yup.string(),
    policyNumber2: Yup.string(),
    idNumber2: Yup.string(),
});

interface FormPage3Props {
    initialValues: {
        nameOfInsured1: string;
        birthdateOfInsured1: string;
        relationshipToInsured1: string;
        insuranceCarrier1: string;
        employerForInsurance1: string;
        policyNumber1: string;
        idNumber1: string;
        nameOfInsured2: string;
        birthdateOfInsured2: string;
        relationshipToInsured2: string;
        insuranceCarrier2: string;
        employerForInsurance2: string;
        policyNumber2: string;
        idNumber2: string;
    };
    onNext: (values: any) => void;
    onBack: () => void;
}

const FormPage3: React.FC<FormPage3Props> = ({ initialValues, onNext, onBack }) => {
    const [isCovered, setIsCovered] = useState(false);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page3Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-3 gap-10">
                        <RadioGroup
                            className='col-span-3'
                            label="Are you covered by Dental Insurance?"
                            onChange={(e) => {
                                setIsCovered(e.target.value === 'covered')
                            }}
                        >
                            <Radio value="covered">Yes</Radio>
                            <Radio value="notcovered">No</Radio>
                        </RadioGroup>
                        {isCovered && (
                            <>
                                <div className='border-2 border-dashed border-black p-5 space-y-5 col-span-3'>
                                    <h2 className='font-semibold border-black'>Primary Insurance</h2>
                                    <div className='grid grid-cols-3 gap-10'>
                                        <InputWithText
                                            cols={1}
                                            name='nameOfInsured1'
                                            question='Name of Insured'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='birthdateOfInsured1'
                                            question='Birthdate of Insured'
                                            type='date'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='relationshipToInsured1'
                                            question='Relationship of Insured'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='insuranceCarrier1'
                                            question='Insurance Carrier'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='employerForInsurance1'
                                            question='Employer'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='policyNumber1'
                                            question='Policy/Group/Plan #'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='idNumber1'
                                            question='ID/Certificate Number'
                                            type='text'
                                            required={false}
                                        />
                                    </div>
                                </div>
                                <div className='border-2 border-dashed border-black p-5 space-y-5 col-span-3'>
                                    <h2 className='font-semibold border-black'>Secondary Insurance</h2>
                                    <div className='grid grid-cols-3 gap-10'>
                                        <InputWithText
                                            cols={1}
                                            name='nameOfInsured2'
                                            question='Name of Insured'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='birthdateOfInsured2'
                                            question='Birthdate of Insured'
                                            type='date'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='relationshipToInsured2'
                                            question='Relationship of Insured'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='insuranceCarrier2'
                                            question='Insurance Carrier'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='employerForInsurance2'
                                            question='Employer'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='policyNumber2'
                                            question='Policy/Group/Plan #'
                                            type='text'
                                            required={false}
                                        />
                                        <InputWithText
                                            cols={1}
                                            name='idNumber2'
                                            question='ID/Certificate Number'
                                            type='text'
                                            required={false}
                                        />
                                    </div>
                                </div>

                            </>
                        )}
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

export default FormPage3;
