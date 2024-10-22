import React, { useState } from 'react';
import { Field, FieldArray, useFormikContext } from 'formik';
import { Checkbox, Input } from '@nextui-org/react';

interface QuestionWithCheckboxesProps {
    question: string; // The header question
    options: string[]; // Array of options for the checkboxes
    name: string; // The name for the array of selected options
    otherName: string; // The name for the "Other" field in Formik
}

const QuestionWithCheckboxes: React.FC<QuestionWithCheckboxesProps> = ({ question, options, name, otherName }) => {
    const { values } = useFormikContext<any>(); // Use Formik's context to access form values
    const [showOtherInput, setShowOtherInput] = useState(false); // Local state to show/hide the Other input field

    return (
        <div className="col-span-12 grid grid-cols-12 gap-4 items-start">
            {/* Header/Question - 12 cols */}
            <div className="col-span-12">
                <h3 className="font-semibold">{question}</h3>
            </div>

            {/* Checkboxes */}
            <div className="col-span-12 grid grid-cols-12 gap-4">
                <FieldArray name={name}>
                    {({ push, remove }) => (
                        <>
                            {options.map((option, index) => (
                                <div className="col-span-6 lg:col-span-4" key={index}>
                                    <Checkbox
                                        isSelected={values[name]?.includes(option)} // Check if the option is selected
                                        onChange={(e) => {
                                            if (e) {
                                                push(option); // Add to array if checked
                                            } else {
                                                const idx = values[name].indexOf(option);
                                                remove(idx); // Remove from array if unchecked
                                            }
                                        }}
                                    >
                                        {option}
                                    </Checkbox>
                                </div>
                            ))}
                        </>
                    )}
                </FieldArray>
                <div className="col-span-4">
                    <Checkbox
                        isSelected={showOtherInput}
                        onChange={(e) => {
                            setShowOtherInput(e.target.checked);
                            if (!e) {
                                values[otherName] = ''; // Clear the other field if unchecked
                            }
                        }}
                    >
                        Other
                    </Checkbox>
                </div>
                {showOtherInput && (
                    <div className="col-span-12">
                        <Field name={otherName}>
                            {({ field, meta }: any) => (
                                <Input
                                    {...field}
                                    label="Please specify"
                                    type="text"
                                    isInvalid={meta.error && meta.touched}
                                    errorMessage={meta.touched && meta.error ? meta.error : undefined}
                                />
                            )}
                        </Field>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionWithCheckboxes;
