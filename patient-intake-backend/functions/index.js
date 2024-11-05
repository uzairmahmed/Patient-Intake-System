const admin = require('firebase-admin');
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions/v2");
const PDFDocument = require('pdfkit');
const sharp = require('sharp');
const { Storage } = require('@google-cloud/storage');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
});

// Usage of the Google credentials
const storage = new Storage({});

exports.generatePdfAndUpload = onCall(
    {
        region: "northamerica-northeast1",
        enforceAppCheck: true,
    },
    async (req, res) => {
        logger.log("Starting generatePdfAndUpload function");  // Log at function start
        try {
            // Parse the form data from the request
            // logger.log(req.data.formData)
            const formData = req.data.formData
            // Create a PDF document
            const pdfDoc = new PDFDocument();
            let buffers = [];
            pdfDoc.on('data', buffers.push.bind(buffers));
            pdfDoc.on('end', async () => {
                const pdfData = Buffer.concat(buffers);

                // Define the storage path and upload
                const bucket = storage.bucket(process.env.GOOGLE_STORAGE_BUCKET);
                const fileName = `${formData.lastName}-${formData.firstName}-${formData.dob}.pdf`;
                const file = bucket.file(fileName);

                await file.save(pdfData, {
                    metadata: {
                        contentType: 'application/pdf',
                        metadata: {
                            formDataId: formData.email, // Metadata for easy lookup
                        },
                    },
                });
                logger.log(`PDF successfully created and uploaded: ${formData.lastName}-${formData.firstName}-${formData.dob}.pdf`)
                return ({ message: 'PDF successfully created and uploaded.' })

                // const outputPath = path.join(__dirname, fileName); // Specify your local path
                // fs.writeFileSync(outputPath, pdfData);

                // res.status(200).send({ message: 'PDF successfully created and saved locally.', filePath: outputPath });

            });

            function addHeader(pdfDoc, logoPath) {
                const pageWidth = pdfDoc.page.width;
                const logoWidth = 200; // Set the desired width for the logo
                const xPosition = (pageWidth - logoWidth) / 2; // Center the logo horizontally
                pdfDoc.moveDown();

                // Add the logo centered at the top of the page
                pdfDoc.image(logoPath, xPosition, 20, { width: logoWidth });

                // Add header text
                pdfDoc.fontSize(20)
                    .font('Helvetica-Bold')
                    .text('Patient History Form', { align: 'center' });

                pdfDoc.moveDown(1);  // Add space after header
            }


            function addSectionTitle(pdfDoc, title) {
                pdfDoc.fontSize(14).font('Helvetica-Bold').text(title);
                pdfDoc.moveDown();
            }

            function addField(pdfDoc, fieldName, fieldValue, highlight = false, noBold = false) {
                pdfDoc.fontSize(12)
                    .font(noBold ? `Helvetica` : `Helvetica-Bold`).text(`${fieldName}: `, { continued: true })
                    .font('Helvetica').fillColor(highlight ? 'red' : 'black').text(fieldValue || 'N/A', { oblique: true }).fillColor('black');
            }

            function formatDate(dateString) {
                const date = new Date(dateString);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return date.toLocaleDateString('en-US', options); // Adjust locale as needed
            }

            function getTodayDate() {
                const today = new Date();
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return today.toLocaleDateString('en-US', options); // Adjust locale as needed
            }

            // addHeader(pdfDoc, './LogoLightHorizontal-80.jpg');

            pdfDoc.fontSize(18).text(`${formData.lastName}, ${formData.firstName} ${formData.middleName}`);
            addField(pdfDoc, 'Date of Birth', formatDate(formData.dob));
            // addField(pdfDoc, 'Under 18', formData.isUnder18 ? 'Yes' : 'No');
            addField(pdfDoc, 'Health Card Number', formData.healthCard);
            pdfDoc.moveDown();
            addField(pdfDoc, 'Email', formData.email);
            addField(pdfDoc, 'Mobile Phone', formData.mobilePhone);
            addField(pdfDoc, 'Home Phone', formData.homePhone);
            addField(pdfDoc, 'Address', `${formData.address}, ${formData.city}, ${formData.province}, ${formData.postalCode}`);

            pdfDoc.moveDown();
            addSectionTitle(pdfDoc, 'Parental Contact');
            addField(pdfDoc, 'Parent Name', `${formData.parentFirstName} ${formData.parentLastName}`);
            addField(pdfDoc, 'Parent Phone', formData.parentPhone);

            pdfDoc.moveDown();
            addSectionTitle(pdfDoc, 'Emergency Contact');
            addField(pdfDoc, 'Name', formData.emergName);
            addField(pdfDoc, 'Relationship', formData.emergRelationship);
            addField(pdfDoc, 'Phone', formData.emergPhone);

            pdfDoc.moveDown();
            addSectionTitle(pdfDoc, 'Family Doctor');
            addField(pdfDoc, 'Doctor Name', formData.doctorName);
            addField(pdfDoc, 'Clinic Name', formData.doctorClinic);
            addField(pdfDoc, 'Clinic Phone', formData.doctorPhone);

            pdfDoc.moveDown();
            addSectionTitle(pdfDoc, 'Insurance Details');
            addField(pdfDoc, 'Covered?', formData.isCovered === 'covered' ? 'Yes' : 'No');
            pdfDoc.moveDown();
            addField(pdfDoc, 'Primary Insurance Holder', formData.nameOfInsured1);
            addField(pdfDoc, 'Birthdate of Insurance Holder', formatDate(formData.birthdateOfInsured1));
            addField(pdfDoc, 'Relationship to Insured', formData.relationshipToInsured1);
            addField(pdfDoc, 'Insurance Carrier', formData.insuranceCarrier1);
            addField(pdfDoc, 'Policy/Group/Plan #', formData.policyNumber1);
            addField(pdfDoc, 'ID/Certificate Number', formData.idNumber1);
            addField(pdfDoc, 'Employer / School', formData.employerForInsurance1);
            pdfDoc.moveDown();
            addField(pdfDoc, 'Secondary Insurance Holder', formData.nameOfInsured2);
            addField(pdfDoc, 'Birthdate of Insurance Holder', formatDate(formData.birthdateOfInsured2));
            addField(pdfDoc, 'Relationship', formData.relationshipToInsured2);
            addField(pdfDoc, 'Insurance Carrier', formData.insuranceCarrier2);
            addField(pdfDoc, 'Policy/Group/Plan #', formData.policyNumber2);
            addField(pdfDoc, 'ID/Certificate Number', formData.idNumber2);
            addField(pdfDoc, 'Employer / School', formData.employerForInsurance2);

            pdfDoc.moveDown();
            addSectionTitle(pdfDoc, 'Medical History');
            addField(pdfDoc, 'When was your last medical checkup?', formData.lastMedicalCheckup);
            addField(pdfDoc, 'Are you currently taking any prescribed medications?', formData.medicationListing, highlight = true);
            addField(pdfDoc, 'Do you smoke or chew tobacco products?', formData.smoking, highlight = true);
            addField(pdfDoc, 'Do you consume alcohol or use recreational drugs?', formData.alcohol, highlight = true);
            addField(pdfDoc, 'Have you had a serious injury in the past?', formData.seriousInjury, highlight = true);
            addField(pdfDoc, 'Injury Details', formData.seriousInjuryDetails, highlight = true);
            addField(pdfDoc, 'Are you allergic to or have reacted adversely to any of the following?', formData.allergies.join(', '), highlight = true);
            addField(pdfDoc, 'Other Allergies', formData.otherAllergies, highlight = true);
            addField(pdfDoc, 'Do you use any medical devices or require special medical care?', formData.devices.join(', '), highlight = true);
            addField(pdfDoc, 'Other Devices', formData.otherDevices, highlight = true);
            addField(pdfDoc, 'Do you have or have you had any of the following conditions?', formData.conditions.join(', '), highlight = true);
            addField(pdfDoc, 'Other Conditions', formData.otherConditions, highlight = true);
            addField(pdfDoc, 'Conditions Explanation', formData.conditionsExplanation, highlight = true);

            pdfDoc.moveDown();
            addSectionTitle(pdfDoc, 'Dental History');
            addField(pdfDoc, 'What concerns you most about your dental health?', formData.dentalConcerns);
            addField(pdfDoc, 'Are you currently experiencing any pain or discomfort?', formData.painRightNow, highlight = true);
            addField(pdfDoc, 'Pain Details', formData.painRightNowDetails, highlight = true);
            addField(pdfDoc, 'Last Dental Visit', formData.lastDentalVisit);
            addField(pdfDoc, 'Last Dental Cleaning', formData.lastDentalCleaning);
            addField(pdfDoc, 'Last Dental X-Rays', formData.lastXRays);
            addField(pdfDoc, 'Do your gums bleed when brushing?', formData.gumBleeding, highlight = true);
            addField(pdfDoc, 'Do you experience pain or swelling in the gums?', formData.gumSwelling, highlight = true);
            addField(pdfDoc, 'Have you experienced any of the following dental problems?', formData.dentalProblems.join(', '), highlight = true);
            addField(pdfDoc, 'Other Dental Problems', formData.otherDentalProblems, highlight = true);
            addField(pdfDoc, 'Have you ever had an upsetting experience at a dental office?', formData.upsettingExperience);
            addField(pdfDoc, 'Experience Details', formData.upsettingExperienceDetails);
            addField(pdfDoc, 'Is there anything that bothers you about receiving dental treatment?', formData.botherDental);
            addField(pdfDoc, 'Bother Details', formData.botherDentalDetails);
            addField(pdfDoc, 'What features of your smile would you like to change, if any?', formData.smileChange);
            addField(pdfDoc, 'Smile Change Details', formData.smileChangeDetails);
            addField(pdfDoc, 'Have you been advised to take premedication before dental treatment?', formData.premedication, highlight = true);
            addField(pdfDoc, 'Premedication Details', formData.premedicationDetails, highlight = true);


            pdfDoc.addPage()
            addField(pdfDoc, 'By submitting this form, I confirm that the information provided is accurate and complete to the best of my knowledge. I understand that providing false or misleading information may affect my care and that I am responsible for updating Smiline Family Dentistry with any changes to my health information',
                formData.factualInfo ? 'I Agree' : 'I Do Not Agree', highlight = true, noBold = true);
            pdfDoc.moveDown();
            addField(pdfDoc, "At Smiline Family Dentistry, your privacy is our priority. We are committed to protecting your personal health information in compliance with Ontario's Personal Health Information Protection Act (PHIPA) and Canada's Personal Information Protection and Electronic Documents Act (PIPEDA). We collect and use your personal information to provide you with safe and effective dental care. We follow industry-standard security practices, including data encryption and access controls, to protect your information from unauthorized access or disclosure. You have the right to access your information and request corrections if necessary. You may withdraw your consent at any time. If you choose to do so, please inform our staff, and we will discontinue the collection of your information. Your personal information will only be kept for as long as necessary to fulfill the purpose for which it was collected or as required by law. After this period, it will be securely deleted from our systems. For more information on our privacy practices or to make a request regarding your personal information, please contact us at contact@smilinedentistry.ca. By proceeding, you consent to the collection, use, and storage of your information as outlined in this notice",
                formData.factualInfo ? 'I Agree' : 'I Do Not Agree', highlight = true, noBold = true);

            pdfDoc.moveDown();
            // pdfDoc.addPage()

            // Convert SVG to PNG and add to PDF
            addField(pdfDoc, 'Date', getTodayDate());
            pdfDoc.text(`${formData.lastName}, ${formData.firstName} ${formData.middleName}`);
            if (formData.signature) {
                const svgBuffer = Buffer.from(formData.signature, 'utf-8');
                const pngBuffer = await sharp(svgBuffer)
                    .toFormat('png')
                    .toBuffer();

                // Add the PNG to the PDF (set width and height as needed)
                // pdfDoc.text('Signature:');
                pdfDoc.image(pngBuffer, { width: 200, height: 100 });

            }



            pdfDoc.end();
        } catch (error) {
            console.error('Error generating PDF:', error);
            res.status(500).send({ error: 'Failed to generate PDF' });
        }
    });

