import React from 'react';
import { Field } from 'formik';
import { Input } from '@nextui-org/react';

interface QuestionWithInputProps {
    question: string;
    name: string; // Name for the input field
}

const QuestionWithInput: React.FC<QuestionWithInputProps> = ({ question, name }) => {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-4 items-center">
            {/* Question - 5 cols */}
            <div className="col-span-5">
                <h3 className="font-semibold">{question}</h3>
            </div>

            {/* Text Box - 5 cols */}
            <Field name={name}>
                {({ field, meta }: any) => (
                    <div className="col-span-7">
                        <Input
                            {...field}
                            label="Please provide details"
                            type="text"
                            isInvalid={meta.error && meta.touched}
                            errorMessage={meta.touched && meta.error ? meta.error : undefined}
                        />
                    </div>
                )}
            </Field>
        </div>
    );
};

export default QuestionWithInput;
