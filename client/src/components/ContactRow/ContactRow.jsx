import styles from './ContactRow.module.css';

export const ContactRow = ({ contact, onEdit }) => {
    return (
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
                {contact.addresses ? (
                    contact.addresses.map((address) => (
                        <div key={address.addressName}>
                            <strong>{address.addressName}</strong>:{' '}
                            {address.country}
                        </div>
                    ))
                ) : (
                    <>-</>
                )}
            </td>
            <td className={styles.data}>
                <button
                    className={styles.edit}
                    onClick={() => onEdit(contact.id)}
                >
                    Edit
                </button>
            </td>
        </tr>
    );
};
