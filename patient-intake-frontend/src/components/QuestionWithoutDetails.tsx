import React from 'react';
import { Field } from 'formik';
import { Input, RadioGroup, Radio } from '@nextui-org/react';

interface QuestionWithoutDetailsProps {
    question: string;
    name: string; // Name for the radio group
}

const QuestionWithoutDetails: React.FC<QuestionWithoutDetailsProps> = ({ question, name }) => {
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
                        <div className="col-span-1 flex flex-col gap-2 text-center items-center">
                            <h1 className="-ml-2">Yes</h1>
                            <RadioGroup
                                value={field.value}
                                onChange={(e) => form.setFieldValue(name, e.target.value)}
                                label=""
                            >
                                <Radio value="yes"></Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-span-1 flex flex-col gap-2 text-center items-center">
                            <h1 className="-ml-2">No</h1>
                            <RadioGroup
                                value={field.value}
                                onChange={(e) => form.setFieldValue(name, e.target.value)}
                                label=""
                            >
                                <Radio value="no"></Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-span-1 flex flex-col gap-2 text-center items-center">
                            <h1 className="-ml-2">Unsure</h1>
                            <RadioGroup
                                value={field.value}
                                onChange={(e) => form.setFieldValue(name, e.target.value)}
                                label=""
                            >
                                <Radio value="notsure"></Radio>
                            </RadioGroup>
                        </div>
                    </>
                )}
            </Field>
        </div>
    );
};

export default QuestionWithoutDetails;
