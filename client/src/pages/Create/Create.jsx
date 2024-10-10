import styles from './Create.module.css';
import axios from 'axios';
import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (data) => {
        const payload = {};

        Object.keys(data).forEach((key) => {
            if (data[key]) {
                payload[key] = data[key];
            }
        });

        try {
            const response = await axios.post(
                'http://localhost:5000/contacts',
                payload,
            );

            if (response.status === 201) {
                navigate('/');
            }
        } catch (error) {
            setError(`Error submitting the form: ${error}`);
        }
    };

    return (
        <div className={styles.create}>
            <h1>Create new contact</h1>
            <Form onSubmit={handleFormSubmit} />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};
