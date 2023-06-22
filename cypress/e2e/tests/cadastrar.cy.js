import { HomePage } from '../pages/HomePage';
import { CadastrarPage } from '../pages/CadastrarPage';
import {
    criarUserValido,
    criarUserSemNome,
    criarUserSemSenha,
    criarUserSemSobrenome
} from '../pages/DataFactory';


describe('CadatrarTest', ()=> {

    beforeEach(()=>{
        cy.visit('http://www.automationpractice.pl/index.php');
    });

    it('Validar Mensagem Sucesso ao cadastrar novo usuário Válido', () => {
        HomePage.singInButtonClick();
        const user = criarUserValido();
        CadastrarPage.registrarUser(user);
        CadastrarPage.submitAccountButtonClick();
        CadastrarPage.successAlert().should('include','Your account has been created.');
    })

    it('Validar Mensagem De Erro ao cadastrar usuário sem nome', () => {
        HomePage.singInButtonClick();
        const user = criarUserSemNome();
        CadastrarPage.registrarUser(user);
        
        CadastrarPage.submitAccountButtonClick();
        CadastrarPage.errorAlertCadastro().should('include','firstname is required.');
    })
    it('Validar Mensagem De Erro ao cadastrar usuário sem Sobrenome', () => {
        HomePage.singInButtonClick();
        const user = criarUserSemSobrenome();
        CadastrarPage.registrarUser(user);
        
        CadastrarPage.submitAccountButtonClick();
        CadastrarPage.errorAlertCadastro().should('include','lastname is required.');
    })
    it('Validar Mensagem De Erro ao cadastrar usuário sem email', () => {
        HomePage.singInButtonClick();
        const user = criarUserValido();
        CadastrarPage.registrarUserSemEmail(user);
        
        CadastrarPage.submitAccountButtonClick();
        CadastrarPage.errorAlertCadastro().should('include','email is required.');
    })
    it('Validar Mensagem De Erro ao cadastrar usuário sem senha', () => {
        HomePage.singInButtonClick();
        const user = criarUserSemSenha();
        CadastrarPage.registrarUser(user);
        
        CadastrarPage.submitAccountButtonClick();
        CadastrarPage.errorAlertCadastro().should('include','passwd is required.');
    })

})