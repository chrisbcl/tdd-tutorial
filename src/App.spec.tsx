import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders Hi', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('greeting').textContent).toBe('Hi');
    });
});
