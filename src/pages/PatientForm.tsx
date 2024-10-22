import React, { useState } from 'react';
import { ProgressBar } from '../components';
import { FormPage1, FormPage2, FormPage3, FormPage4, FormPage5 } from '../subpages';

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
    seriousInjury: string;
    seriousInjuryDetails: string;
    lastMedicalCheckup: string;
    allergies: [];
    otherAllergies: string;
    conditions: [];
    otherConditions: string;
    conditionsExplanation: string;
    smoking: string;
    dentalConcerns: string;
    lastDentalVisit: string;
    lastDentalCleaning: string;
    lastXRays: string;
    painRightNow: string;
    painRightNowDetails: string;
    gumSwelling: string;
    gumBleeding: string;
    jawProblems: string;
    dentalProblems: string[];
    otherDentalProblems: string;
    upsettingExperience: string;
    upsettingExperienceDetails: string;
    smileChange: string;
    smileChangeDetails: string;
    botherDental: string;
    botherDentalDetails: string;
    premedication: string;
    premedicationDetails: string;
    medicationListing: string;
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
        seriousInjury: '',
        seriousInjuryDetails: '',
        lastMedicalCheckup: '',
        allergies: [],
        otherAllergies: '',
        conditions: [],
        otherConditions: '',
        conditionsExplanation: '',
        smoking: '',
        dentalConcerns: '',
        lastDentalVisit: '',
        lastDentalCleaning: '',
        lastXRays: '',
        painRightNow: '',
        painRightNowDetails: '',
        gumSwelling: '',
        gumBleeding: '',
        jawProblems: '',
        dentalProblems: [],
        otherDentalProblems: '',
        upsettingExperience: '',
        upsettingExperienceDetails: '',
        smileChange: '',
        smileChangeDetails: '',
        botherDental: '',
        botherDentalDetails: '',
        premedication: '',
        premedicationDetails: '',
        medicationListing: '',

    });


    const handleFinalSubmit = (values: FormValues) => {
        const finalFormData = { ...formValues, ...values };
        console.log('Final form data:', JSON.stringify(finalFormData, null, 2));
    };

    return (
        <div className="flex flex-col h-full">
            <ProgressBar
                currentPage={currentPage}
                totalPages={5}
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
