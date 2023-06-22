import { HomePage } from "./HomePage";

export class CadastrarPage{
   
    static limparEmail() {
        cy.get("#email").clear();
    }    
    
    static preencherCampoEmailCriado(email) {
        cy.get("input#email_create").type(email);
    }

    static submitEmailCreateButtonClick() {
        cy.get("#SubmitCreate > span").click();
    }
    static preencherCampoNome(firstname) {
        cy.get("input#customer_firstname").type(firstname);
    }
    static preencherCampoSobrenome(lastname) {
        cy.get("input#customer_lastname").type(lastname)}
    
    static preencherCampoSenha(senha) {
        cy.get("input#passwd").type(senha)
    }
    static selectDayClick(day) {
        cy.get("select#days option[value='"+day+"']").click({ force: true });
    }
    static selectMonthClick(month) {
        cy.get("select#months option[value='"+month+"']").click({ force: true });
    }
    static selectYearClick(year) {
        cy.get("select#years option[value='"+year+"']").click({ force: true });
    }
    static submitAccountButtonClick() {
        cy.get("button#submitAccount").click();
    }
    static successAlert() {
        return cy.get(".alert").invoke('text');
    }
    static errorAlertCadastro() {
        return cy.get("div.alert.alert-danger li").invoke('text');
    }
    static errorAlertEmailPreCadastro() {
        return cy.get("div#create_account_error ol>li:first-child").invoke('text');
    }

    static registrarUser(user){
        HomePage.singInButtonClick();
        this.preencherCampoEmailCriado(user.email)
        this.submitEmailCreateButtonClick();
        this.selectDayClick(1);
        this.selectMonthClick(1);
        this.selectYearClick(2022);
        
        this.preencherCampoNome(user.nome);
        this.preencherCampoSobrenome(user.sobrenome);
        this.preencherCampoSenha(user.senha);
        
    }

    static registrarUserSemEmail(user){
        this.registrarUser(user);
        this.limparEmail();
    }


}
   