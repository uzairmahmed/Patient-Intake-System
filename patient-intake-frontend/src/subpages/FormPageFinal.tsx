import React, { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Checkbox } from '@nextui-org/react';
import Signature from '@uiw/react-signature';
import { HiCheck, HiOutlineTrash } from "react-icons/hi";
import { PageFinalValues, finalPageSchema } from '../interfaces';

interface FormPageFinalProps {
    initialValues: PageFinalValues;
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
                                    By submitting this form, I confirm that the information provided is accurate and complete to the best of my knowledge. I understand that providing false or misleading information may affect my care and that I am responsible for updating Smiline Family Dentistry with any changes to my health information.                                </Checkbox>
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

                            <p className='text-xs font-medium pt-10'>Privacy Policy</p>
                            <p className='text-xs'>
                                At Smiline Family Dentistry, your privacy is our priority. We are committed to protecting your personal health information in compliance with Ontario's Personal Health Information Protection Act (PHIPA) and Canada's Personal Information Protection and Electronic Documents Act (PIPEDA). We collect and use your personal information to provide you with safe and effective dental care. We follow industry-standard security practices, including data encryption and access controls, to protect your information from unauthorized access or disclosure. You have the right to access your information and request corrections if necessary. You may withdraw your consent at any time. If you choose to do so, please inform our staff, and we will discontinue the collection of your information. Your personal information will only be kept for as long as necessary to fulfill the purpose for which it was collected or as required by law. After this period, it will be securely deleted from our systems. For more information on our privacy practices or to make a request regarding your personal information, please contact us at contact@smilinedentistry.ca. By proceeding, you consent to the collection, use, and storage of your information as outlined in this notice.
                            </p>
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
