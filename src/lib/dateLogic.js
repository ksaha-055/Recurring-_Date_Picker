import {
    addDays,
    addMonths,
    addWeeks,
    addYears,
    eachDayOfInterval,
    endOfMonth,
    getDate,
    getDay,
    isAfter, isBefore, isSameDay,
    lastDayOfMonth,
    set,
    startOfMonth
} from 'date-fns';

const WEEKDAY_MAP = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };
const DAY_MAP = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

function findNthWeekdayOfMonth(dateInMonth, weekOrder, dayOfWeek) {
    const monthStart = startOfMonth(dateInMonth);
    const monthEnd = endOfMonth(dateInMonth);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const matchingWeekdays = daysInMonth.filter(day => getDay(day) === dayOfWeek);

    const indexMap = { first: 0, second: 1, third: 2, fourth: 3 };

    if (weekOrder === 'last') {
        return matchingWeekdays[matchingWeekdays.length - 1] || null;
    }
    return matchingWeekdays[indexMap[weekOrder]] || null;
}

export function generateRecurringDates(settings) {
    const { frequency, interval, startDate, endDate, weekdays, monthlyConfig } = settings;
    if (!startDate) return [];
    const dates = [];
    let currentDate = new Date(startDate);
    const maxIterations = 500;
    let i = 0;

    while (i < maxIterations) {
        i++;
        if (endDate && isAfter(currentDate, endDate)) break;
        if (dates.length >= 100) break;

        switch (frequency) {
            case 'daily':
                if (isBefore(currentDate, startDate)) {
                     currentDate = addDays(currentDate, interval);
                     continue;
                }
                dates.push(new Date(currentDate));
                currentDate = addDays(currentDate, interval);
                break;
            case 'weekly':
                const dayOfWeekStr = DAY_MAP[getDay(currentDate)];
                if (weekdays[dayOfWeekStr] && !isBefore(currentDate, startDate)) {
                    dates.push(new Date(currentDate));
                }
                currentDate = addDays(currentDate, 1);
                if (getDay(currentDate) === getDay(startDate) && isAfter(currentDate, startDate)) {
                     if (interval > 1) {
                        currentDate = addWeeks(currentDate, interval - 1);
                     }
                }
                break;
            case 'monthly':
                let candidateDate;
                if (monthlyConfig.type === 'day-of-month') {
                    const dayOfMonth = monthlyConfig.day;
                    const lastDay = getDate(lastDayOfMonth(currentDate));
                    const targetDay = Math.min(dayOfMonth, lastDay);
                    candidateDate = set(currentDate, { date: targetDay });
                } else {
                    candidateDate = findNthWeekdayOfMonth(
                        currentDate,
                        monthlyConfig.weekOrder,
                        WEEKDAY_MAP[monthlyConfig.weekday]
                    );
                }
                if (candidateDate && !isBefore(candidateDate, startDate)) {
                    if (!dates.some(d => isSameDay(d, candidateDate))) {
                         dates.push(candidateDate);
                    }
                }
                currentDate = addMonths(startOfMonth(currentDate), interval);
                break;
            case 'yearly':
                let yearlyCandidate = set(currentDate, { 
                    month: startDate.getMonth(), 
                    date: startDate.getDate() 
                });

                if (!isBefore(yearlyCandidate, startDate)) {
                    dates.push(new Date(yearlyCandidate));
                }
                currentDate = addYears(currentDate, interval);
                break;
        }
    }
    return dates;
}
