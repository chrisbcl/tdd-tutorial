interface RestaurantListProps {
    restaurants: string[];
}

const RestaurantList = ({ restaurants }: RestaurantListProps): JSX.Element => (
    <div>
        <ul>
            {restaurants.map((restaurantName) => (
                <li key={restaurantName}>{restaurantName}</li>
            ))}
        </ul>
    </div>
);

export default RestaurantList;
