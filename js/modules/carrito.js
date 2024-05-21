import { CarritoProduct } from "../components/CarritoProduct.js"


// Obtener todos los productos del carrito
export const getAllProductsCarrito = async() => {
    let res = await fetch("http://172.16.101.146:5999/carrito")
    let data = await res.json()
    return data
}

const getAllProducts = async() => {
    var camisetasData = await (await fetch("http://172.16.101.146:5999/camiseta")).json()
    var pantalonesData = await (await fetch("http://172.16.101.146:5999/pantalon")).json()
    var abrigosData =  await (await fetch("http://172.16.101.146:5999/abrigo")).json()


    return [camisetasData, pantalonesData, abrigosData]
}

const CARRITO_SECTION = document.querySelector("#carritoSection")

async function showAllCarritoProducts() {
    let allProductsData = await getAllProducts()

    let allCarritoData = await getAllProductsCarrito()
    CARRITO_SECTION.innerHTML = ""

    for (let productCarrito of allCarritoData) {

        for (let camiseta of allProductsData[0]) {
            if (+productCarrito.camisetaId == camiseta.id) {
                CARRITO_SECTION.innerHTML += /*html*/`<carrito-product
                nombre="${camiseta.nombre}"
                imagen="${camiseta.imagen}"
                precio="$${camiseta.precio}"
                ></carrito-product>`
            }
        }


        for (let pantalon of allProductsData[1]) {
            if (+productCarrito.pantalonId == pantalon.id) {
                CARRITO_SECTION.innerHTML += /*html*/`<carrito-product
                nombre="${pantalon.nombre}"
                imagen="${pantalon.imagen}"
                precio="$${pantalon.precio}"
                ></carrito-product>`
            }
        }

        for (let abrigo of allProductsData[2]) {
            if (+productCarrito.abrigoId == abrigo.id) {
                CARRITO_SECTION.innerHTML += /*html*/`<carrito-product
                nombre="${abrigo.nombre}"
                imagen="${abrigo.imagen}"
                precio="$${abrigo.precio}"
                ></carrito-product>`
            }
        }
    }
}

let quantiyCarrito = document.querySelector("#cantidadCarrito")
if (+localStorage.getItem("quantity")) {
    quantiyCarrito.textContent = localStorage.getItem("quantity")
}

await showAllCarritoProducts()

let totalPrecios = document.querySelector("#precioTotalNum")

// async function getTotal() {
//     let data = await getAllProductsCarrito()
//     for (let producto of data) {
//         totalPrecios.textContent = +totalPrecios.textContent + producto.precio.slice(1,-1)
//     }
// }
// await getTotal()

// Intento de suma total en productos
// setInterval(() => {
//     for (let i = 0; i < precios.length; i++) {
//         totalPrecios.textContent = +totalPrecios.textContent + +precios[i].innerHTML.slice(1,-1)
//     }
// }, 1000)
