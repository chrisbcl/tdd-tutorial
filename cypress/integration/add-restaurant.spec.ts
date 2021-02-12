describe('adding a restaurant', () => {
    it('displays the restaurant in the list', () => {
        const newRestaurant = 'Named Restaurant';

        cy.visit('http://localhost:1234');

        cy.get('[data-testid="add-restaurant-button"]').click();

        cy.get('[data-testid="new-restaurant-name"]').type(newRestaurant);

        cy.get('[data-testid="save-restaurant-button"]').click();

        cy.contains(newRestaurant);
    });
});
