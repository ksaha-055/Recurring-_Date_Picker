import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';
import CalendarPreview from './CalendarPreview';
import DateRangePicker from './DateRangePicker';
import FrequencyTabs from './FrequencyTabs';
import { IntervalInput } from './IntervalInput';
import MonthlySelector from './MonthlySelector';
import WeeklySelector from './WeeklySelector';

const RecurringDatePicker = () => {
    const frequency = useRecurrenceStore((state) => state.frequency);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-6 max-w-4xl mx-auto">
            {/* Left side: Controls */}
            <div className="space-y-6">
                <FrequencyTabs />
                <IntervalInput />
                {frequency === 'weekly' && <WeeklySelector />}
                {frequency === 'monthly' && <MonthlySelector />}
                <DateRangePicker />
            </div>

            {/* Right side: Preview */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                        <CalendarIcon className="mr-2 h-5 w-5 text-indigo-600" />
                        Preview
                    </h3>
                    <CalendarPreview />
                </div>
            </div>
        </div>
    );
};

export default RecurringDatePicker;