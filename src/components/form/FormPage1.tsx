import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, Select, SelectItem } from '@nextui-org/react';
import * as Yup from 'yup';

// Validation schema for page 1
const page1Schema = Yup.object().shape({
    // firstName: Yup.string().required('First Name is required'),
    // lastName: Yup.string().required('Last Name is required'),
    // middleName: Yup.string(),
    // dob: Yup.date().required('Date of Birth is required'),
    // email: Yup.string().email('Invalid email').required('Email is required'),
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
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-6 gap-10">
                        <Field name="firstName">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="First Name"
                                    isRequired
                                    type='text'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>
                        <Field name="middleName">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Middle Name"
                                    type='text'
                                    className="col-span-2"
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
                                    isRequired
                                    type='text'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>
                        <Field name="dob">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    isRequired
                                    label="Date of Birth"
                                    type='date'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                                />
                            )}
                        </Field>
                        <Field name="healthcard">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Health Card Number"
                                    type='text'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                                />
                            )}
                        </Field>
                        <Field name="occupation">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Occupation"
                                    type='text'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    isRequired
                                    label="Email"
                                    type='email'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                                />
                            )}
                        </Field>
                        <Field name="mobile">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Mobile Phone"
                                    isRequired
                                    type='tel'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>
                        <Field name="homephone">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Home Phone"
                                    type='tel'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>
                        <Field name="address">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Address"
                                    isRequired
                                    type='text'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>
                        <Field name="city">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="City"
                                    isRequired
                                    type='text'
                                    className="col-span-2"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                />
                            )}
                        </Field>
                        <Field name="province">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Select
                                    label="Province"
                                    className="max-w-xs"
                                >
                                    {["ON", "QC", "BC", "AB", "MB", "SK", "NS", "NB", "NL", "PE", "NT", "YT", "NU"].map((province) => (
                                        <SelectItem key={province}>
                                            {province}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}
                        </Field>

                        <Field name="postal">
                            {({ field, meta }: { field: any; meta: any }) => (
                                <Input
                                    {...field}
                                    label="Postal Code"
                                    isRequired
                                    type='text'
                                    className="col-span-1"
                                    isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
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