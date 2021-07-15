describe('example test', () => {
  it('visit google', () => {
    cy.visit('https://google.com')

    cy.title().should('include', 'Google')
  })
})
