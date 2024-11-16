import * as Yup from 'yup';
import { Page1Values, Page2Values, Page3Values, Page4Values, Page5Values, PageFinalValues } from './FormInterfaces';

export const page1Schema = Yup.object<Page1Values>().shape({
    firstName: Yup.string().required('First Name is required'),
    middleName: Yup.string(),
    lastName: Yup.string().required('Last Name is required'),
    dob: Yup.date().required('Date of Birth is required'),
    healthCard: Yup.string(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobilePhone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile Phone must be 10 digits')
        .required('Mobile Phone is required'),
    homePhone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Home Phone must be 10 digits'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    province: Yup.string().required('Province is required'),
    postalCode: Yup.string()
        .matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, 'Invalid Postal Code format')
        .required('Postal Code is required'),
});

export const page2Schema = Yup.object<Page2Values>().shape({
    parentFirstName: Yup.string().when('isUnder18', {
        is: (isUnder18: boolean) => isUnder18 === true,
        then: (schema) => schema.required('Parent First Name is required'),
        otherwise: (schema) => schema.nullable(),
    }),
    parentLastName: Yup.string().when('isUnder18', {
        is: (isUnder18: boolean) => isUnder18 === true,
        then: (schema) => schema.required('Parent Last Name is required'),
        otherwise: (schema) => schema.nullable(),
    }),
    parentPhone: Yup.string().when('isUnder18', {
        is: (isUnder18: boolean) => isUnder18 === true,
        then: (schema) =>
            schema
                .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
                .required('Parent Phone is required'),
        otherwise: (schema) => schema.nullable(),
    }),
    emergName: Yup.string().when('isUnder18', {
        is: (isUnder18: boolean) => isUnder18 === false,
        then: (schema) => schema.required('Emergency Contact Name is required'),
        otherwise: (schema) => schema.nullable(),
    }),
    emergRelationship: Yup.string().when('isUnder18', {
        is: (isUnder18: boolean) => isUnder18 === false,
        then: (schema) => schema.required('Emergency Contact Relationship is required'),
        otherwise: (schema) => schema.nullable(),
    }),
    emergPhone: Yup.string().when('isUnder18', {
        is: (isUnder18: boolean) => isUnder18 === false,
        then: (schema) =>
            schema
                .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
                .required('Emergency Contact Phone is required'),
        otherwise: (schema) => schema.nullable(),
    }),
    doctorName: Yup.string(),
    doctorClinic: Yup.string(),
    doctorPhone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
});

export const page3Schema = Yup.object<Page3Values>().shape({
    isCovered: Yup.string().required('Please select if you are covered by insurance'),
    nameOfInsured1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Name of Insured is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    birthdateOfInsured1: Yup.date().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Birthdate of Insured is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    relationshipToInsured1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Relationship to Insured is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    insuranceCarrier1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Insurance Carrier is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    policyNumber1: Yup.string().when('isCovered', {
        is: (isCovered: string) => isCovered === 'covered',
        then: (schema) => schema.required('Policy/Group/Plan # is required'),
        otherwise: (schema) => schema.notRequired(),
    }),
    employerForInsurance1: Yup.string(),
    idNumber1: Yup.string(),
    nameOfInsured2: Yup.string(),
    birthdateOfInsured2: Yup.date(),
    relationshipToInsured2: Yup.string(),
    insuranceCarrier2: Yup.string(),
    employerForInsurance2: Yup.string(),
    policyNumber2: Yup.string(),
    idNumber2: Yup.string(),
});

export const page4Schema = Yup.object<Page4Values>().shape({
    lastMedicalCheckup: Yup.string(),
    medicationListing: Yup.string(),
    smoking: Yup.string(),
    alcohol: Yup.string(),
    seriousInjury: Yup.string(),
    seriousInjuryDetails: Yup.string(),
    allergies: Yup.array(),
    otherAllergies: Yup.string(),
    devices: Yup.array(),
    otherDevices: Yup.string(),
    conditions: Yup.array(),
    otherConditions: Yup.string(),
    conditionsExplanation: Yup.string(),
});

export const page5Schema = Yup.object<Page5Values>().shape({
    dentalConcerns: Yup.string(),
    painRightNow: Yup.string(),
    painRightNowDetails: Yup.string(),
    lastDentalVisit: Yup.string(),
    lastDentalCleaning: Yup.string(),
    lastXRays: Yup.string(),
    gumBleeding: Yup.string(),
    gumSwelling: Yup.string(),
    dentalProblems: Yup.array(),
    otherDentalProblems: Yup.string(),
    jawProblems: Yup.string(),
    upsettingExperience: Yup.string(),
    upsettingExperienceDetails: Yup.string(),
    botherDental: Yup.string(),
    botherDentalDetails: Yup.string(),
    smileChange: Yup.string(),
    smileChangeDetails: Yup.string(),
    premedication: Yup.string(),
    premedicationDetails: Yup.string(),
    medicationListing: Yup.string(),

});

export const finalPageSchema = Yup.object<PageFinalValues>().shape({
    factualInfo: Yup.boolean().oneOf([true], 'You must confirm that the information is factual'),
    signature: Yup.string().required('Signature is required'),
});

