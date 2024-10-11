import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import styles from './AddressFields.module.css';
import classNames from 'classnames';

export const AddressFields = ({ fields, register, remove }) => {
    return (
        <>
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className={classNames(styles.fieldGroup, styles.fullWidth)}
                >
                    <Input
                        label="Address Name"
                        id={`addresses[${index}].addressName`}
                        {...register(`addresses[${index}].addressName`)}
                    />
                    <Select
                        label="Country"
                        id={`addresses[${index}].country`}
                        {...register(`addresses[${index}].country`)}
                        options={[
                            { value: 'USA', label: 'USA' },
                            { value: 'Canada', label: 'Canada' },
                            { value: 'UK', label: 'UK' },
                        ]}
                    />
                    <button
                        className={styles.button}
                        type="button"
                        onClick={() => remove(index)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </>
    );
};
