import { fireEvent, render } from '@testing-library/react';
import CreateRestaurantForm from './CreateRestaurantForm';

describe('CreateRestaurantForm', () => {
    describe('clicking the save button', () => {
        it('calls the onSave handler', () => {
            const onSave = jest.fn();
            const { getByTestId } = render(<CreateRestaurantForm onSave={onSave} />);

            const restaurantName = getByTestId('new-restaurant-name');
            fireEvent.change(restaurantName, { target: { value: 'Named Restaurant' } });

            const saveButton = getByTestId('save-restaurant-button');

            fireEvent.click(saveButton);

            expect(onSave).toBeCalledTimes(1);
        });
    });
});
