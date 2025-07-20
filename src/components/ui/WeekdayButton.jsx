import React from 'react';

export const WeekdayButton = ({ day, longName, onClick, isActive }) => (
     <button
        type="button"
        onClick={onClick}
        aria-label={longName}
        className={`w-10 h-10 flex items-center justify-center font-semibold rounded-full transition-all duration-200 text-sm ${
            isActive
                ? 'bg-indigo-600 text-white scale-110 shadow-lg'
                : 'bg-gray-200 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700'
        }`}
    >
        {day}
    </button>
);