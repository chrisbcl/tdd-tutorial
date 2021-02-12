import { useState } from 'react';
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
            <button data-testid='add-restaurant-button' type='button' onClick={showCreateRestaurantForm}>
                Add Restaurant
            </button>
            {showRestaurantForm ? <CreateRestaurantForm onSave={addRestaurant} /> : null}
            <RestaurantList restaurants={restaurantNames} />
        </div>
    );
};

export default RestaurantListPage;
