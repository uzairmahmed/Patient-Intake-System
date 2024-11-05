import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, RadioGroup, Radio } from '@nextui-org/react';
import { InputWithText } from '../components';
import { Page3Values, page3Schema } from '../interfaces';

interface FormPage3Props {
    initialValues: Page3Values;
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
                                    label="Are you covered by Dental Insurance? (Including Canadian Dental Care Plan (CDCB) and Healthy Smiles of Ontario (HSO) *"
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
