import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';
import { InputWithText } from '../components';

// Validation schema for page 2
const page3Schema = Yup.object().shape({
    isCovered: Yup.string().required('Please select if you are covered by insurance'),
    nameOfInsured1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Name of Insured is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    birthdateOfInsured1: Yup.date().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Birthdate of Insured is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    relationshipToInsured1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Relationship to Insured is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    insuranceCarrier1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Insurance Carrier is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    policyNumber1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Policy/Group/Plan # is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    employerForInsurance1: Yup.string(),
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
        isCovered: string,
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
    return (
        <Formik
            initialValues={{ ...initialValues }}
            validationSchema={page3Schema}
            onSubmit={(values) => {

                onNext(values)
            }}
        >
            {({ handleSubmit, values, errors }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-3 gap-10">
                        <Field name="isCovered">
                            {({ field, meta, form }: { field: any; meta: any; form: any }) => (
                                <RadioGroup
                                    className="col-span-3"
                                    label="Are you covered by Dental Insurance? (Including Canadian Dental Care Plan (CDCB) and Healthy Smiles of Ontario (HSO)"
                                    value={field.value} // Bind value from Formik field
                                    onChange={(e) => {
                                        form.setFieldValue('isCovered', e.target.value); // Set value directly as a string
                                    }}
                                    isInvalid={meta.touched && meta.error}
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                >
                                    <Radio value="covered">Yes</Radio>
                                    <Radio value="notcovered">No</Radio>
                                </RadioGroup>
                            )}
                        </Field>

                        {values.isCovered  === 'covered' && (
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
                                            question='Relationship to Insured'
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
                                        <InputWithText
                                            cols={1}
                                            name='employerForInsurance1'
                                            question='Employer / School'
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
                                            question='Relationship to Insured'
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
                                        <InputWithText
                                            cols={1}
                                            name='employerForInsurance2'
                                            question='Employer / School'
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

export default FormPage3;
