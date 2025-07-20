import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

export const IntervalInput = () => {
    const { frequency, interval, setInterval } = useRecurrenceStore();
    const unit = frequency === 'daily' ? 'day' : frequency.replace('ly', '');

    return (
        <div>
            <label htmlFor="interval" className="text-sm font-medium text-gray-700 mb-2 block">
                Repeat Every
            </label>
            <div className="flex items-center space-x-2">
                <input
                    id="interval"
                    type="number"
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    className="w-20 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    min="1"
                />
                <span className="text-gray-700">{unit}{interval > 1 ? 's' : ''}</span>
            </div>
        </div>
    );
};
