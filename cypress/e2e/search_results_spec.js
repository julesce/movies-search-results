describe('Search Results', () => {
  it('Visits the Search Results', () => {
    cy.visit('/')
  })

  it('Changes the category', () => {
    cy.visit('/')
    cy.getByText('Blog').click().should('have.class', 'active')
  })

  it('Hides the Filters Panel', () => {
    cy.visit('/')
    cy.getByText('Filter').click()
    cy.get('.filterButton').should('not.exist');
  })

  it('Sorts by Popularity', () => {
    cy.visit('/')
    cy.get('div.ui.inline.dropdown').click()
    cy.getByText('Popularity').click()
  })

  it('Selects, applies and clears a filter', () => {
    cy.visit('/')
    cy.getByText('Genre').click()
    cy.getByText('Drama').click()
    cy.getByText('Apply Filters').click()

    cy.getByText('Genre').click()
    cy.get('div.ui.checked.checkbox').then(subject => {
      cy.getByText('Drama', {container: subject}).should('exist')
    })

    cy.getByText('Clear Filters').click()
    cy.getByText('Genre').click()
    cy.get('div.ui.checked.checkbox').should('not.exist')
    }
  )

  it('Shows a list of movies', () => {
    cy.visit('/')
    cy.get('.loader').should('exist')
    
    cy.wait(1500)
    cy.get('.moviesList').should('contain', 'Batman Returns')
  })
})