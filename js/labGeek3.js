document.getElementById('ordenV').style.display="none"

let tipoV;
let propietario;
let placa;
let modelo;
let cantidaddH;
let descuento;
let valor;

function Calcular(){
    document.getElementById('paraqueadero').style.display="none"
    document.getElementById('ordenV').style.display="block"

    cantidaddH = Number(document.getElementById('cantidadH').value);
    tipoV = document.getElementById('TipoV');
    propietario = document.getElementById('propietario');
    placa = document.getElementById('placa');
    modelo = document.getElementById('modelo');

    valor = valorVehiculo(cantidaddH);
    descuento = Descuento(valor);
}

var valorVehiculo = function(cantidaddH){
    if (cantidaddH <= 2) {
        valor = 5000*cantidaddH;
    } else if (cantidaddH >2 && cantidaddH <=5){
        valor = 5000*2 + 4000*(cantidaddH-2);
    } else if (cantidaddH >5 && cantidaddH <=10){
        valor = 5000*2 + 4000*3 + 3000*(cantidaddH-5);
    } else {
        valor = 5000*2 + 4000*3 + 3000*5 + 2000*(cantidaddH-10);
    }
    return valor;
}

function Descuento(valor){
    if (tipoV == carro) {
        descuento = valor*0.1;
    } else {
        descuento = valor*0.15;
    } return descuento;
}