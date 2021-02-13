import { useState } from 'react';
import { Button, Modal, Row } from 'react-materialize';
import CreateRestaurantForm from '../CreateRestaurantForm/CreateRestaurantForm';
import RestaurantList from '../RestaurantList/RestaurantList';

const RestaurantListPage = (): JSX.Element => {
    const [restaurantNames, setRestaurantNames] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onAddRestaurantClick = () => {
        setIsModalOpen(true);
    };

    const addRestaurant = (name: string) => {
        setRestaurantNames((prev) => [...prev, name]);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal header='Create Restaurant' open={isModalOpen}>
                <CreateRestaurantForm onSave={addRestaurant} />
            </Modal>
            <Row>
                <Button data-testid='add-restaurant-button' onClick={onAddRestaurantClick}>
                    Add Restaurant
                </Button>
            </Row>
            <Row>
                <RestaurantList restaurants={restaurantNames} />
            </Row>
        </div>
    );
};

export default RestaurantListPage;
