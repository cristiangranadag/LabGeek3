document.getElementById('ordenV').style.display="none"

let tipoV2='Carro';
let propietario2;
let placa2;
let modelo2;
let cantidaddH2;
let descuento2;
let valor2;
let total2;

function Calcular(){
    document.getElementById('paraqueadero').style.display="none"
    document.getElementById('ordenV').style.display="block"

    
    cantidaddH2 = Number(document.getElementById('cantidadH').value);
    tipoV2 = document.getElementById('tipoV').value;
    propietario2 = document.getElementById('propietario').value;
    placa2 = document.getElementById('placa').value;
    modelo2 = document.getElementById('modelo').value;

    valor2 = valorVehiculo(cantidaddH2);
    descuento2 = DescuentoT(valor2);

    document.getElementById('descuento').value = descuento2;
    document.getElementById('total').value = valor2 - descuento2;
}

var valorVehiculo = function(cantidaddH2){
    if (cantidaddH2 <= 2) {
        valor2 = 5000*cantidaddH2;
    } else if (cantidaddH2 >2 && cantidaddH2 <=5){
        valor2 = 5000*2 + 4000*(cantidaddH2-2);
    } else if (cantidaddH2 >5 && cantidaddH2 <=10){
        valor2 = 5000*2 + 4000*3 + 3000*(cantidaddH2-5);
    } else {
        valor2 = 5000*2 + 4000*3 + 3000*5 + 2000*(cantidaddH2-10);
    }
    
    return valor2;
}

function DescuentoT(valor2) {
    if (tipoV2 == 'Carro' || tipoV2 == 'carro') {
        descuento2 = valor2*0.1;
    } else {
        descuento2 = valor2*0.15;
    } 
    
    return descuento2; 
} 