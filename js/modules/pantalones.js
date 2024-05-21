import { MyProduct } from "../components/MyProduct.js"

// Obtener todos los pantalones
export const getAllPantalones = async() => {
    let res = await fetch("http://172.16.101.146:5999/pantalon")
    let data = await res.json()
    return data
}

const PRODUCTOS_SECTION = document.querySelector("#sectionProduct")

async function showAllPantalones() {
    let allPantalonesData = await getAllPantalones()
    PRODUCTOS_SECTION.innerHTML = ""
    for (let product of allPantalonesData) {
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

await showAllPantalones()