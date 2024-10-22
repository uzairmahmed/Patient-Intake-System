import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import * as Yup from 'yup';

// Validation schema for page 2
const page3Schema = Yup.object().shape({
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
});

interface FormPage3Props {
    initialValues: {
        phone: string;
        address: string;
    };
    onSubmit: (values: any) => void;
    onBack: () => void;
}

const FormPage3: React.FC<FormPage3Props> = ({ initialValues, onSubmit, onBack }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page3Schema}
            onSubmit={(values) => onSubmit(values)}
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-6 gap-10">
                        <RadioGroup
                            label="Select your favorite city"
                        >
                            <Radio value="buenos-aires">Buenos Aires</Radio>
                            <Radio value="sydney">Sydney</Radio>
                            <Radio value="san-francisco">San Francisco</Radio>
                            <Radio value="london">London</Radio>
                            <Radio value="tokyo">Tokyo</Radio>
                        </RadioGroup>
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

export default FormPage3;
