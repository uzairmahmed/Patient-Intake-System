import React, { useState } from 'react';
import FormPage1 from './form/FormPage1';
import FormPage2 from './form/FormPage2';
import ProgressBar from './ProgressBar';
import FormPage3 from './form/FormPage3';
import FormPage4 from './form/FormPage4';

interface FormValues {
    firstName: string;
    lastName: string;
    middleName: string;
    dob: string;
    email: string;
    phone: string;
    address: string;
}

const PatientForm: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        middleName: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
    });

    // Handle submission of the last page
    const handleFinalSubmit = (values: FormValues) => {
        // Combine the data from both pages
        const finalFormData = { ...formValues, ...values };
        console.log('Final form data:', JSON.stringify(finalFormData, null, 2));
        // You can now submit finalFormData to an API or process it further
    };

    return (
        <div className="flex flex-col h-full">
            <ProgressBar
                currentPage={currentPage}
                totalPages={3} // Update based on total number of pages
            />
            <div className='flex flex-col m-5 p-5 h-full border'>
                {currentPage === 0 && (
                    <FormPage1
                        initialValues={formValues}
                        onNext={(values) => {
                            setFormValues({ ...formValues, ...values });
                            setCurrentPage(1);
                        }}
                    />
                )}
                {currentPage === 1 && (
                    <FormPage2
                        initialValues={formValues}
                        onNext={(values) => {
                            setFormValues({ ...formValues, ...values });
                            console.log('clicked');
                            setCurrentPage(2);
                        }}
                        onBack={() => setCurrentPage(0)}
                    />
                )}
                {currentPage === 2 && (
                    <FormPage3
                        initialValues={formValues}
                        onNext={(values) => {
                            setFormValues({ ...formValues, ...values });
                            setCurrentPage(3);
                        }}
                        onBack={() => setCurrentPage(1)}
                    />
                )}
                {currentPage === 3 && (
                    <FormPage4
                        initialValues={formValues}
                        onNext={(values) => {
                            setFormValues({ ...formValues, ...values });
                            setCurrentPage(3);
                        }}
                        onBack={() => setCurrentPage(1)}
                    />
                )}


                {/* {currentPage === 2 && ( */}
                    {/* <FormPage3 */}
                        {/* initialValues={formValues} */}
                        {/* onSubmit={(values) => { */}
                            {/* handleFinalSubmit({ ...formValues, ...values }); */}
                        {/* }} */}
                        {/* onBack={() => setCurrentPage(1)} */}
                    {/* /> */}
                {/* )} */}
            </div>


        </div>
    );
};

export default PatientForm;
