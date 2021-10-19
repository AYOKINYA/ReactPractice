import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";

const CalendarUI = () => {

    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
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
                renderFooter={() => (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDayRange({
                            from: null,
                            to: null
                          })
                        }}
                        style={{
                          border: '#0fbcf9',
                          color: '#fff',
                          borderRadius: '0.5rem',
                          padding: '1rem 2rem',
                        }}
                      >
                        Reset Value!
                      </button>
                    </div>
                  )}
            />

        </div>
    )
}

export default CalendarUI;
