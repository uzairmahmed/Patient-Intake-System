import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from '@nextui-org/react';
import * as Yup from 'yup';

// Validation schema for page 2
const page2Schema = Yup.object().shape({
});

interface FormPage2Props {
    initialValues: {
        phone: string;
        address: string;
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
                        <div className='border-2 border-dashed border-green-500 p-5 space-y-5'>
                            <h2 className='font-semibold text-green-500'>Parent/Guardian</h2>
                            <div className='grid grid-cols-6 col-span-6 gap-10'>
                                <Field name="parentfirstName">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Name"
                                            isRequired
                                            type='text'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                                <Field name="parentlastName">
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
                                <Field name="parentPhone">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Phone"
                                            isRequired
                                            type='text'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className='border-2 border-dashed border-red-500 p-5 space-y-5'>
                            <h2 className='font-semibold text-red-500'>Emergency Contact</h2>
                            <div className='grid grid-cols-6 col-span-6 gap-10'>
                                <Field name="emergname">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Name"
                                            isRequired
                                            type='text'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                                <Field name="emergrelationship">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Relationship"
                                            type='text'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                                <Field name="emergphone">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Phone"
                                            isRequired
                                            type='tel'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className='border-2 border-dashed border-blue-500 p-5 space-y-5'>
                            <h2 className='font-semibold text-blue-500'>Family Doctor</h2>
                            <div className='grid grid-cols-6 col-span-6 gap-10'>
                                <Field name="doctorname">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Name"
                                            isRequired
                                            type='text'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                                <Field name="doctorclinic">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Clinic"

                                            type='text'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                                <Field name="doctorphone">
                                    {({ field, meta }: { field: any; meta: any }) => (
                                        <Input
                                            {...field}
                                            label="Phone"
                                            type='tel'
                                            className="col-span-2"
                                            isInvalid={meta.error && meta.touched} // Connect Formik validation to NextUI's isInvalid
                                            errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message if validation fails
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
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

export default FormPage2;
