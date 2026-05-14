// Ejercicio 1

for (let i = 50; i >= 20; i--) {
   document.getElementById('res').innerHTML += i + ' - ';
}

// Ejercicoi 2

const num1 = parseInt(prompt('Introduce un número: '));
const num2 = parseInt(prompt('Introduce otro numero; '));

for (let i = num1; i <= num2; i++) {
   if (i % 2 == 0) {
      document.getElementById('res1').innerHTML += i + ' - ';
   }
}

// Ejercicio 3

// // const art2 = parseInt(prompt("Introduce 2o articulo: "));
// // const art3 = parseInt(prompt("Introduce 3r articulo: "));
// // const art4 = parseInt(prompt("Introduce 4o articulo: "));
// // const art5 = parseInt(prompt("Introduce 5o articulo: "));

// const total = 0

// // const lista = [art1, art2, art3, art4, art5]

// for (let i = 0; i <=5; i++) {
//    const art1 = parseInt(prompt("Introduce 1er articulo: ") + i);
//    total = (total+ total)*0.15
//     total+=total*0.15;
// }

// if (total > 100){
//     for (let i = 0; i < lista.length; i++) {
//         document.getElementById("res2").innerHTML = lista[i] * 0.15 <br> + lista[i];
//     }

// // else{document.getElementById("res2").innerHTML = "precio con descuento: ";}
// }

let total = 0;

for (let i = 0; i <= 4; i++) {
   let art = parseFloat(prompt('Introduce el predio del articulo: ' + (i + 1)));
   total += art;
}

if (total >= 100) {
   document.getElementById('res2').innerHTML =
      'Has conseguido un 15% de descuento!!!' +
      '<br>' +
      'Precio total: ' +
      total +
      '<br>' +
      'Precio final con descuento: ' +
      total * 0.85;
} else {
   document.getElementById('res2').innerHTML = 'Precio total: ' + total;
}

console.log(total);
