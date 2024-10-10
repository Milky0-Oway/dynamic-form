import React from 'react';
import styles from './Select.module.css';

export const Select = React.forwardRef(
    ({ error, label, id, options, register, required, ...rest }, ref) => {
        return (
            <div className={styles.field}>
                <label htmlFor={id}>{label}</label>
                <select
                    ref={ref}
                    className={styles.select}
                    id={id}
                    {...register}
                    {...rest}
                    required={required}
                >
                    {options.map((option) => (
                        <option
                            className={styles.option}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p className={styles.error}>{error.message}</p>}
            </div>
        );
    },
);

Select.displayName = 'Select';
