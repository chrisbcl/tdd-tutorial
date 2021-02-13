import { ChangeEvent, useState } from 'react';
import { Button, TextInput } from 'react-materialize';

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
            <TextInput data-testid='new-restaurant-name' value={name} onChange={onNameChange} label='Restaurant Name' />
            <Button data-testid='save-restaurant-button' onClick={onSaveClick}>
                Save
            </Button>
        </div>
    );
};

export default CreateRestaurantForm;
