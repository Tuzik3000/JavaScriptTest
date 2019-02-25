describe('My First Test', function() {
  it('finds the content "budget"', function() {
    cy.visit('http://localhost/final/')

    cy.contains('Budget')
  })
})