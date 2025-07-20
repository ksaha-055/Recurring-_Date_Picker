import React from "react";

export const OptionButton = ({ children, onClick, isActive }) => (
    <button
        type="button"
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isActive
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
    >
        {children}
    </button>
);
