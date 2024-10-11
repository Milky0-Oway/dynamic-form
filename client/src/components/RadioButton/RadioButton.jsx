import styles from './RadioButton.module.css';
import React from 'react';

export const RadioButton = React.forwardRef(
    ({ label, value, register, ...rest }, ref) => {
        return (
            <div className={styles.field}>
                <input
                    ref={ref}
                    className={styles.input}
                    type="radio"
                    id={value}
                    value={value}
                    {...register}
                    {...rest}
                />
                <label className={styles.label} htmlFor={value}>
                    {label}
                </label>
            </div>
        );
    },
);

RadioButton.displayName = 'RadioButton';
