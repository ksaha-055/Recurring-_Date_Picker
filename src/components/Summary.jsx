import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const Summary = () => {
    const summaryText = useRecurrenceStore((state) => state.getSummary());

    return (
        <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
            <p className="text-sm font-medium text-indigo-800">{summaryText}</p>
        </div>
    );
};

export default Summary;
