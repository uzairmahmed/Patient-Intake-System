import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button } from '@nextui-org/react';
import * as Yup from 'yup';

// Validation schema for page 2
const page2Schema = Yup.object().shape({
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
});

interface FormPage2Props {
    initialValues: {
        phone: string;
        address: string;
    };
    onSubmit: (values: any) => void;
    onBack: () => void;
}

const FormPage2: React.FC<FormPage2Props> = ({ initialValues, onSubmit, onBack }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page2Schema}
            onSubmit={(values) => onSubmit(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full ">
                    <div className="flex-grow space-y-5">
                <Field name="phone">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <Input
                                {...field}
                                label="Phone Number (Mobile)"
                                type='string'
                                className="max-w-xs"
                                isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                            />
                        )}
                    </Field>

                    <Field name="address">
                        {({ field, meta }: { field: any; meta: any }) => (
                            <Input
                                {...field}
                                label="Home Address"
                                type='string'
                                className="max-w-xs"
                                isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                                errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                            />
                        )}
                    </Field>
                    </div>

                    <div className="flex justify-between space-x-4">
                        <Button onClick={onBack} color="default">
                            Back
                        </Button>

                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </div>


                </Form>
            )}
        </Formik>
    );
};

export default FormPage2;
