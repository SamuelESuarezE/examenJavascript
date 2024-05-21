



export class CarritoProduct extends HTMLElement {
    nombre
    precio
    imagen

    constructor() {
        super()

        this.render()
    }

    render() {
        this.innerHTML = /*html*/`
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    text-decoration: none;
                    box-sizing: border-box;
                    font-family: "Semibold";
                }

                .carritoProducto {
                    padding: 1vw;
                    display: grid;
                    grid-template-columns: 1.5fr 1.4fr repeat(4, 1fr);
                    grid-template-rows: 1fr;
                    height: 190px;
                    border-radius: 25px;
                    border: 1px solid var(--color-product);
                    transition: 0.2s;
                    background-color: var(--color-white);
                    align-items: center;
                    font-size: 1.7rem;
                }

                .carritoProductoImagen {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .carritoProductoImagen img {
                    width: 100%;
                    max-height: 160px;
                    object-fit: contain;
                    transition: 0.2s;
                }

                .carritoProducto p:last-child{
                    font-family: "Light";
                    font-size: 1rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .carritoProductoCantidad p:last-child {
                    max-width: 100px;
                    max-height: 2rem;
                    overflow: hidden;
                }

                .carritoProducto i {
                    display: flex;
                    justify-self: center;
                    font-size: 3.5rem;
                    color: var(--color-vine);
                    transition: 0.2s;
                }

                .carritoProducto i:hover {
                    scale: 1.2;
                    cursor: pointer;
                }
                @media (max-width: 900px) {


                        .carritoProducto {
                            position: relative;
                            padding: 4vw;
                            display: grid;
                            grid-template-rows: 1fr 1fr 1fr;
                            grid-template-columns: 1fr 1fr;
                            height: 100%;
                            border-radius: 25px;
                            border: 1px solid var(--color-product);
                            transition: 0.2s;
                            background-color: var(--color-white);
                            align-items: center;
                            font-size: 1.3rem;
                        }

                        .carritoProducto i {
                            position: absolute;
                            top: 1rem;
                            right: 1rem;
                            font-size: 2rem;
                        }

                        .carritoProducto i:hover {
                            scale: 1;
                            cursor: pointer;
                            
                        }

                        .carritoProductoImagen {
                            grid-column: span 2;
                        }
                }
            </style>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

            <div class="carritoProducto">
                <div class="carritoProductoImagen">
                    <img src="${this.getAttribute("imagen")}" alt="">
                </div>
                <div class="carritoProductoNombre">
                    <p>Nombre</p>
                    <p>${this.getAttribute("nombre")}</p>
                </div>
                <div class="carritoProductoCantidad">
                    <p>Cantidad</p>
                    <p contenteditable>1</p>
                </div>
                <div class="carritoProductoCantidad">
                    <p>Precio</p>
                    <p id="precioProductCarrito">${this.getAttribute("precio")}</p>
                </div>
                <div class="carritoProductoSubtotal">
                    <p>Subtotal</p>
                    <p>${this.getAttribute("precio")}}</p>
                </div>
                <i id="trash" class='bx bxs-trash' ></i>
            </div>
        `
        
        let deleteButton = this.querySelector("#trash")

        deleteButton.addEventListener("click", function (e) {
            e.target.parentNode.parentNode.remove()
        })

    }
}

customElements.define('carrito-product', CarritoProduct)