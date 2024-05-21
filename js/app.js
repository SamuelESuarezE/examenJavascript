import { MyProduct } from "./components/MyProduct.js";
import { getAllAbrigos } from "./modules/abrigos.js";
import { getAllCamisetas } from "./modules/camisetas.js";
import { getAllPantalones } from "./modules/pantalones.js";




const PRODUCTOS_SECTION = document.querySelector("#sectionProduct")

export const getAllProducts = async() => {
    let camisetas = await getAllCamisetas()
    let pantalones = await getAllPantalones()
    let abrigos = await getAllAbrigos()

    return [...camisetas, ...pantalones, ...abrigos]
}

console.log(await getAllProducts())

async function showAllProducts() {
    let allProductsData = await getAllProducts()

    PRODUCTOS_SECTION.innerHTML = ""
    for (let product of allProductsData) {
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

await showAllProducts()
