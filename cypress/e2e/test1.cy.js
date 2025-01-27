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
});
