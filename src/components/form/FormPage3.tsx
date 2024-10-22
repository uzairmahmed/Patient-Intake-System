import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';

// Validation schema for page 2
const page3Schema = Yup.object().shape({
    // phone: Yup.string().required('Phone number is required'),
    // address: Yup.string().required('Address is required'),
});

interface FormPage3Props {
    initialValues: {
        phone: string;
        address: string;
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
                                        <Field name="insuredName">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Name of Insured"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="insuredBirthdate">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Birthdate of Insured"
                                                    type="date"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="relationshipToInsured">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Relationship to Insured"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="insuranceCarrier">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Insurance Carrier"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="employer">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Employer"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="policyNumber">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Policy/Group/Plan #"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="idNumber">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="ID/Certificate Number"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className='border-2 border-dashed border-black p-5 space-y-5 col-span-3'>
                                    <h2 className='font-semibold border-black'>Secondary Insurance</h2>
                                    <div className='grid grid-cols-3 gap-10'>
                                        <Field name="insuredName">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Name of Insured"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="insuredBirthdate">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Birthdate of Insured"
                                                    type="date"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="relationshipToInsured">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Relationship to Insured"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="insuranceCarrier">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Insurance Carrier"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="employer">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Employer"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="policyNumber">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="Policy/Group/Plan #"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
                                        <Field name="idNumber">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    {...field}
                                                    label="ID/Certificate Number"
                                                    type="text"
                                                    className="max-w-xs"
                                                    isInvalid={meta.error && meta.touched}
                                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                                />
                                            )}
                                        </Field>
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
