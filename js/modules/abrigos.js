import { MyProduct } from "../components/MyProduct.js"


// Obtener todos los abrigos
export const getAllAbrigos = async() => {
    let res = await fetch("http://172.16.101.146:5999/abrigo")
    let data = await res.json()
    return data
}

const PRODUCTOS_SECTION = document.querySelector("#sectionProduct")

async function showAllAbrigos() {
    let allAbrigosData = await getAllAbrigos()
    PRODUCTOS_SECTION.innerHTML = ""
    for (let product of allAbrigosData) {
    PRODUCTOS_SECTION.innerHTML += /*html*/`<my-product
        nombre="${product.nombre}"
        imagen="${product.imagen}"
        precio="$${product.precio}"
        ></my-product>`
    }
}

let quantiyCarrito = document.querySelector("#cantidadCarrito")
if (+localStorage.getItem("quantity")) {
    quantiyCarrito.textContent = localStorage.getItem("quantity")
}

await showAllAbrigos()
