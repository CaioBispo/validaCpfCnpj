class Validator {
    static isValidCPF(cpf) {
        // Lógica de validação de CPF
        if (cpf.length !== 11) return false;
        // Implementar a lógica de validação real
        return true; // Exemplo: retorna true se for válido
    }

    static isValidCNPJ(cnpj) {
        // Lógica de validação de CNPJ
        if (cnpj.length !== 14) return false;
        // Implementar a lógica de validação real
        return true; // Exemplo: retorna true se for válido
    }
}