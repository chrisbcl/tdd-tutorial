describe('adding a restaurant', () => {
    it('displays the restaurant in the list', () => {
        const newRestaurant = 'Named Restaurant';

        cy.visit('http://localhost:1234');

        // confirm new-restaurant-name is not shown
        cy.get('[data-testid="new-restaurant-name"]').should('not.exist');

        cy.get('[data-testid="add-restaurant-button"]').click();

        cy.get('[data-testid="new-restaurant-name"]').type(newRestaurant);

        cy.get('[data-testid="save-restaurant-button"]').click();

        // confirm new-restaurant-name is not shown
        cy.get('[data-testid="new-restaurant-name"]').should('not.exist');

        cy.contains(newRestaurant);
    });
});
