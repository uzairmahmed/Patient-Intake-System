import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, Checkbox, CheckboxIcon } from '@nextui-org/react';
import Signature from '@uiw/react-signature';
import * as Yup from 'yup';
import { HiCheck, HiOutlineTrash } from "react-icons/hi";

// Validation schema for the final page
const finalPageSchema = Yup.object().shape({
    factualInfo: Yup.boolean().oneOf([true], 'You must confirm that the information is factual'),
    signature: Yup.string().required('Signature is required'),
});

interface FormPageFinalProps {
    initialValues: {
        factualInfo: boolean;
        signature: string;
    };
    onSubmit: (values: any) => void;
    onBack: () => void;
}

const FormPageFinal: React.FC<FormPageFinalProps> = ({ initialValues, onSubmit, onBack }) => {
    const signatureRef = useRef<any>(null);

    const clearSignature = (setFieldValue: (field: string, value: any) => void) => {
        signatureRef.current?.clear();
        setFieldValue('signature', ''); // Clear the Formik field for signature
    };

    const retrieveSignatureData = () => {
        if (signatureRef.current) {
            // Access the SVG element
            const svgElement = signatureRef.current.svg;
            const svgData = svgElement ? svgElement.outerHTML : ''; // Get the SVG as a string
            return svgData;
        }
        return '';
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={finalPageSchema}
            onSubmit={(values) => {
                const signatureData = retrieveSignatureData();
                values.signature = signatureData;
                onSubmit(values)
            }}
        >
            {({ handleSubmit, values, setFieldValue, errors }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="space-y-6">
                        {/* Checkbox for factual confirmation */}
                        <Field name="factualInfo">
                            {({ field }: { field: any }) => (
                                <Checkbox
                                    {...field}
                                    isSelected={field.value}
                                    onChange={(e) => setFieldValue('factualInfo', e.target.checked)}
                                >
                                    I confirm that the information provided is factual.
                                </Checkbox>
                            )}
                        </Field>
                        {errors.factualInfo && <div className="text-red-500">{errors.factualInfo}</div>}

                        {/* Signature Pad */}
                        <div className="space-y-2">
                            <label className="font-semibold">Signature</label>
                            <div className='flex gap-5'>
                                <Signature
                                    ref={signatureRef}
                                    options={{
                                        size: 6,
                                        smoothing: 0.46,
                                        thinning: 0.73,
                                        streamline: 0.5,
                                        start: {
                                            taper: 0,
                                            cap: true
                                        },
                                        end: {
                                            taper: 0,
                                            cap: true
                                        }
                                    }}
                                    style={{ border: '1px solid #ccc', borderRadius: 15, width: '100%', height: '150px' }}
                                    onMouseUp={() => {
                                        setFieldValue('signature', retrieveSignatureData())
                                    }}
                                />
                                <div className='flex flex-col justify-between gap-5'>
                                    <Button className='h-full' isIconOnly onClick={() => clearSignature(setFieldValue)} color="default" aria-label="Clear Signature">
                                        <HiOutlineTrash size={24} />
                                    </Button>
                                    <Button className='h-full' isIconOnly onClick={() => setFieldValue('signature', retrieveSignatureData())} color="success" aria-label="Set Signature">
                                        <HiCheck size={24} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {errors.signature && <div className="text-red-500">{errors.signature}</div>}
                    </div>


                    {/* Navigation Buttons */}
                    <div className="flex justify-between space-x-4 mt-6">
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

export default FormPageFinal;
