import { useState } from 'react';
import { Button, Row } from 'react-materialize';
import CreateRestaurantForm from '../CreateRestaurantForm/CreateRestaurantForm';
import RestaurantList from '../RestaurantList/RestaurantList';

const RestaurantListPage = (): JSX.Element => {
    const [restaurantNames, setRestaurantNames] = useState<string[]>([]);
    const [showRestaurantForm, setShowRestaurantForm] = useState(false);

    const addRestaurant = (name: string) => {
        setRestaurantNames((prev) => [...prev, name]);
        setShowRestaurantForm(false);
    };

    const showCreateRestaurantForm = () => {
        setShowRestaurantForm(true);
    };

    return (
        <div>
            <Row>
                <Button data-testid='add-restaurant-button' onClick={showCreateRestaurantForm}>
                    Add Restaurant
                </Button>
            </Row>
            <Row> {showRestaurantForm ? <CreateRestaurantForm onSave={addRestaurant} /> : null}</Row>
            <Row>
                <RestaurantList restaurants={restaurantNames} />
            </Row>
        </div>
    );
};

export default RestaurantListPage;
