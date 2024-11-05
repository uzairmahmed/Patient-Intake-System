import React, { useState } from 'react';
import { ProgressBar } from '../components';
import { FormPage1, FormPage2, FormPage3, FormPage4, FormPage5, FormPageFinal } from '../subpages';
import FormPagePost from '../subpages/FormPagePost';
import { submitFormData } from '../api/api';

interface FormValues {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    healthCard: string;
    email: string;
    mobilePhone: string;
    homePhone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    parentFirstName: string;
    parentLastName: string;
    parentPhone: string;
    emergName: string;
    emergRelationship: string;
    emergPhone: string;
    doctorName: string;
    doctorClinic: string;
    doctorPhone: string;
    isCovered: string,
    nameOfInsured1: string;
    birthdateOfInsured1: string;
    relationshipToInsured1: string;
    insuranceCarrier1: string;
    employerForInsurance1: string;
    policyNumber1: string;
    idNumber1: string;
    nameOfInsured2: string;
    birthdateOfInsured2: string;
    relationshipToInsured2: string;
    insuranceCarrier2: string;
    employerForInsurance2: string;
    policyNumber2: string;
    idNumber2: string;
    lastMedicalCheckup: string;
    medicationListing: string;
    smoking: string;
    alcohol: string;
    seriousInjury: string;
    seriousInjuryDetails: string;
    allergies: string[];
    otherAllergies: string;
    devices: string[];
    otherDevices: string;
    conditions: string[];
    otherConditions: string;
    conditionsExplanation: string;
    dentalConcerns: string;
    painRightNow: string;
    painRightNowDetails: string;
    lastDentalVisit: string;
    lastDentalCleaning: string;
    lastXRays: string;
    gumBleeding: string;
    gumSwelling: string;
    dentalProblems: string[];
    otherDentalProblems: string;
    jawProblems: string;
    upsettingExperience: string;
    upsettingExperienceDetails: string;
    botherDental: string;
    botherDentalDetails: string;
    smileChange: string;
    smileChangeDetails: string;
    premedication: string;
    premedicationDetails: string;
    factualInfo: boolean;
    signature: string;
}

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
                    <FormPagePost
                        onBack={() => setCurrentPage(5)}
                    />
                )}
            </div>
        </div>
    );
};

export default PatientForm;
