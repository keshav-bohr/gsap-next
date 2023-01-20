import { useState, useEffect } from 'react'
import styles from '../styles/Clock.module.scss'

export default function Clock() {
    const [hourHandAngle, setHourHandAngle] = useState(0)
    const [minuteHandAngle, setMinuteHandAngle] = useState(0)
    const [secondHandAngle, setSecondHandAngle] = useState(0)

    const setAngle = () => {
        const now = new Date()
        const seconds = now.getSeconds();
        const mins = now.getMinutes()
        const hour = now.getHours();
        const secondsDegrees = (seconds / 60) * 360
        const minutesDegrees = ((mins / 60) * 360) + ((seconds/60)*6)
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30)

        setSecondHandAngle(secondsDegrees)
        setMinuteHandAngle(minutesDegrees)
        setHourHandAngle(hourDegrees)
    }

    useEffect(() => {
        setInterval(() => {
            setAngle()
        }, 1000);
    }, [])
    

    return <div>
        <div className={styles.clock_container}>
            <div className={styles.clock}>
                <div className={`${styles.marking}`}></div>
                <div className={`${styles.horizontal_marking} ${styles.marking}`}></div>
                <div className={`${styles.marking} ${styles.other_marking} ${styles.marking_a}`}></div>
                <div className={`${styles.marking} ${styles.other_marking} ${styles.marking_b}`}></div>
                <div className={`${styles.marking} ${styles.other_marking} ${styles.marking_c}`}></div>
                <div className={`${styles.marking} ${styles.other_marking} ${styles.marking_d}`}></div>
                <div className={`${styles.inner_circle}`}></div>
                <div className={styles.clock_centre}></div>
                <div className={`${styles.clock_hour_hand} ${styles.hand}`} style={{transform: `rotate(${hourHandAngle}deg)`}}></div>
                <div className={`${styles.clock_minute_hand} ${styles.hand}`} style={{transform: `rotate(${minuteHandAngle}deg)`}}></div>
                <div className={`${styles.clock_second_hand} ${styles.hand}`} style={{transform: `rotate(${secondHandAngle}deg)`}}></div>
            </div>
        </div>
    </div>
}