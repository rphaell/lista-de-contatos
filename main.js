function handleFormSubmission(e) {
    e.preventDefault();
    adicionaContato();
    limpaCampos();
}

function adicionaContato() {
    const inputNomeContato = document.querySelector('input[type="text"]');
    const inputNumeroContato = document.querySelector('input[type="number"]');
    const nomeContato = inputNomeContato.value;
    const numeroContato = inputNumeroContato.value;

    if (nomeContato && numeroContato) {
        const listaContatos = document.getElementById('lista-contatos');
        listaContatos.innerHTML += `
            <tr>
                <td>${nomeContato}</td>
                <td>${numeroContato}</td>
            </tr>
        `;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function limpaCampos() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}


const form = document.getElementById('form-contato');
form.addEventListener('submit', handleFormSubmission);
