import { Link } from 'react-router-dom';
import { ContactList } from '../../components/ContactsList/ContactList';
import styles from './List.module.css';

export const List = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>List of contacts</h1>
                <Link to="/create">
                    <button
                        className={styles.create}
                        aria-label="Create New Contact"
                    >
                        Create New Contact
                    </button>
                </Link>
            </header>
            <section>
                <ContactList />
            </section>
        </main>
    );
};
