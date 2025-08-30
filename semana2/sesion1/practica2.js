
let a = 15;
let b = 4;
let c = 7;
let x = 10;
let y = 3;

console.log(`Valores iniciales: a = ${a}, b = ${b}, c = ${c}, x = ${x}, y = ${y}\n`);

console.log(`Suma (a + b): ${a} + ${b} = ${a + b}`);
console.log(`Resta (a - b): ${a} - ${b} = ${a - b}`);
console.log(`Multiplicación (a * b): ${a} * ${b} = ${a * b}`);
console.log(`División (a / b): ${a} / ${b} = ${a / b}`);
console.log(`Módulo/Residuo (a % b): ${a} % ${b} = ${a % b}`);
console.log(`Exponenciación (a ** b): ${a} ** ${b} = ${a ** b}\n`);


let contador = 5;
console.log(`Valor inicial: contador = ${contador}`);
console.log(`Pre-incremento (++contador): ${++contador}`);
console.log(`Post-incremento (contador++): ${contador++} → Después: ${contador}`);
console.log(`Pre-decremento (--contador): ${--contador}`);
console.log(`Post-decremento (contador--): ${contador--} → Después: ${contador}\n`);

let num = 10;
console.log(`Asignación básica: num = ${num}`);
num += 5; console.log(`Suma y asignación (num += 5): ${num}`);
num -= 3; console.log(`Resta y asignación (num -= 3): ${num}`);
num *= 2; console.log(`Multiplicación y asignación (num *= 2): ${num}`);
num /= 4; console.log(`División y asignación (num /= 4): ${num}`);
num %= 3; console.log(`Módulo y asignación (num %= 3): ${num}`);
num **= 2; console.log(`Exponenciación y asignación (num **= 2): ${num}\n`);

console.log(`Número: ${numero} (binario: ${numero.toString(2)})`);

let izquierda = numero << 2;
console.log(`Desplazamiento izquierda (${numero} << 2): ${izquierda} (binario: ${izquierda.toString(2)})`);

let derechaSigno = numero >> 2;
console.log(`Desplazamiento derecha con signo (${numero} >> 2): ${derechaSigno} (binario: ${derechaSigno.toString(2)})`);

let derechaSinSigno = numero >>> 2;
console.log(`Desplazamiento derecha sin signo (${numero} >>> 2): ${derechaSinSigno} (binario: ${derechaSinSigno.toString(2)})`);

let negativo = -25;
console.log(`\nNúmero negativo: ${negativo} (binario: ${(negativo >>> 0).toString(2)})`);
console.log(`Desplazamiento izquierda (${negativo} << 2): ${negativo << 2}`);
console.log(`Desplazamiento derecha con signo (${negativo} >> 2): ${negativo >> 2}`);
console.log(`Desplazamiento derecha sin signo (${negativo} >>> 2): ${negativo >>> 2}\n`);

let p = 12;
let q = 10; 
console.log(`p = ${p} (binario: ${p.toString(2)}), q = ${q} (binario: ${q.toString(2)})`);

console.log(`AND bit a bit (p & q): ${p & q} (binario: ${(p & q).toString(2)})`);
console.log(`OR bit a bit (p | q): ${p | q} (binario: ${(p | q).toString(2)})`);
console.log(`XOR bit a bit (p ^ q): ${p ^ q} (binario: ${(p ^ q).toString(2)})`);
console.log(`NOT bit a bit (~p): ${~p} (binario: ${(~p).toString(2)})\n`);

