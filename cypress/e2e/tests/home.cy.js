import { HomePage } from "../pages/HomePage";

describe('HomeTest', ()=> {

    beforeEach(()=>{
        cy.visit('http://www.automationpractice.pl/index.php');
    });

    it('Validar Mensagem de erro na home alertando produtos populares vazios ou exibindo produtos', () => {
        HomePage.popularButtonClick();
        if(!HomePage.alertInfo() === 0){
            HomePage.alertInfo.should('have.text', 'No featured products at this time.')    
        }
        else{
            HomePage.adicionarButton('be.equal', true);
        }
    })

    
    it('Validar Mensagem de erro na home alertando produtos BestSellers vazios ou exibindo produtos', () => {
        HomePage.bestSellerButtonClick();
        let text = HomePage.alertInfo();
        if(!text.length === 0){
            HomePage.alertInfo.should('have.text', 'No featured products at this time.')    
        }
        else{
            HomePage.adicionarButton('be.equal', true);
        }
    })
})
