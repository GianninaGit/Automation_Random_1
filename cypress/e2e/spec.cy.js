import { DATOS } from "./atom"

describe('template spec', () => {
  it('passes', () => {
    cy.visit(DATOS.URL)
  })
})