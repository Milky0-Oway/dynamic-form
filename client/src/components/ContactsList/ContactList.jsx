import { useEffect, useState } from "react";
import styles from './ContactList.module.css';

export const ContactList = () => {
    const [error, setError] = useState('');
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(
                    'http://localhost:5000/contacts',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );

                const data = await response.json();

                setContacts(data);
            } catch (error) {
                setError(`Error fetching contacts: ${error}`);
            }
        }

        fetchContacts();
    }, [])

    return(<>{error ? (
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
                <th className={styles.head}>Communication Method</th>
                <th className={styles.head}>Additional Info</th>
                <th className={styles.head}>Addresses</th>
                <th className={styles.head}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => (
                <tr key={contact.id}>
                <td className={styles.data}>{contact.firstName}</td>
                <td className={styles.data}>{contact.lastName}</td>
                <td className={styles.data}>{contact.email}</td>
                <td className={styles.data}>{contact.phone || '-'}</td>
                <td className={styles.data}>{contact.contactType}</td>
                <td className={styles.data}>{contact.status}</td>
                <td className={styles.data}>{contact.communicationMethod}</td>
                <td className={styles.data}>
                    {contact.communicationMethod === 'Email' ? (
                    <>
                        <strong>Importance:</strong> {contact.importance} <br />
                        <strong>Note:</strong> {contact.note}
                    </>
                    ) : (
                    <>
                        <strong>Phone Type:</strong> {contact.phoneType} <br />
                        <strong>Comment:</strong> {contact.phoneComment}
                    </>
                    )}
                </td>
                <td className={styles.data}>
                    {contact.addresses.map((address, index) => (
                    <div key={index}>
                        <strong>{address.addressName}</strong>: {address.city}, {address.country}
                    </div>
                    ))}
                </td>
                <td className={styles.data}>
                    <button className={styles.edit}>
                    Edit
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    )}</>)
}