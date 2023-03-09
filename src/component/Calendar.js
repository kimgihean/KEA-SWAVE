import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './css/Calendar.css';
const Calendar = () => {
  return (
    <div className="App">
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]}
              events={[
                  { title: 'event 1', start: '2023-03-09', end:'2023-03-11' },
                  { title: 'event 2', date: '2023-03-10' }
              ]}
            />
          </div>
  )
}

export default Calendar