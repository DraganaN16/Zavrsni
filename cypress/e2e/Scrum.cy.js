/// <reference types='cypress' />

import { general } from "../page_objects/general"
import{ loginPage } from "../page_objects/loginPage"
import { addBoard } from "../page_objects/addBoard"
import { editBoard } from "../page_objects/editBoard";
import { deleteBoard } from "../page_objects/deleteBoard";

let boardId;

describe("Scrum, PO", () => {
  before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })
  
  beforeEach("Visit home page",() => {
    cy.visit("/");
    cy.url().should("contain", "https://cypress.vivifyscrum-stage.com/")
    general.headerLoginTitle.should("contain","Log in with your existing account");
    loginPage.loginUser("dragananikolic+160685@gmail.com", "pokusavam100");
    general.headerTitle.should("contain", "My Organizations");
    cy.wait(3000);
  })


    it('Add new board', ()=> {
    cy.visit("my-organizations")   
    addBoard.addBoardBtn.click(); 
    addBoard.nameInput.type("Proba");
    addBoard.nextBtn.click();
    addBoard.kanbanBtn.click();
    addBoard.next2Btn.click();
    addBoard.next3Btn.click();
    addBoard.next4Btn.click();
    addBoard.finishBtn.click();
    cy.wait(3000);    
  })

  it('Edit board', ()=> {
    cy.get('a').contains('Proba').click();
    cy.get('a').first().click();
    editBoard.inputName.clear().type("Novo ime")
    editBoard.descriptionName.type("proba");
    editBoard.submitBtn.click();
   })

   it('Delete board', ()=> {
    deleteBoard.deleteBtn.click();
   })



});   
 


  