describe("super fun time tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("carvana search text field is present", () => {
    cy.get("#merch-search-bar-input").should("be.visible");
  });

  it("result tile is displayed", () => {
    cy.getByQa("result-tile").should("be.visible");
  });

  it("can freetext search for a model", () => {
    cy.get("#merch-search-bar-input").type("corvette{enter}");
    cy.getByQa("result-tile").first().should("contain", "Corvette");
    cy.getByQa("result-tile").last().should("contain", "Corvette");
  });
});

// cy.get('="sc-H3mnv Jf91f"]'.click();
