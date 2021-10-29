import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";

import './Calendar.css'

const CalendarUI = () => {

    const date = new Date();

    const defaultFrom = {
      year: date.getFullYear(),
      month: date.getMonth() < 12 ? date.getMonth() + 1 : 1,
      day: 13,
    };

    const defaultTo = {
      year: date.getFullYear(),
      month: date.getMonth() < 12 ? date.getMonth() + 1 : 1,
      day: 21,
    };

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: defaultFrom,
        to: defaultTo
      });

    const getHistory = (selectedDayRange) => {
        console.log(selectedDayRange);
        setSelectedDayRange(selectedDayRange);
        if (selectedDayRange.from && selectedDayRange.to) {
            console.log("Send Request to Server");
        }
    }

    return (
        <div>
            <Calendar
                value={selectedDayRange}
                onChange={selectedDayRange => getHistory(selectedDayRange)}
                colorPrimary="rgba(0,44,95,1)"
                colorPrimaryLight="rgba(191,205,217,1)"
                shouldHighlightWeekends
                calendarClassName="myCustomCalendar"
                renderFooter={() => (
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem' }}>
                <button
                  onClick={() => alert("hello")}
                  style={{
                    border: '#0fbcf9',
                    backgroundColor: '#0fbcf9',
                    borderRadius: '0.5rem',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    cursor: "pointer"
                  }}>Hello</button>
                  </div>
                  )}
            />
        </div>
    )
}

export default CalendarUI;
