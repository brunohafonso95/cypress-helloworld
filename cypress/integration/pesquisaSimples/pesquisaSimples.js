import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.google.com.br";

Given(`acesso a pagina do google`, () => {
  cy.visit(url);
  cy.title().should('include', 'Google');
});

When('realizo uma pesquisa', () => {
    cy.get("input[name=q]")
        .type('facebook')
    cy.get('#tsf')    
        .submit()
});

Then('os resultados da pesquisa são retornados', () => {
    cy.title()
        .should('include', 'facebook - Pesquisa Google');
});

