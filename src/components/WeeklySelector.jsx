import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';
import { WeekdayButton } from './ui/WeekdayButton';

const WeeklySelector = () => {
    const { weekdays, toggleWeekday } = useRecurrenceStore();
    const days = [
        { key: 'MO', name: 'Monday' }, { key: 'TU', name: 'Tuesday' }, { key: 'WE', name: 'Wednesday' },
        { key: 'TH', name: 'Thursday' }, { key: 'FR', name: 'Friday' }, { key: 'SA', name: 'Saturday' },
        { key: 'SU', name: 'Sunday' },
    ];

    return (
        <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Repeat On</label>
            <div className="flex flex-wrap gap-2">
                {days.map(day => (
                    <WeekdayButton 
                        key={day.key} 
                        day={day.key.slice(0, 1)} 
                        longName={day.name}
                        onClick={() => toggleWeekday(day.key)} 
                        isActive={weekdays[day.key]}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeeklySelector;