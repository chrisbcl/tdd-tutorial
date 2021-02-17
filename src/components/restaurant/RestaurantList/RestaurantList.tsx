import { Collection, CollectionItem } from 'react-materialize';

interface RestaurantListProps {
    restaurants: string[];
}

const EmptyItem = () => (
    <CollectionItem key='empty' style={{ color: 'grey' }}>
        (empty)
    </CollectionItem>
);

const RestaurantList = ({ restaurants }: RestaurantListProps): JSX.Element => {
    const getItem = (restaurantName: string) => <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>;

    const getRestaurantItems = () => (restaurants.length === 0 ? <EmptyItem /> : restaurants.map(getItem));

    return <Collection header='Restaurants'>{getRestaurantItems()}</Collection>;
};

export default RestaurantList;
