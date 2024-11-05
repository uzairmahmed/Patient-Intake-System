import { functions } from './firebase'; // Import your Firebase and App Check instances
import { httpsCallable } from 'firebase/functions';


export async function submitFormData(formData: any) {
    try {
        const payload = {
            formData: formData
        }

        const generatePdfAndUpload = httpsCallable(functions, 'generatePdfAndUpload');
        const result = await generatePdfAndUpload(payload);

        return true;
    } catch (error) {
        console.error('Error submitting form data:', error);
        return false;
    }
}
