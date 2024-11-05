import { Button, Link } from '@nextui-org/react';
import React from 'react';
import { HiCheck } from "react-icons/hi";

interface FormPageFinalProps {
    onBack: () => void;
}


const FormPagePost: React.FC<FormPageFinalProps> = ({ onBack }) => {

    return (
        <div className="flex flex-col h-full justify-between items-center gap-10">
            <div className='bg-green-600 rounded-full p-10'>
                <HiCheck color='white' size={100} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-center mt-10 text-2xl font-bold'>Thank You for Submitting!</h2>
                <p className='text-center mt-2 text-lg'>We appreciate your response.</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="flat" onClick={() => onBack()}>
                Back
            </Button>
            <Button as={Link} color="primary" href="#" variant="flat" onClick={() => window.location.reload()}>
                Fill out Another Form
            </Button>

        </div>

    );
};

export default FormPagePost;
