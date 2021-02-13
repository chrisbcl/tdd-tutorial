import { Collection, CollectionItem } from 'react-materialize';

interface RestaurantListProps {
    restaurants: string[];
}

const RestaurantList = ({ restaurants }: RestaurantListProps): JSX.Element => (
    <Collection>
        {restaurants.map((restaurantName) => (
            <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
        ))}
    </Collection>
);

export default RestaurantList;
