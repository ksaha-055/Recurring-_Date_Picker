import React from 'react';
import RecurringDatePicker from './components/RecurringDatePicker';
import Summary from './components/Summary';

function App() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto p-4 sm:p-8">
                <header className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Recurring Date Picker</h1>
                    <p className="text-gray-600 mt-2">A component for selecting complex recurrence rules.</p>
                </header>

                <main className="bg-white rounded-xl shadow-lg border border-gray-200/80">
                    <RecurringDatePicker />
                    <div className="p-4 md:p-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                           Resulting Rule
                        </h3>
                        <Summary />
                    </div>
                </main>
                
                <footer className="text-center mt-8 text-sm text-gray-500">
                    <p>Built with React, Zustand, Tailwind CSS, and date-fns.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;