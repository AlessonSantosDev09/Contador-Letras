// Função para contar a ocorrência da letra 'a' ou 'A'
function contarLetras(input) {
    const regex = /a/gi; // Expressão regular para encontrar 'a' ou 'A'
    const matches = input.match(regex); // Array com todas as ocorrências encontradas
    return matches ? matches.length : 0; // Retorna a quantidade ou 0 se não houver
}

// Manipulação do formulário e exibição do resultado
document.getElementById('letterForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregar a página

    const userInput = document.getElementById('userInput').value.trim();
    const quantidade = contarLetras(userInput);

    const resultado = document.getElementById('resultado');
    resultado.innerText = quantidade > 0
        ? `A letra 'a' aparece ${quantidade} ${quantidade === 1 ? 'vez' : 'vezes'}.`
        : "A letra 'a' não foi encontrada.";
});
