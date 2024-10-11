import styles from './Loader.module.css';

export const Loader = () => {
    return (
        <ul className={styles.loader}>
            <li className={styles.dot}></li>
            <li className={styles.dot}></li>
            <li className={styles.dot}></li>
            <li className={styles.dot}></li>
            <li className={styles.dot}></li>
        </ul>
    );
};
