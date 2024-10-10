import React from 'react';
import styles from './Input.module.css';

export const Input = React.forwardRef(
    ({ error, label, id, type = 'text', register, required, ...rest }, ref) => {
        return (
            <div className={styles.field}>
                <label htmlFor={id}>{label}</label>
                <input
                    ref={ref}
                    className={styles.input}
                    id={id}
                    type={type}
                    {...register}
                    {...rest}
                    required={required}
                />
                {error && <p className={styles.error}>{error.message}</p>}
            </div>
        );
    },
);

Input.displayName = 'Input';
