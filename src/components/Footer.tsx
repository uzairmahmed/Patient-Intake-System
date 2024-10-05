import { Button, Progress } from '@nextui-org/react';
import type { FC } from 'react';

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (<>
        <div className="h-16 bg-background border-t p-10">
            <div className="flex flex-row h-full items-center gap-10">
                <h2 className='w-1/4'>25% complete</h2>
                <Progress aria-label="Loading..." value={25} className="" color="primary" />
                <Button color="primary">
                    Next
                </Button>
            </div>
        </div>
    </>);
}
export default Footer;