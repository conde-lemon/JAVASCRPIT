function dadosRandom(){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    return {dado1, dado2, suma};
}

function iniciar(){
    document.body.innerHTML = '';
    document.writeln('<h1>Juego de Dados</h1>')
    document.writeln('<button onclick="jugar()">Lanzar Dados</button>')
}

function jugar(){
    let resultado = dadosRandom();
    let resultadoPC = dadosRandom();
    document.body.innerHTML = '';
    document.writeln('<h2>Tus Resultados 0.0</h2>')
    document.writeln('<p>Dado 1: ' + resultado.dado1 + '</p>')
    document.writeln('<p>Dado 2: ' + resultado.dado2 + '</p>')
    document.writeln('<p>Suma: ' + resultado.suma + '</p>')
    document.writeln('<H2>PC Resultados</H2>')
    document.writeln('<p>Dado 1: ' + resultadoPC.dado1 + '</p>')
    document.writeln('<p>Dado 2: ' + resultadoPC.dado2 + '</p>')
    document.writeln('<p>Suma: ' + resultadoPC.suma + '</p>')
    if (resultado.suma > resultadoPC.suma) {
        document.writeln('<p>Ganaste!</p>')
    } else if (resultado.suma < resultadoPC.suma) {
        document.writeln('<p>Perdiste!</p>')
    } else {
        document.writeln('<p>Empate!</p>')
    }

    document.writeln('<button onclick="iniciar()">Jugar de Nuevo</button>')
}

iniciar();