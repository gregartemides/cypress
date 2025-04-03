describe('Homepage', () => {
  it('should contain the text "Save and see your changes instantly."', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Save and see your changes instantly.').should('be.visible');
  });
});
