let entry = prompt("Entrer un nombre");

// extraire le dernier element du nombre
let lastNumber = entry[entry.length-1];

let pairs = [0,2,4,6,8];
// let impairs = [1,3,5,7,9]

if (pairs.includes( Number(lastNumber) )) {
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}