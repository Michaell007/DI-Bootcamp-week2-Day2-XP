// Saisir du user
let value = prompt("Entrer un nombre");

// determinons si value est pair ou impair
if (Number(value) % 2 == 0) {
    console.log(`${value} is an even number`);
} else {
    console.log(`${value} is an odd number`);
}