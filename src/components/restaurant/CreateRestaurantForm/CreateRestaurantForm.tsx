import { ChangeEvent, useState } from 'react';

interface CreateRestaurantFormProps {
    onSave: (name: string) => void;
}

const CreateRestaurantForm = ({ onSave }: CreateRestaurantFormProps): JSX.Element => {
    const [name, setName] = useState('');

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onSaveClick = () => {
        onSave(name);
    };

    return (
        <div>
            <input type='text' data-testid='new-restaurant-name' value={name} onChange={onNameChange} />
            <button type='button' data-testid='save-restaurant-button' onClick={onSaveClick}>
                Save
            </button>
        </div>
    );
};

export default CreateRestaurantForm;
