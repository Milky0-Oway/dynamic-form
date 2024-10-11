import { useNavigate } from 'react-router-dom';
import { ContactList } from '../../components/ContactsList/ContactList';
import styles from './List.module.css';

export const List = () => {
    const navigate = useNavigate();
    
    const handleCreate = () => {
        navigate('/create');
    };

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>List of contacts</h1>
                    <button
                        className={styles.create}
                        onClick={handleCreate}
                        aria-label="Create New Contact"
                    >
                        Create New Contact
                    </button>
            </header>
            <section>
                <ContactList />
            </section>
        </main>
    );
};
