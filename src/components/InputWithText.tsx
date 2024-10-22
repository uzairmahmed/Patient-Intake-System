import React from 'react';
import { Field } from 'formik';
import { Input, RadioGroup, Radio } from '@nextui-org/react';

interface InputWithTextProps {
    question: string;
    name: string;
    cols: number;
    required: boolean
    type: string
}

const InputWithText: React.FC<InputWithTextProps> = ({ question, name, cols, required, type }) => {
    return (
        <Field name={name}>
            {({ field, meta }: { field: any; meta: any }) => (
                <Input
                    {...field}
                    label={question}
                    required={required}
                    type={type}
                    className={`col-span-${cols}`}
                    isInvalid={meta.error && meta.touched} // Formik validation handling for isInvalid
                    errorMessage={meta.touched && meta.error ? meta.error : undefined} // Display error message from Formik
                />
            )}
        </Field>
    );
}
export default InputWithText;