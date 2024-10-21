import React from 'react';
import { Field } from 'formik';
import { Input, RadioGroup, Radio } from '@nextui-org/react';

interface QuestionWithDetailsProps {
    question: string;
    name: string; // Name for the radio group
    detailName: string; // Name for the detail input
}

const QuestionWithDetails: React.FC<QuestionWithDetailsProps> = ({ question, name, detailName }) => {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-4 items-center">
            {/* Question - 6 cols */}
            <div className="col-span-5">
                <h3 className="font-semibold">{question}</h3>
            </div>

            {/* Yes/No/Not Sure Radios - 1 col each */}
            <Field name={name}>
                {({ field, form }: any) => (
                    <>
                        <div className="col-span-1">
                            <RadioGroup
                                value={field.value}
                                onChange={(value) => form.setFieldValue(name, value)}
                                label=""
                            >
                                <Radio value="yes"></Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-span-1">
                            <RadioGroup
                                value={field.value}
                                onChange={(value) => form.setFieldValue(name, value)}
                                label=""
                            >
                                <Radio value="no"></Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-span-1">
                            <RadioGroup
                                value={field.value}
                                onChange={(value) => form.setFieldValue(name, value)}
                                label=""
                            >
                                <Radio value="notsure"></Radio>
                            </RadioGroup>
                        </div>
                    </>
                )}
            </Field>

            {/* Text Box - 3 cols */}
            <Field name={detailName}>
                {({ field, meta }: any) => (
                    <div className="col-span-4">
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

export default QuestionWithDetails;
