import { useState } from 'react';
import CreateRestaurantForm from '../CreateRestaurantForm/CreateRestaurantForm';
import RestaurantList from '../RestaurantList/RestaurantList';

const RestaurantListPage = (): JSX.Element => {
    const [restaurantNames, setRestaurantNames] = useState<string[]>([]);

    const onAddRestaurant = (name: string) => {
        setRestaurantNames((prev) => [...prev, name]);
    };

    return (
        <div>
            <button data-testid='add-restaurant-button' type='button'>
                Add Restaurant
            </button>
            <CreateRestaurantForm onSave={onAddRestaurant} />
            <RestaurantList restaurants={restaurantNames} />
        </div>
    );
};

export default RestaurantListPage;
