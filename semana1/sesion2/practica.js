
const btn= document.getElementById("btn");
var arreglo = [];

btn.addEventListener("click", function() {
    imprimir();
});


function imprimir() {
    for (let index = 0; index < 20; index++) {
    console.log(index+1);
    arreglo.push(index+1);
    
}
return alert(arreglo)
}

