import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

const MonthlySelector = () => {
    const { monthlyConfig, setMonthlyConfig } = useRecurrenceStore();
    const { type, day, weekOrder, weekday } = monthlyConfig;

    const weekOrders = ['first', 'second', 'third', 'fourth', 'last'];
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekdayKeys = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    return (
    
        <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Repeat On</label>
            <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <input
                        id="day-of-month"
                        type="radio"
                        name="monthly-type"
                        checked={type === 'day-of-month'}
                        onChange={() => setMonthlyConfig({ type: 'day-of-month' })}
                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="day-of-month" className="flex items-center space-x-2 text-sm text-gray-700">
                        <span>On day</span>
                        <input
                            type="number"
                            value={day}
                            onChange={(e) => setMonthlyConfig({ day: parseInt(e.target.value, 10) })}
                            disabled={type !== 'day-of-month'}
                            className="w-16 p-1 border border-gray-300 rounded-md disabled:bg-gray-100"
                            min="1" max="31"
                        />
                    </label>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <input
                        id="day-of-week"
                        type="radio"
                        name="monthly-type"
                        checked={type === 'day-of-week'}
                        onChange={() => setMonthlyConfig({ type: 'day-of-week' })}
                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="day-of-week" className="flex items-center flex-wrap gap-2 text-sm text-gray-700">
                        <span>On the</span>
                        <select
                            value={weekOrder}
                            onChange={(e) => setMonthlyConfig({ weekOrder: e.target.value })}
                            disabled={type !== 'day-of-week'}
                            className="p-1 border border-gray-300 rounded-md disabled:bg-gray-100"
                        >
                            {weekOrders.map(wo => <option key={wo} value={wo}>{wo}</option>)}
                        </select>
                        <select
                            value={weekday}
                            onChange={(e) => setMonthlyConfig({ weekday: e.target.value })}
                            disabled={type !== 'day-of-week'}
                            className="p-1 border border-gray-300 rounded-md disabled:bg-gray-100"
                        >
                            {weekdays.map((wd, i) => <option key={wd} value={weekdayKeys[i]}>{wd}</option>)}
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MonthlySelector;