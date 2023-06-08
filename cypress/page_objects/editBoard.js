class EditBoard{
    get madeBoard(){
        return cy.get('a');
    }
    get settingsBtn(){
        return cy.get('a').first();
    }
    get inputName(){
        return cy.get("input[name='name']")
    }
    get descriptionName(){
        return cy.get("textarea[name='description']")
    }
    get submitBtn(){
        return cy.get("[class='vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap']")
    }

}
export const editBoard = new EditBoard();