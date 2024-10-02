const { Validator } = require('../rules/validator');
const CustomError = require('../errors/CustomError');

class ValidatorService {
    validate(document) {
        try {
            const cleanedDocument = document.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

            if (cleanedDocument.length === 11) { // CPF
                return {
                    type: 'CPF',
                    number: cleanedDocument,
                    isValid: Validator.isValidCPF(cleanedDocument),
                };
            } else if (cleanedDocument.length === 14) { // CNPJ
                return {
                    type: 'CNPJ',
                    number: cleanedDocument,
                    isValid: Validator.isValidCNPJ(cleanedDocument),
                };
            }

            throw new CustomError('Documento inválido: deve ser CPF (11 dígitos) ou CNPJ (14 dígitos).');
        } catch (error) {
            if (error instanceof CustomError) {
                console.error(error.message);
            } else {
                console.error('Erro inesperado:', error);
            }
            return null; // Retorna null em caso de erro
        }
    }
}