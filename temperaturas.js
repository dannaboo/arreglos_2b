function celciusAfahrenheit(celcius){
    return(celcius * 9/5) + 32;
}
function fahrenheitACelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
function celciusAKelvin(celcius){
    return(celcius +273.15);
}
function fahrenheitAKelvin(fahrenheit){
    return((fahrenheit-32)*5/9)+273.15;
}
console.log(celciusAfahrenheit(34));
console.log(fahrenheitACelcius(77));
console.log(celciusAKelvin(24));
console.log(fahrenheitAKelvin(35));

