import faker from 'faker';

function criarUserValido() {
    return {
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        sobrenome:faker.name.lastName(),
        senha: faker.internet.password()
    };
}

function criarUserSemNome() {
    return {
        email: faker.internet.email(),
        nome: '{del}',
        sobrenome:faker.name.lastName(),
        senha: faker.internet.password()
    };
}
function criarUserSemSenha() {
    return {
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        sobrenome:faker.name.lastName(),
        senha: '{del}'
    };
}
function criarUserSemEmail() {
    return {
        email: '{del}',
        nome: faker.name.firstName(),
        sobrenome:faker.name.lastName(),
        senha: faker.internet.password()
    };
}
function criarUserSemSobrenome() {
    return {
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        sobrenome:'{del}',
        senha: faker.internet.password()
    };
}
module.exports = {
    criarUserValido,
    criarUserSemEmail,
    criarUserSemNome,
    criarUserSemSenha,
    criarUserSemSobrenome
};