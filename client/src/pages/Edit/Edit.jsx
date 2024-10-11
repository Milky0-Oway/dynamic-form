import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from '../../components/Form/Form';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Edit.module.css';

export const Edit = () => {
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/contacts/${id}`,
                );
                setContact(response.data);
            } catch (error) {
                setError(`Error fetching contact: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchContact();
    }, [id]);

    const handleFormSubmit = async (data) => {
        const payload = {};

        Object.keys(data).forEach((key) => {
            if (key === 'addresses') {
                const addr = [];
                data[key].forEach((item) => {
                    if (item.addressName && item.country) {
                        addr.push(item);
                    }
                });
                if (JSON.stringify(addr) !== JSON.stringify(contact[key]))
                    payload[key] = addr;
            } else if (data[key] !== contact[key]) {
                payload[key] = data[key];
            }
        });

        try {
            const response = await axios.put(
                `http://localhost:5000/contacts/${id}`,
                payload,
            );

            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            setError(`Error submitting the form: ${error}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.edit}>
            <h1>Edit Contact</h1>
            {contact && (
                <Form initialValue={contact} onSubmit={handleFormSubmit} />
            )}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};
