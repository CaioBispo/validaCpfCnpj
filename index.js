const { ValidatorService } = require('./application/validatorService');

const validatorService = new ValidatorService();

// Exemplo de uso
const document = '123.456.789-09'; // ou '12.345.678/0001-95'
const result = validatorService.validate(document);

window.validaCNPJ = result;