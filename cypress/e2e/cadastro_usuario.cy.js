/// <reference types="cypress"/>
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page';

import { faker } from "@faker-js/faker"
import common_page from '../support/pages/common_page'
import cadastro_page from '../support/pages/cadastro_usuario_page';

describe("Cadastro de Usuário", () => {

    beforeEach("Acessar cadastro de usuário", () => {
        common_page.acessarCadastroUsuario()
    });

    it("Campo Nome vazio", () => {
        cadastro_page.clicarEmCadastrar();
        cadastro_page.validarMensagemErro("O campo nome deve ser prenchido");
    });

    it("Campo E-mail vazio", () => {
        //cadastro_page.preencherNome(Alexandre)
        cadastro_page.preencherNome(faker.person.fullName());
        cadastro_page.clicarEmCadastrar();
        cadastro_page.validarMensagemErro("O campo e-mail deve ser prenchido corretamente");
    });

    it("Campo E-mail inválido", () => {
        cadastro_page.preencherNome(faker.person.fullName());
        cadastro_page.preencherEmail(faker.person.firstName());
        cadastro_page.clicarEmCadastrar();
        cadastro_page.validarMensagemErro(
        "O campo e-mail deve ser prenchido corretamente"
        );
    });

    it("Campo Senha vazio", () => {
        cadastro_page.preencherNome(faker.person.fullName());
        cadastro_page.preencherEmail(faker.internet.email());
        cadastro_page.clicarEmCadastrar();
        cadastro_page.validarMensagemErro(
        "O campo senha deve ter pelo menos 6 dígitos"
        );
    });

    it("Campo Senha inválido", () => {
        cadastro_page.preencherNome(faker.person.fullName());
        cadastro_page.preencherEmail(faker.internet.email());
        cadastro_page.preencherSenha(12345);
        cadastro_page.clicarEmCadastrar();
        cadastro_page.validarMensagemErro(
        "O campo senha deve ter pelo menos 6 dígitos"
        );
    });

    it("Cadastro com sucesso", async() => {
        const name = await faker.person.fullName()
        cadastro_page.preencherNome(name);
        cadastro_page.preencherEmail(faker.internet.email());
        cadastro_page.preencherSenha(123456);
        cadastro_page.clicarEmCadastrar();
        cadastro_page.validarMensagemSucesso(name)
    });

})
