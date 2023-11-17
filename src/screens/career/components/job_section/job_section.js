import React, {useEffect, useState} from "react";
import styles from './job_section.module.css';

export default function JobSection({company, start, end, position }) {
    const [time, setTime] = useState("");
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const calculateTimeDifference = () => {
        let tempStart = "01/" + start;
        let tempEnd = "01/" + end;
        const startDate = new Date(tempStart.split('/').reverse().join('/'));
        const endDate = end ? new Date(tempEnd.split('/').reverse().join('/')) : new Date();

        const diffInMilliseconds = Math.abs(endDate - startDate);

        const years = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const months = Math.floor((diffInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));

        return `${years < 1 ? '' : years + ` year${years > 1 ? 's' : ''}, `}${months < 1 ? 1 : months} month${months > 1 ? 's' : ''}`;
    };

    const formattedDate = (date) => {
        const month = date[0] + date[1];
        return monthNames[parseInt(month) - 1] + " " + date.split('/')[1];
    }

    useEffect(() => {
        setTime(calculateTimeDifference(start, end));
    }, [start, end]);

    return (
        <div className={styles.container}>
            <div style={{
                fontWeight: 600,
                fontSize: '1.2rem'
            }}>{company}</div>
            <div>{position}</div>
            <div style={{
                display: 'flex',

            }}>
                <div style={{color: '#ddd'}}>{formattedDate(start)} - {end ? formattedDate(end) : "Today"}</div>
                <div style={{paddingLeft: '0.2rem', color: '#ddd',}}>({time})</div>
            </div>

        </div>
    )
}