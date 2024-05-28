function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (numero === '') {
        alert('Por favor, insira um número');
        return;
    }

    let resultadoHTML = `<table>
                            <tr>
                                <th>Multiplicação</th>
                                <th>Resultado</th>
                            </tr>`;

    for (let i = 1; i <= 10; i++) {
        resultadoHTML += `<tr>
                            <td>${numero} x ${i}</td>
                            <td>${numero * i}</td>
                          </tr>`;
    }

    resultadoHTML += '</table>';
    resultadoDiv.innerHTML = resultadoHTML;
}

function limparTela() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}