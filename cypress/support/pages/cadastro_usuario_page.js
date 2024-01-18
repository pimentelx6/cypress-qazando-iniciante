/// <reference types="cypress"/>

export default {
    clicarEmCadastrar() {
        cy.get('#btnRegister').click()
},

validarMensagemErro(mensagem) {
    /*cy.get('.errorLabel').then((element) => {
        expect(element).to.be.visible
        expect(element.text()).equal('O campo nome deve ser prenchido')
    })*/
    cy.get('.errorLabel').should("be.visible")

    .should("have.text",mensagem)
    },

preencherNome(nome) {
    cy.get("#user").type(nome);
    },

preencherEmail(email) {
    cy.get("#email").type(email);
    },

preencherSenha(senha) {
    cy.get("#password").type(senha);
    },

validarMensagemSucesso(nome) {
    cy.get("#swal2-title").should("be.visible")
    .should("have.text",'Cadastro realizado!')
    
    cy.get("#swal2-html-container")
    .should("be.visible")
    .should("have.text", `Bem-vindo ${nome}`);
}
    
    
};