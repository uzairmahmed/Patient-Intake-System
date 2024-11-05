import { Button, Link } from '@nextui-org/react';
import type { FC } from 'react';
import Logo from '../assets/LogoLightHorizontal.svg'

interface TitleScreenProps {
    enterForm: () => void;
}

const TitleScreen: FC<TitleScreenProps> = ({ enterForm }) => {
    return (
        <div className="flex flex-col h-screen purple-dark text-foreground bg-background">
            <div className="flex flex-col h-full justify-between items-center gap-10">
                <div className='flex flex-col h-full justify-center gap-10'>
                    <div className='flex'>
                        <img className='h-32' src={Logo} alt="React Logo" />
                    </div>
                    <div className='w-[500px]'>
                        <h2 className='text-center mt-10 text-2xl font-bold'>Welcome!</h2>
                        <h2 className='text-center mt-10 text-md'>We are committed to providing personalized, high-quality care for all our patients. Please take a few moments to complete this form accurately. Your responses will help us understand your dental and medical history, enabling us to offer you the best possible care.</h2>
                        <h2 className='text-center mt-10 text-md font-semibold'>Thank you for choosing Smiline Dentistry!</h2>
                    </div>
                    <Button color="primary" variant="flat" onClick={enterForm}>
                        Begin
                    </Button>
                </div>
                <h1 className='text-gray-50 mt-1'>{"Made by Uzi <3"}</h1>
            </div>
        </div>
    );
}
export default TitleScreen;