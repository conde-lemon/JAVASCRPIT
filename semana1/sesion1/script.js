//calculadora simple
num1 = 0;
num2 = 0;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;

function inicio() {
  document.body.innerHTML = ''; //para limpiar el contenido anterior
  document.writeln('<h1>Calculadora</h1>');
  document.writeln('<p>Ingresa el primer Numero:</p>');
  document.writeln('<input type="text" id="num1">');
  document.writeln('<p>Ingresa el segundo Numero:</p>');
  document.writeln('<input type="text" id="num2">');

  document.writeln('<button onclick="calcular()">Calcular</button>');
}

function calcular() {
  num1 = parseFloat(document.getElementById('num1').value);
  num2 = parseFloat(document.getElementById('num2').value);
  suma = num1 + num2;
  resta = num1 - num2;
  multiplicacion = num1 * num2;
  division = num1 / num2;
  mostrarResultados();
}
//funcion para mostrar los resultados
function mostrarResultados() {
  document.body.innerHTML = '';
  document.writeln('<h2>Resultados:</h2>');
  document.writeln('<p>Suma: ' + suma + '</p>');
  document.writeln('<p>Resta: ' + resta + '</p>');
  document.writeln('<p>Multiplicacion: ' + multiplicacion + '</p>');
  document.writeln('<p>Division: ' + division + '</p>');
  document.writeln('<button onclick="inicio()">Volver</button>');
}

inicio();
