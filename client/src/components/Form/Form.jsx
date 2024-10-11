import { useForm, useFieldArray } from 'react-hook-form';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { RadioButton } from '../RadioButton/RadioButton';
import styles from './Form.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AddressFields } from '../AddressFields/AddressFields';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .max(20, 'First Name cannot exceed 20 characters'),
    lastName: Yup.string()
        .required('Last Name is required')
        .max(20, 'Last Name cannot exceed 20 characters'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    contactType: Yup.string().required('Contact Type is required'),
});

export const Form = ({ onSubmit, initialValue }) => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValue || {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            contactType: '',
            status: 'Active',
            communicationMethod: 'Email',
            importance: '',
            note: '',
            phoneType: '',
            phoneComment: '',
            addresses: [{ addressName: '', country: '' }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'addresses',
    });

    const communicationMethod = watch('communicationMethod');

    const addAddress = () => {
        append({ addressName: '', country: '' });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                error={errors.firstName}
                label="First Name"
                id="firstName"
                {...register('firstName', { required: true })}
            />

            <Input
                error={errors.lastName}
                label="Last Name"
                id="lastName"
                {...register('lastName', { required: true })}
            />

            <Input
                error={errors.email}
                label="Email"
                type="email"
                id="email"
                {...register('email', { required: true })}
            />

            <Input label="Phone" id="phone" {...register('phone')} />

            <Select
                error={errors.contactType}
                label="Contact Type"
                id="contactType"
                {...register('contactType', { required: true })}
                options={[
                    { value: '', label: '' },
                    { value: 'Personal', label: 'Personal' },
                    { value: 'Work', label: 'Work' },
                    { value: 'Other', label: 'Other' },
                ]}
            />

            <Select
                label="Status"
                id="status"
                {...register('status', { required: true })}
                options={[
                    { value: 'Active', label: 'Active' },
                    { value: 'Inactive', label: 'Inactive' },
                ]}
            />

            <div className={`${styles.fullWidth} ${styles.radioGroup}`}>
                <label>Communication Method</label>
                <div className={styles.radioGroup}>
                    <RadioButton
                        label="Email"
                        value="Email"
                        name="communicationMethod"
                        register={register('communicationMethod', {
                            required: true,
                        })}
                    />
                    <RadioButton
                        label="Phone"
                        value="Phone"
                        name="communicationMethod"
                        register={register('communicationMethod', {
                            required: true,
                        })}
                    />
                </div>
            </div>

            {communicationMethod === 'Email' && (
                <>
                    <Select
                        label="Importance"
                        id="importance"
                        {...register('importance')}
                        options={[
                            { value: 'Primary', label: 'Primary' },
                            { value: 'Secondary', label: 'Secondary' },
                        ]}
                    />
                    <Input label="Note" id="note" {...register('note')} />
                </>
            )}

            {communicationMethod === 'Phone' && (
                <>
                    <Select
                        label="Phone Type"
                        id="phoneType"
                        {...register('phoneType')}
                        options={[
                            { value: 'Mobile', label: 'Mobile' },
                            { value: 'Work', label: 'Work' },
                            { value: 'Home', label: 'Home' },
                        ]}
                    />
                    <Input
                        label="Phone Comment"
                        id="phoneComment"
                        {...register('phoneComment')}
                    />
                </>
            )}

            <h3 className={styles.fullWidth}>Addresses</h3>
            <AddressFields
                fields={fields}
                register={register}
                remove={remove}
            />

            <button
                className={styles.button}
                type="button"
                onClick={addAddress}
            >
                Add Address
            </button>

            <button className={styles.button} type="submit">
                Save Contact
            </button>
        </form>
    );
};
