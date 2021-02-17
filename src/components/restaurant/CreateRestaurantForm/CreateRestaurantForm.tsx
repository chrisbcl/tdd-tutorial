import { ChangeEvent, useState } from 'react';
import { Button, Row, TextInput } from 'react-materialize';

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
        <Row>
            <TextInput
                s={12}
                m={8}
                l={10}
                data-testid='new-restaurant-name'
                value={name}
                onChange={onNameChange}
                label='Restaurant Name'
            />
            <Button data-testid='save-restaurant-button' onClick={onSaveClick}>
                Save
            </Button>
        </Row>
    );
};

export default CreateRestaurantForm;
