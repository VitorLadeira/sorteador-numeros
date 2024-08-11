let displayNumbers = document.getElementById('sorteados');
let genButton = document.getElementById('btn-sortear');
let resetButton = document.getElementById('btn-reiniciar');

function sortear() {
    let amount = parseInt(document.getElementById('quantidade').value);
    let from = parseInt(document.getElementById('de').value);
    let to = parseInt(document.getElementById('ate').value);
    let difference = to - from + 1;

    let genNumbers;
    let goneJaMeuFi = [];

    if(from > to) {
        alert('O primeiro número deve ser menor que o segundo');
    } else if (from < 1) {
        alert('O número minimo é 1');
    } else {
        for(let i = 0; i < amount; i++) {
            genNumbers = genRandomNumber(from, to);
    
            if (difference >= amount)  {
                while(goneJaMeuFi.includes(genNumbers)) {
                    genNumbers = genRandomNumber(from, to);
                }
            }
    
            goneJaMeuFi.push(genNumbers);
        }
        if (difference < amount) {
            alert("Como a quantidade solicitada de números é maior que a disponível, alguns números irão se repetir");
        }
    }
    
    displayNumbers.innerHTML = `<label class="texto__paragrafo" id="sorteados">Números sorteados: ${goneJaMeuFi}</label>`;
    disableCallFunction();
}

function disableCallFunction() {
    genButton.disabled = true;
    resetButton.disabled = false;
}

function clearInput() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reset() {
    genButton.disabled = false;
    resetButton.disabled = true;
    displayNumbers.innerHTML = `<label class="texto__paragrafo" id="sorteados">Números sorteados: Nenhum</label>`;
    clearInput();
}

function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}