// Calculadora ultra simple de impuestos
function calcularImpuestoSimple(ingresos) {
    const UIT = 4950;
    const rentaNeta = Math.max(0, ingresos - (7 * UIT));
    
    if (rentaNeta <= 0) return 0;
    if (rentaNeta <= 24750) return rentaNeta * 0.08;
    if (rentaNeta <= 99000) return rentaNeta * 0.14;
    if (rentaNeta <= 173250) return rentaNeta * 0.17;
    if (rentaNeta <= 222750) return rentaNeta * 0.20;
    return rentaNeta * 0.30;
}

// Ejemplo de uso
const miIngreso = 60000; // Cambia este valor
const miImpuesto = calcularImpuestoSimple(miIngreso);

console.log(`Con ingresos de S/ ${miIngreso}`);
console.log(`Impuesto 4ta categoría: S/ ${miImpuesto.toFixed(2)}`);