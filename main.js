// inicio de la clase 4


// Let contador = 0;

// while (contador < 5) {

//     console.log(contador);

//     contador++;

// }

/// QUE ES UN ARREGLO //*
//     indice , es la posicion en la que se encuentra el objeto en el arreglo y el lenght, el tamaño
//     indice     0  ,   1     ,  2      ,    3
const frutas = ["uva","manzana","platano","naranja"]

console.log(frutas.length)
console.log(frutas)

//*como acceder a la tabla o arreglo /*

console.log(frutas[2]) //* imprim la palabra platano, or ser la segunda posicion.

///   2018 al 2022 
/// metodo at ()
 
/// metodos de atras para adelante son parte de las algoritmos de busqueda

console.log(frutas.at(-2)) /// es lo mas nuevo. EL METODO AT

///   como obtener el ultimo elemento
console.log(frutas.at(-1)) 

/// ANTES DEL 2021

console.log(frutas[frutas.length -1]) /// era mas complejo para el .at.. es 4 - 1 = 3

// como añadir o elimitar elementos

frutas.push("pastel")
console.log(frutas)
frutas.push("papaya")
frutas.push("Brocoli")
console.log(frutas)

/// como elimar elementos de un arreglo
/// metodo pop() elimina el ultimo de la linea
frutas.pop()
console.log(frutas)

/// pop ()
/// copia un arreglo 

const copyfrutas = [... frutas]
// este efecto siguiente , se llama mutar afectando el arreglo original.. // mutabilidad
// existen metodos que modifican en arreglo original */
const last = frutas.pop()
console.log(frutas)
/// existe un metodo unshift() y .shift()
// ejemplo : añade al inicio del arreglo
console.log(frutas.unshift("estoy feliz"))

console.log(frutas)

console.log(frutas.shift("estoy enojado"))

console.log(frutas)

/*** como concatenar arreglos es pegaar un arreglo con otro *///
console.log("que pex" + " morro") // ejemplo antrior 
const verduras = ["tomate", "cebolla","zanahoria","chile largo", "chile california"]
const tienda = frutas.concat(verduras)

console.log(tienda.concat(3, 4 , 5))

// con spread op

 const tiendaspread = [...frutas, ...verduras, ...tienda]

 console.log(tiendaspread)

 const stringFrutas = "uva manzana platano naranja"

 console.log(typeof stringFrutas)
 
 /**** como convertir un arregle automaticamente con un separados, ejemplo una coma */
const splitFrutas = stringFrutas.split(" ") // si tiene una coma o espacio separados
console.log(splitFrutas)

// const correo = "gvaldez.siaa@gmail.com"
// const nombre = correo.split("@")
// console.log(nombre.pop())

// temas = destructuracion de arreglo 

 /// reverse   *///
 console.log(frutas.reverse())
/// interar arrglos /

//** ciclo for */
matchElement =""
for (let i = 0; i< frutas.length; i++){
     console.log(frutas[i])
     if (frutas [i] === 'naranja') {
        console.log("aqui esta la naranja")
        /// break
        matchElement = frutas[i]
        break
     }
     martchElement =  -1
}
console.log(martchElement)

///// funciones // programacion funcional / function | arrow funcion

function sum () {
    // scope 
    const sum = 1 + 2
    console.log("Dentro de la funcion",sum)
    return 1 + 2
    return sum
}

console.log(sum())

/// metodo indexOf














