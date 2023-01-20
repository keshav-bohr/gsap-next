import styles from '../styles/Clock.module.scss'

export default function Clock() {
    return <div>
        <div className={styles.clock_container}>
            <div className={styles.clock}>
                <div className={styles.clock_centre}></div>
                <div className={`${styles.clock_hour_hand} ${styles.hand}`}></div>
                <div className={`${styles.clock_minute_hand} ${styles.hand}`}></div>
                <div className={`${styles.clock_second_hand} ${styles.hand}`}></div>
            </div>
        </div>
    </div>
}