import React from 'react';
import { useRecurrenceStore } from '../store/useRecurrenceStore';
import { OptionButton } from './ui/OptionButton';

const FrequencyTabs = () => {
    const { frequency, setFrequency } = useRecurrenceStore();
    const options = ['daily', 'weekly', 'monthly', 'yearly'];

    return (
        <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Frequency</label>
            <div className="flex space-x-2">
                {options.map((opt) => (
                    <OptionButton key={opt} onClick={() => setFrequency(opt)} isActive={frequency === opt}>
                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </OptionButton>
                ))}
            </div>
        </div>
    );
};

export default FrequencyTabs;
