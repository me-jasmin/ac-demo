/// <reference types="cypress" />

context('Input tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Test input events', () => {
        cy.get('input.input')
            .focus()
            .should('have.focus')
            .type('testing input now...')
            .should('have.value', 'testing input now...')
            .type('{selectall}{del}')
            .blur();
    });

    it('Test input state normal', () => {
        cy.get('#input .prop-group:nth-child(1) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('input.input').should('not.be.disabled');
    });

    it('Test input state disabled', () => {
        cy.get('#input .prop-group:nth-child(1) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('input.input').should('be.disabled');
    });

    it('Test input size small', () => {
        cy.get('#input .prop-group:nth-child(2) .prop-radio-label [type="radio"]')
            .check('small')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'small');
    });

    it('Test input size normal', () => {
        cy.get('#input .prop-group:nth-child(2) .prop-radio-label [type="radio"]')
            .check('normal')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'normal');
    });

    it('Test input size large', () => {
        cy.get('#input .prop-group:nth-child(2) .prop-radio-label [type="radio"]')
            .check('large')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'large');
    });

    it('Test input with round corners', () => {
        cy.get('#input .prop-group:nth-child(3) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'round');
    });

    it('Test input without round corners', () => {
        cy.get('#input .prop-group:nth-child(3) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('input.input').should('not.have.class', 'round');
    });

    it('Test input without shadow', () => {
        cy.get('#input .prop-group:nth-child(4) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('input.input').should('not.have.class', 'shadow');
    });

    it('Test input with outset shadow', () => {
        cy.get('#input .prop-group:nth-child(4) .prop-radio-label [type="radio"]')
            .check('outset')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'shadow outset');
    });

    it('Test input with inset shadow', () => {
        cy.get('#input .prop-group:nth-child(4) .prop-radio-label [type="radio"]')
            .check('inset')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'shadow inset');
    });

    it('Test input with inset and outset shadow', () => {
        cy.get('#input .prop-group:nth-child(4) .prop-radio-label [type="radio"]')
            .check('both')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'shadow both');
    });

    it('Test input without animations', () => {
        cy.get('#input .prop-group:nth-child(5) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('input.input').should('have.class', 'noAnimation');
    });

    it('Test input with animations', () => {
        cy.get('#input .prop-group:nth-child(5) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('input.input').should('not.have.class', 'noAnimation');
    });
});
