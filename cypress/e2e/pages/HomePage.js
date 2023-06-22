
export class HomePage {
     
    static acessarPagina() {
        cy.visit('https://bugbank.netlify.app/');
    }

    static popularButtonClick() {
        cy.get("a.homefeatured").click();
    }
    static singInButtonClick() {
        cy.get(".login").click();
    }

    static bestSellerButtonClick() {
        cy.get("a.blockbestsellers").click();
    }
    static alertInfo() {
        return cy.get("li.alert.alert-info").invoke('text');
    }

    static adicionarButton() {
        return cy.contains("button.ajax_add_to_cart_button.btn.btn-default");}

}


