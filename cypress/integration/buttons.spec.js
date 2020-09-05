/// <reference types="cypress" />

context('Button tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Test button events', () => {
        cy.get('button.button').focus().click().blur();
    });

    it('Test button state normal', () => {
        cy.get('#button .prop-group:nth-child(1) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.be.disabled');
    });

    it('Test button state disabled', () => {
        cy.get('#button .prop-group:nth-child(1) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').should('be.disabled');
    });
    it('Test button size small', () => {
        cy.get('#button .prop-group:nth-child(2) .prop-radio-label [type="radio"]')
            .check('small')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'small');
    });

    it('Test button size normal', () => {
        cy.get('#button .prop-group:nth-child(2) .prop-radio-label [type="radio"]')
            .check('normal')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'normal');
    });

    it('Test button size large', () => {
        cy.get('#button .prop-group:nth-child(2) .prop-radio-label [type="radio"]')
            .check('large')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'large');
    });

    it('Test button with icon', () => {
        cy.get('#button .prop-group:nth-child(3) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').find('img').should('have.attr', 'src');
    });

    it('Test button without icon', () => {
        cy.get('#button .prop-group:nth-child(3) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button img').should('not.exist');
    });

    it('Test button with round corners', () => {
        cy.get('#button .prop-group:nth-child(4) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'round');
    });

    it('Test button without round corners', () => {
        cy.get('#button .prop-group:nth-child(4) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', 'round');
    });

    it('Test button without shadow', () => {
        cy.get('#button .prop-group:nth-child(5) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', 'shadow');
    });

    it('Test button with outset shadow', () => {
        cy.get('#button .prop-group:nth-child(5) .prop-radio-label [type="radio"]')
            .check('outset')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'shadow outset');
    });

    it('Test button with inset shadow', () => {
        cy.get('#button .prop-group:nth-child(5) .prop-radio-label [type="radio"]')
            .check('inset')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'shadow inset');
    });

    it('Test button with inset and outset shadow', () => {
        cy.get('#button .prop-group:nth-child(5) .prop-radio-label [type="radio"]')
            .check('both')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'shadow both');
    });

    it('Test button with primary styles', () => {
        cy.get('#button .prop-group:nth-child(6) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'primary');
    });

    it('Test button without primary styles', () => {
        cy.get('#button .prop-group:nth-child(6) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', 'primary');
    });

    it('Test button with secondary styles', () => {
        cy.get('#button .prop-group:nth-child(7) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'secondary');
    });

    it('Test button without secondary styles', () => {
        cy.get('#button .prop-group:nth-child(7) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', 'secondary');
    });

    it('Test button without tone styles', () => {
        cy.get('#button .prop-group:nth-child(8) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', '[class^="v-"]');
    });

    it('Test button with 20 tone styles', () => {
        cy.get('#button .prop-group:nth-child(8) .prop-radio-label [type="radio"]')
            .check('20')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'v-20');
    });

    it('Test button with 40 tone styles', () => {
        cy.get('#button .prop-group:nth-child(8) .prop-radio-label [type="radio"]')
            .check('40')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'v-40');
    });

    it('Test button with 60 tone styles', () => {
        cy.get('#button .prop-group:nth-child(8) .prop-radio-label [type="radio"]')
            .check('60')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'v-60');
    });

    it('Test button with 80 tone styles', () => {
        cy.get('#button .prop-group:nth-child(8) .prop-radio-label [type="radio"]')
            .check('80')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'v-80');
    });

    it('Test button with 120 tone styles', () => {
        cy.get('#button .prop-group:nth-child(8) .prop-radio-label [type="radio"]')
            .check('120')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'v-120');
    });

    it('Test button without hover', () => {
        cy.get('#button .prop-group:nth-child(9) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'noHover');
    });

    it('Test button with hover', () => {
        cy.get('#button .prop-group:nth-child(9) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', 'noHover');
    });

    it('Test button without animations', () => {
        cy.get('#button .prop-group:nth-child(10) .prop-radio-label [type="radio"]')
            .check('true')
            .should('be.checked');

        cy.get('button.button').should('have.class', 'noAnimation');
    });

    it('Test button with animations', () => {
        cy.get('#button .prop-group:nth-child(10) .prop-radio-label [type="radio"]')
            .check('false')
            .should('be.checked');

        cy.get('button.button').should('not.have.class', 'noAnimation');
    });
});
