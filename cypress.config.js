const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com/",
    env: {
      existingUserEmail: "dragananikolic+160685@gmail.com",
      validPassword: "pokusavam100", 
      boardName: "Proba",
      editedBoardName: "Novo ime",
      boardDescription: "proba"
  }
}
});
