(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node.js
        module.exports = factory();
    } else {
        // Browser global
        root.ValidatorService = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError";
        }
    }

    class Validator {
        static isValidCPF(cpf) {
            if (cpf.length !== 11) return false;
            // Lógica de validação do CPF aqui
            return true; // Exemplo: retorna true se for válido
        }

        static isValidCNPJ(cnpj) {
            if (cnpj.length !== 14) return false;
            // Lógica de validação do CNPJ aqui
            return true; // Exemplo: retorna true se for válido
        }
    }

    class ValidatorService {
        validate(document) {
            try {
                const cleanedDocument = document.replace(/[^\d]+/g, '');

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

    return ValidatorService; // Retorna a classe como construtor
}));
