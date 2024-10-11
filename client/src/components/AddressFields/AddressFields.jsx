import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import styles from './AddressFields.module.css';

export const AddressFields = ({ fields, register }) => {
    return (
        <>
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className={`${styles.fieldGroup} ${styles.fullWidth}`}
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
                </div>
            ))}
        </>
    );
};
