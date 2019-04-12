//function sumar(a, b) {
//   return a + b;
//}

//let sumar = (a, b) => a + b;

//function saludar() {
//    return 'Hola Mundo';
//}

//let saludar = () => 'Hola mundo';

//function saludar(nombre) {
//   return `Hola ${nombre}`;
//}

let saludar = (nombre) => `Hola ${nombre}`

console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());