Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
        cy.get('#firstName').type('David')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('David@teste.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

    })
