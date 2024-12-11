export function isMarketHoliday(today: Date): boolean {
    const month = today.getMonth(); // January is 0, December is 11
    const date = today.getDate();
    const year = today.getFullYear();

    // List of fixed holidays
    const fixedHolidays = [
        { month: 0, date: 1, name: "New Year's Day" },         // January 1
        { month: 6, date: 4, name: "Independence Day" },       // July 4
        { month: 10, date: 11, name: "Veterans Day" },         // November 11
        { month: 11, date: 25, name: "Christmas Day" },        // December 25
        { month: 5, date: 19, name: "Juneteenth" }             // June 19 (Juneteenth)
    ];

    // Check if today is a fixed holiday
    for (const holiday of fixedHolidays) {
        if (month === holiday.month && date === holiday.date) {
            return true;  // a fixed holiday
        }
    }

    // Function to find the nth weekday of a given month and year
    function getNthWeekdayOfMonth(year: number, month: number, weekday: number, nth: number): Date {
        const firstDay = new Date(year, month, 1);
        const firstDayOfWeek = firstDay.getDay();
        const diff = (weekday - firstDayOfWeek + 7) % 7;
        const firstOccurrence = new Date(year, month, 1 + diff);
        return new Date(year, month, firstOccurrence.getDate() + (nth - 1) * 7);
    }

    // Martin Luther King Jr. Day (Third Monday of January)
    const mlkDay = getNthWeekdayOfMonth(year, 0, 1, 3); // January is month 0
    if (today.getMonth() === mlkDay.getMonth() && today.getDate() === mlkDay.getDate()) {
        return true;  //  Martin Luther King Jr. Day
    }

    // Presidents' Day (Third Monday of February)
    const presidentsDay = getNthWeekdayOfMonth(year, 1, 1, 3); // February is month 1
    if (today.getMonth() === presidentsDay.getMonth() && today.getDate() === presidentsDay.getDate()) {
        return true;  //  Presidents' Day
    }

    // Memorial Day (Last Monday of May)
    const memorialDay = getNthWeekdayOfMonth(year, 4, 1, 5); // May is month 4
    if (today.getMonth() === memorialDay.getMonth() && today.getDate() === memorialDay.getDate()) {
        return true;  //  Memorial Day
    }

    // Labor Day (First Monday of September)
    const laborDay = getNthWeekdayOfMonth(year, 8, 1, 1); // September is month 8
    if (today.getMonth() === laborDay.getMonth() && today.getDate() === laborDay.getDate()) {
        return true;  //  Labor Day
    }

    // Columbus Day (Second Monday of October)
    const columbusDay = getNthWeekdayOfMonth(year, 9, 1, 2); // October is month 9
    if (today.getMonth() === columbusDay.getMonth() && today.getDate() === columbusDay.getDate()) {
        return true;  //  Columbus Day
    }

    // Thanksgiving Day (Fourth Thursday of November)
    const thanksgivingDay = getNthWeekdayOfMonth(year, 10, 4, 4); // November is month 10
    if (today.getMonth() === thanksgivingDay.getMonth() && today.getDate() === thanksgivingDay.getDate()) {
        return true;  //  Thanksgiving Day
    }
    return false;
}

export function isWeekendNY (date : Date) : boolean {
    const newYorkDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York'}));
    const day = newYorkDate.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
}