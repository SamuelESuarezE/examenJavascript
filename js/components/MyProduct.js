



export class MyProduct extends HTMLElement {
    nombre
    precio
    imagen
    static cantidadCarrito

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.render()
    }


    static addToCarrito() {
        let quantiyCarrito = document.querySelector("#cantidadCarrito")
        quantiyCarrito.textContent = localStorage.getItem("quantity")
        quantiyCarrito.textContent = +(quantiyCarrito.textContent)+1
        localStorage.setItem('quantity', quantiyCarrito.textContent);
    
        
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    text-decoration: none;
                    box-sizing: border-box;
                    font-family: "Semibold";
                }

                .producto {
                    height: 340px;
                    border-radius: 25px;
                    border: 1px solid var(--color-product);
                    transition: 0.2s;
                    background-color: var(--color-white);
                    width: 100%;
                }

                .producto .productoImagen {
                    display: flex;
                    justify-content: center;
                    padding: 1rem;
                    height: 75%;
                }

                .producto .productoImagen img {
                    max-height: 100%;
                    object-fit: cover;
                    transition: 0.2s;
                }

                .producto:hover {
                    border: none;
                    scale: 1.03;
                    filter: drop-shadow(0px 0px 5px var(--color-product));
                }

                .productoDescripcion {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid var(--color-product);
                    padding: 1rem;
                    border-radius: 25px;
                    background-color: var(--color-product);
                    height: 25%;
                    font-size: 1rem;
                    color: var(--color-white);

                }

                .productoDescripcion :first-child {
                    font-family: "Black";
                    text-wrap: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .productoDescripcion :nth-child(2) {
                    font-family: "Light";
                    font-size: 1.1rem
                }

                .productoDescripcion button {
                    position: absolute;
                    background-color: var(--color-gray);
                    color: var(--color-white);
                    border: none;
                    border-radius: 25px;
                    padding-inline: 0.7rem;
                    padding-block: 0.2rem;
                    font-size: 1rem;
                    right: 1rem;
                    bottom: 0.6rem;
                    transition: 0.2s;
                }

                .productoDescripcion button:hover {
                    background-color: var(--color-white);
                    color: var(--color-gray);
                    scale: 1.1;
                    cursor: pointer;
                }
            </style>
            <div class="producto">
                <div class="productoImagen">
                    <img class="imgProduct" src="${this.getAttribute("imagen")}" alt="">
                </div>
                <div class="productoDescripcion">
                    <p class="nameProduct">${this.getAttribute("nombre")}</p>
                    <p class="priceProduct">${this.getAttribute("precio")}</p>
                    <button id="addToCarritoButton">Agregar</button>
                </div>
            </div>
        `

        let button = this.shadowRoot.querySelector("#addToCarritoButton")
        button.addEventListener("click", MyProduct.addToCarrito)
    }
}

customElements.define('my-product', MyProduct)