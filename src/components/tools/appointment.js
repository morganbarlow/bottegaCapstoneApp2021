import React from "react";

import DayOfWeek from "./day-of-week";
import Calendar from "./calendar"

export default function appointment(props) {
    const calendarBoxes = []
    
    for (let i=0; i<props.startDay; i++) {
        calendarBoxes.push(
            <Calendar 
                key={`${props.monthId}-${i}-P`}
                monthId = {props.monthId}
                date={props.daysInPreviousMonth - (props.startDay - (i+1))}
                overflow
            />
        )
    }
    for (let i=1; i<=props.daysInMonth; i++) {
        calendarBoxes.push(
            <Calendar 
                key={`${props.monthId}-${i}-N`} 
                monthId = {props.monthId}
                date={i}
            /> 
        )
    }
    for (let i=0; i<(42 - props.daysInMonth) - props.startDay; i++) {
        calendarBoxes.push(
            <Calendar 
                key={`${props.monthId}-${i}`}
                monthId = {props.monthId} 
                date={i} 
                overflow
            />
        )
    }
    
    return (
        <div className = "appointment-day">
            <DayOfWeek day="Sunday"/>
            <DayOfWeek day="Monday"/>
            <DayOfWeek day="Tuesday"/>
            <DayOfWeek day="Wednesday"/>
            <DayOfWeek day="Thursday"/>
            <DayOfWeek day="Friday"/>
            <DayOfWeek day="Saturday"/>

            <Calendar/>
        </div>
    )
}
