function mostrarTabla() {
    const numero = parseint("que tabla deseas (1-10)");
    const num = parseInt(numero);
    if (isNaN(num) || num < 1 || num > 10) {
        console.log("Por favor, ingresar un número entre 1 y 10.");
    } else {
        console.log("Tabla de multiplicar del " + num + ":");
        for (let i = 1; i <= 10; i++) {
            console.log(num + " x " + i + " = " + (num * i));
        }
    }
}
mostrarTabla(2)
