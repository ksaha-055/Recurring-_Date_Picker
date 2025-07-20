import { format } from 'date-fns';
import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const DateRangePicker = () => {
    const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

    const handleDateChange = (setter) => (e) => {
        const dateValue = e.target.value;
        if (dateValue) {
            setter(new Date(dateValue + 'T00:00:00'));
        } else {
            setter(null);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="start-date" className="text-sm font-medium text-gray-700 mb-2 block">Starts On</label>
                <input
                    id="start-date"
                    type="date"
                    value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
                    onChange={handleDateChange(setStartDate)}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="end-date" className="text-sm font-medium text-gray-700 mb-2 block">Ends On (Optional)</label>
                <input
                    id="end-date"
                    type="date"
                    value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
                    onChange={handleDateChange(setEndDate)}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
        </div>
    );
};

export default DateRangePicker;
