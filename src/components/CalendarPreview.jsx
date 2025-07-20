import { addMonths, eachDayOfInterval, endOfMonth, format, getDay, isSameDay, startOfMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { generateRecurringDates } from '../lib/dateLogic';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const CalendarPreview = () => {
    const settings = useRecurrenceStore();
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    const recurringDates = useMemo(() => generateRecurringDates(settings), [settings]);
    
    useEffect(() => {
        setCurrentMonth(settings.startDate || new Date());
    }, [settings.startDate]);

    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start, end });
    const startingDayOfWeek = getDay(start);

    const changeMonth = (amount) => {
        setCurrentMonth(prev => addMonths(prev, amount));
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
                <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-gray-100"><ChevronLeft size={20} /></button>
                <h3 className="font-semibold text-lg text-gray-800">{format(currentMonth, 'MMMM yyyy')}</h3>
                <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-gray-100"><ChevronRight size={20} /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2">
                {Array.from({ length: startingDayOfWeek }).map((_, i) => <div key={`empty-${i}`} />)}
                {daysInMonth.map(day => {
                    const isSelected = recurringDates.some(d => isSameDay(d, day));
                    const isToday = isSameDay(day, new Date());
                    return (
                        <div
                            key={day.toString()}
                            className={`w-full aspect-square flex items-center justify-center rounded-full text-sm
                                ${isToday ? 'font-bold' : ''}
                                ${isSelected ? 'bg-indigo-500 text-white' : 'text-gray-700'}
                            `}
                        >
                            {format(day, 'd')}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarPreview;
