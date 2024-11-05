import { Button, Link } from '@nextui-org/react';
import React from 'react';
import { HiX } from "react-icons/hi";

interface FormPageErrorProps {
    onBack: () => void;
    onReSubmit: () => void;
}


const FormPageError: React.FC<FormPageErrorProps> = ({ onBack, onReSubmit }) => {

    return (
        <div className="flex flex-col h-full justify-between items-center gap-10">
            <div className='bg-red-600 rounded-full p-10'>
                <HiX color='white' size={100} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-center mt-10 text-2xl font-bold'>Something went Wrong.</h2>
                <p className='text-center mt-2 text-lg'>Please Try Again</p>
            </div>
            <Button as={Link} color="primary" href="#" variant="flat" onClick={() => onBack()}>
                Back
            </Button>
            <Button as={Link} color="primary" href="#" variant="flat" onClick={() => onReSubmit()}>
                Try Submitting Again
            </Button>

        </div>

    );
};

export default FormPageError;
