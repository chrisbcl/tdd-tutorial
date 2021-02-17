import { Row, Col } from 'react-materialize';
import RestaurantListPage from './components/restaurant/RestaurantListPage/RestaurantListPage';

const App = (): JSX.Element => (
    <Row>
        <Col s={12} m={10} l={8} offset='m1 l2'>
            <RestaurantListPage />
        </Col>
    </Row>
);

export default App;
