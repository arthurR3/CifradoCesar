const abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
/* let texto = prompt("Mensaje a cifrar") */
/* let textoCifrado = ''; */


function cifrar() {
    const texto = document.getElementById('textInput').value.toUpperCase();
    let textoCifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        if (letra === 'Ñ') {
            letra = 'N';
        }
        let posicion = abecedario.indexOf(letra);
        if (posicion !== -1) {
            let posicionN = (posicion + 6 - 1) % abecedario.length;
            letra = abecedario[posicionN];
        }
        textoCifrado += letra;
    }
    document.getElementById('outputText').value = textoCifrado;
}

function descifrar() {
    const texto = document.getElementById('textInput').value.toUpperCase();
    let textoDescifrado = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        let posicion = abecedario.indexOf(letra);
        if (posicion !== -1) {
            let posicionN = (posicion - 6 + 1);
            if (posicionN < 0) {
                posicionN += abecedario.length;
            }
            letra = abecedario[posicionN];
        }
        textoDescifrado += letra;
    }
    document.getElementById('outputText').value = textoDescifrado;
}
