import React from 'react';

interface QuestionWithTextProps {
    question: string; // The question text
}

const QuestionWithText: React.FC<QuestionWithTextProps> = ({ question }) => {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-4 items-center">
            {/* Question - 5 cols */}
            <div className="col-span-5">
                <h3 className="font-semibold">{question}</h3>
            </div>

            {/* Empty space - 7 cols */}
            <div className="col-span-7"></div>
        </div>
    );
};

export default QuestionWithText;
