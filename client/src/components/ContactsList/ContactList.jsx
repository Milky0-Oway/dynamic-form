import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactList.module.css';
import { ContactRow } from '../ContactRow/ContactRow';

export const ContactList = () => {
    const [error, setError] = useState('');
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('http://localhost:5000/contacts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                setContacts(data);
            } catch (error) {
                setError(`Error fetching contacts: ${error}`);
            }
        };

        fetchContacts();
    }, []);

    const handleEditClick = (contactId) => {
        navigate(`/edit/${contactId}`);
    };

    return (
        <>
            {error ? (
                <div>{error}</div>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.head}>First Name</th>
                            <th className={styles.head}>Last Name</th>
                            <th className={styles.head}>Email</th>
                            <th className={styles.head}>Phone</th>
                            <th className={styles.head}>Contact Type</th>
                            <th className={styles.head}>Status</th>
                            <th className={styles.head}>
                                Communication Method
                            </th>
                            <th className={styles.head}>Additional Info</th>
                            <th className={styles.head}>Addresses</th>
                            <th className={styles.head}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <ContactRow
                                key={contact.id}
                                contact={contact}
                                onEdit={handleEditClick}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
