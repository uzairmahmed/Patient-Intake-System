export type Page1Values = {
    firstName: string,
    middleName: string,
    lastName: string,
    dob: string,
    healthCard: string,
    email: string,
    mobilePhone: string,
    homePhone: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
}

export type Page2Values = {
    parentFirstName: string,
    parentLastName: string,
    parentPhone: string,
    emergName: string,
    emergRelationship: string,
    emergPhone: string,
    doctorName: string,
    doctorClinic: string,
    doctorPhone: string,
}

export type Page3Values = {
    isCovered: string,
    nameOfInsured1: string,
    birthdateOfInsured1: string,
    relationshipToInsured1: string,
    insuranceCarrier1: string,
    employerForInsurance1: string,
    policyNumber1: string,
    idNumber1: string,
    nameOfInsured2: string,
    birthdateOfInsured2: string,
    relationshipToInsured2: string,
    insuranceCarrier2: string,
    employerForInsurance2: string,
    policyNumber2: string,
    idNumber2: string,
}

export type Page4Values = {
    lastMedicalCheckup: string,
    medicationListing: string,
    smoking: string,
    alcohol: string,
    seriousInjury: string,
    seriousInjuryDetails: string,
    allergies: string[],
    otherAllergies: string,
    devices: string[],
    otherDevices: string,
    conditions: string[],
    otherConditions: string,
    conditionsExplanation: string,
}

export type Page5Values = {
    dentalConcerns: string,
    painRightNow: string,
    painRightNowDetails: string,
    lastDentalVisit: string,
    lastDentalCleaning: string,
    lastXRays: string,
    gumBleeding: string,
    gumSwelling: string,
    dentalProblems: string[],
    otherDentalProblems: string,
    jawProblems: string,
    upsettingExperience: string,
    upsettingExperienceDetails: string,
    botherDental: string,
    botherDentalDetails: string,
    smileChange: string,
    smileChangeDetails: string,
    premedication: string,
    premedicationDetails: string,
}

export type PageFinalValues = {
    factualInfo: boolean;
    signature: string;
}

export type FormValues = Page1Values & Page2Values & Page3Values & Page4Values & Page5Values & PageFinalValues
