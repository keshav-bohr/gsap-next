import styles from '../styles/Clock.module.scss'

export default function Clock() {
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
                <div className={`${styles.clock_hour_hand} ${styles.hand}`}></div>
                <div className={`${styles.clock_minute_hand} ${styles.hand}`}></div>
                <div className={`${styles.clock_second_hand} ${styles.hand}`}></div>
            </div>
        </div>
    </div>
}