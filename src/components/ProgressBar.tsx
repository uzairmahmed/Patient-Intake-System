import { Button, Progress } from '@nextui-org/react';
import type { FC } from 'react';

interface ProgressBarProps {
    currentPage: number;
    totalPages: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ currentPage, totalPages }) => {
    return (
        <div className="h-16 bg-background px-10">
            <div className="flex flex-row h-full items-center gap-10">
                <Progress
                    label={`Step ${currentPage + 1} of ${totalPages}`}
                    value={((currentPage) / totalPages) * 100}
                    color="primary"
                    showValueLabel={true}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
