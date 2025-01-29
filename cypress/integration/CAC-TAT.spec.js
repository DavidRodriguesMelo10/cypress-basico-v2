// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.eq', 'Central de Atendimento ao Cliente TAT')
  
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longtext = 'teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,'

        cy.get('#firstName').type('David')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('David@teste.com')
        cy.get('#open-text-area').type(longtext,{delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
         })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){

        cy.get('#firstName').type('David')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('David@teste,com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

    })
    it('campo telefone continua vazio quando preenchido com valor não-numerico', function(){

        cy.get('#phone')
        .type('qwehbhb')
        .should('have.value','')


    })
    
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){

        cy.get('#firstName').type('David')
        cy.get('#lastName').type('Melo')
        cy.get('#email').type('David@teste.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){

        cy.get('#firstName').type('David').should('have.value','David').clear().should('have.value','')
        cy.get('#lastName').type('Melo').should('have.value','Melo').clear().should('have.value','')
        cy.get('#email').type('David@teste.com').should('have.value','David@teste.com').clear().should('have.value','')
        cy.get('#phone').type('11986450672').should('have.value','11986450672').clear().should('have.value','')

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){

        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        
    })

    it('envia o formuário com sucesso usando um comando customizado',() => {
            cy.fillMandatoryFieldsAndSubmit()
            cy.get('.success').should('be.visible')

        })

    it.only('Selecionar um produto via select (YouTube)', function(){

        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })


})
 
  


    


