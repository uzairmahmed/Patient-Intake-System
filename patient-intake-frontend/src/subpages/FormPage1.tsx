import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { InputWithText } from '../components';
import { Page1Values, page1Schema } from '../interfaces';

interface FormPage1Props {
    initialValues: Page1Values
    onNext: (values: any) => void;
}

const FormPage1: FC<FormPage1Props> = ({ initialValues, onNext }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={page1Schema}
            onSubmit={(values) => onNext(values)}
        >
            {({ handleSubmit, errors }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                    <div className="grid grid-cols-6 gap-10">
                        <div className="col-span-6 grid grid-cols-12 gap-4 items-center">
                            <h1 className="col-span-12 text-center font-semibold">CONTACT INFORMATION</h1>
                        </div>

                        <InputWithText
                            question='First Name *'
                            name='firstName'
                            type='text'
                            cols={2}
                            required={true}
                        />

                        <InputWithText
                            question='Middle Name'
                            name='middleName'
                            type='text'
                            cols={2}
                            required={false}
                        />

                        <InputWithText
                            question='Last Name *'
                            name='lastName'
                            type='text'
                            cols={2}
                            required={true}
                        />

                        <InputWithText
                            question='Date of Birth *'
                            name='dob'
                            type='date'
                            cols={3}
                            required={true}
                        />

                        <InputWithText
                            question='Health Card Number'
                            name='healthCard'
                            type='text'
                            cols={3}
                            required={false}
                        />

                        <InputWithText
                            question='Email *'
                            name='email'
                            type='email'
                            cols={6}
                            required={true}
                        />

                        <InputWithText
                            question='Mobile Phone *'
                            name='mobilePhone'
                            type='tel'
                            cols={3}
                            required={true}
                        />

                        <InputWithText
                            question='Home Phone'
                            name='homePhone'
                            type='tel'
                            cols={3}
                            required={false}
                        />

                        <InputWithText
                            question='Address *'
                            name='address'
                            type='text'
                            cols={6}
                            required={true}
                        />

                        <InputWithText
                            question='City *'
                            name='city'
                            type='text'
                            cols={2}
                            required={true}
                        />

                        <Field name="province">
                            {({ field, form, meta }: { field: any; form: any; meta: any }) => (
                                <Select
                                    label="Province *"
                                    className="col-span-2"
                                    selectedKeys={new Set([field.value])} // This ensures the value is displayed
                                    onChange={(e) => {
                                        form.setFieldValue(field.name, e.target.value); // Update Formik's field value
                                    }}
                                    isInvalid={meta.error && meta.touched} // Handle validation state
                                    errorMessage={meta.error && meta.touched ? meta.error : undefined} // Display validation message
                                >
                                    {["ON", "QC", "BC", "AB", "MB", "SK", "NS", "NB", "NL", "PE", "NT", "YT", "NU"].map((province) => (
                                        <SelectItem key={province} value={province}>
                                            {province}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}
                        </Field>


                        <InputWithText
                            question='Postal Code *'
                            name='postalCode'
                            type='text'
                            cols={2}
                            required={true}
                        />
                    </div>
                    <div className="flex justify-between space-x-4 mt-10">
                        <div></div>
                        <Button onClick={() => {
                            console.log('Errors:', errors); // Log errors when Next is clicked
                        }} type="submit" color="primary">
                            Next
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
export default FormPage1;