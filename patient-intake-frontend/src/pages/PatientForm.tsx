import React, { useState } from 'react';
import { ProgressBar } from '../components';
import { FormPage1, FormPage2, FormPage3, FormPage4, FormPage5, FormPageFinal } from '../subpages';
import FormPagePost from '../subpages/FormPagePost';
import { submitFormData } from '../api/api';
import FormPageError from '../subpages/FormPageError';
import { FormValues } from '../interfaces/FormInterfaces';


const PatientForm: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        healthCard: '',
        email: '',
        mobilePhone: '',
        homePhone: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        parentFirstName: '',
        parentLastName: '',
        parentPhone: '',
        emergName: '',
        emergRelationship: '',
        emergPhone: '',
        doctorName: '',
        doctorClinic: '',
        doctorPhone: '',
        isCovered: 'notcovered',
        nameOfInsured1: '',
        birthdateOfInsured1: '',
        relationshipToInsured1: '',
        insuranceCarrier1: '',
        employerForInsurance1: '',
        policyNumber1: '',
        idNumber1: '',
        nameOfInsured2: '',
        birthdateOfInsured2: '',
        relationshipToInsured2: '',
        insuranceCarrier2: '',
        employerForInsurance2: '',
        policyNumber2: '',
        idNumber2: '',
        lastMedicalCheckup: '',
        medicationListing: '',
        smoking: '',
        alcohol: '',
        seriousInjury: '',
        seriousInjuryDetails: '',
        allergies: [],
        otherAllergies: '',
        devices: [],
        otherDevices: '',
        conditions: [],
        otherConditions: '',
        conditionsExplanation: '',
        dentalConcerns: '',
        painRightNow: '',
        painRightNowDetails: '',
        lastDentalVisit: '',
        lastDentalCleaning: '',
        lastXRays: '',
        gumBleeding: '',
        gumSwelling: '',
        dentalProblems: [],
        otherDentalProblems: '',
        jawProblems: '',
        upsettingExperience: '',
        upsettingExperienceDetails: '',
        botherDental: '',
        botherDentalDetails: '',
        smileChange: '',
        smileChangeDetails: '',
        premedication: '',
        premedicationDetails: '',
        factualInfo: false,
        signature: '',
    });

    const handleFinalSubmit = async (values: FormValues) => {
        const finalFormData = { ...formValues, ...values };
        // console.log('Final form data:', JSON.stringify(finalFormData, null, 2));
        const formStatus = await submitFormData(finalFormData)
        if (formStatus) {
            setCurrentPage(6);
        } else {
            setCurrentPage(7)
        }
    };

    return (
        <div className="flex flex-col h-full">
            <ProgressBar
                currentPage={currentPage}
                totalPages={6}
            />
            <div className='flex flex-col m-5 p-5 h-fit border'>
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
                        birthdate={formValues.dob}
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
                            setCurrentPage(4);
                        }}
                        onBack={() => setCurrentPage(2)}
                    />
                )}

                {currentPage === 4 && (
                    <FormPage5
                        initialValues={formValues}
                        onNext={(values) => {
                            setFormValues({ ...formValues, ...values });
                            setCurrentPage(5);
                        }}
                        onBack={() => setCurrentPage(3)}
                    />
                )}


                {currentPage === 5 && (
                    <FormPageFinal
                        initialValues={formValues}
                        onSubmit={(values) => {
                            handleFinalSubmit({ ...formValues, ...values });
                        }}
                        onBack={() => setCurrentPage(4)}
                    />
                )}

                {currentPage === 6 && (
                    <FormPagePost />
                )}

                {currentPage === 7 && (
                    <FormPageError
                        onBack={() => setCurrentPage(5)}
                        onReSubmit={() => handleFinalSubmit({...formValues})}
                    />
                )}
            </div>
        </div>
    );
};

export default PatientForm;
