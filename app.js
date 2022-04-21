// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };




// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen= valueInDollar * 106.5833333333333;
    // retornamos el valor
    return Math.round(valueInYen * 100) / 100;
}

const fromEuroToDollar = function(valueInEuro){
        // convertimos el valor a euros
        let valueInDollar= valueInEuro * 1.2;
        // retornamos el valor
        return Math.round(valueInDollar * 100) / 100;
}


const fromYenToPound = function(valueInYen){
    // convertimos el valor a yen
    let valueInPound= valueInYen * 0.0062548866301798;
    // retornamos el valor
    return Math.round(valueInPound * 100) / 100 ;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
