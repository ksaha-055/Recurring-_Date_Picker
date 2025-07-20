import { format, getDate } from 'date-fns';
import { create } from 'zustand';

export const useRecurrenceStore = create((set, get) => ({
    // --- Core Settings ---
    frequency: 'daily',
    startDate: new Date(),
    endDate: null,
    interval: 1,
    weekdays: { MO: false, TU: false, WE: false, TH: false, FR: false, SA: false, SU: false },
    monthlyConfig: {
        type: 'day-of-month',
        day: getDate(new Date()),
        weekOrder: 'first',
        weekday: 'MO',
    },

    // --- Actions ---
    setFrequency: (frequency) => set({ frequency, interval: 1 }),
    setStartDate: (startDate) => set({ startDate }),
    setEndDate: (endDate) => set({ endDate }),
    setInterval: (interval) => set({ interval: Math.max(1, parseInt(interval, 10) || 1) }),
    toggleWeekday: (day) => set((state) => ({
        weekdays: { ...state.weekdays, [day]: !state.weekdays[day] }
    })),
    setMonthlyConfig: (config) => set((state) => ({
        monthlyConfig: { ...state.monthlyConfig, ...config }
    })),

    // --- Derived State & Logic ---
    getSummary: () => {
        const { frequency, interval, startDate, endDate, weekdays, monthlyConfig } = get();
        if (!startDate) return "Invalid date";
        
        // FIX: Handle 'daily' case correctly
        const unit = frequency === 'daily' ? 'day' : frequency.replace('ly', '');
        let summary = `Occurs every ${interval > 1 ? interval : ''} ${unit}${interval > 1 ? 's' : ''}`;
        
        switch (frequency) {
            case 'weekly':
                const selectedDays = Object.entries(weekdays)
                    .filter(([, isSelected]) => isSelected)
                    .map(([day]) => day)
                    .join(', ');
                if (selectedDays) summary += ` on ${selectedDays}`;
                break;
            case 'monthly':
                if (monthlyConfig.type === 'day-of-month') {
                    summary += ` on day ${monthlyConfig.day}`;
                } else {
                    summary += ` on the ${monthlyConfig.weekOrder} ${monthlyConfig.weekday}`;
                }
                break;
        }

        summary += ` starting ${format(startDate, 'MMM d, yyyy')}`;
        if (endDate) {
            summary += ` until ${format(endDate, 'MMM d, yyyy')}`;
        }
        return summary;
    },
}));