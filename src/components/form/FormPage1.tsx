import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from '@nextui-org/react';
import * as Yup from 'yup';

// Validation schema for page 1
const page1Schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    middleName: Yup.string(),
    dob: Yup.date().required('Date of Birth is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

interface FormPage1Props {
    initialValues: {
        firstName: string;
        lastName: string;
        middleName: string;
        dob: string;
        email: string;
    };
    onNext: (values: any) => void;
}

const FormPage1: FC<FormPage1Props> = ({ initialValues, onNext }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page1Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full ">
                    <div className="flex-grow space-y-5">
                        <Field name="firstName">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="First Name"
                                    type='text'
                                    className="max-w-xs"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>

                        <Field name="lastName">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Last Name"
                                    type='text'
                                    className="max-w-xs"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>

                        <Field name="dob">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Date of Birth"
                                    type='date'
                                    className="max-w-xs"
                                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                                />
                            )}
                        </Field>

                        <Field name="email">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Email"
                                    type='email'
                                    className="max-w-xs"
                                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                                />
                            )}
                        </Field>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Button type="submit" color="primary">
                            Next
                        </Button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}
export default FormPage1;