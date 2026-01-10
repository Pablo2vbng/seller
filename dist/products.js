var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ARRAY TIPADO
let allProducts = [];
console.log("Conectando...");
//LLAMADA A LA API
const apiCall = () => __awaiter(void 0, void 0, void 0, function* () {
    //PRIMERA RESPUESTA
    const response = yield fetch("https://dummyjson.com/products");
    console.log(response);
    //CREAMOS OBJETO
    const data = yield response.json();
    console.log(data);
    //ARRAY
    allProducts = data.products;
    showProducts();
});
//PINTAR PRODUCTOS EN PANTALLA
const showProducts = () => {
    //CAPTURAMOS EL DIV
    const productCards = document.getElementById("productCards");
    //VACIAMOS LA PRIMERA VEZ
    productCards.innerHTML = "";
    //RECORREMOS EL ARRAY DE PRODUCTOS PARA PINTARLOS
    allProducts.forEach(product => {
        productCards.innerHTML += `<div class="card flex-style products-section-cards-card" style="width: 18rem;">
                                        <img src="${product.thumbnail}" class="card-img-top products-section-cards-card__img" alt="${product.title}">
                                        <div class="card-body">
                                            <h5 class="card-title products-section-cards-card__h5">${product.title}</h5>
                                                <p class="card-text" products-section-cards-card__p>${product.description}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item products-section-cards-card__li">${product.price} €</li>
                                        </ul>
                                        <div class="card-body">
                                            <button class="card-link products-section-cards-card__btn">AÑADIR A LA CESTA</button>
                                        </div>
                                    </div>`;
    });
};
// BUSCADOR DE PRODUCTOS
const productsForm = document.getElementById("productsForm");
const searchProducts = (e) => {
    e.preventDefault();
    // PREPARAR DATOS
    const foundProducts = [];
    const inputCard = document.getElementById("inputCard");
    const inputCardValue = inputCard.value.toLowerCase();
    // DONDE PINTAMOS
    const productCards = document.getElementById("productCards");
    //BÚSQUEDA  
    for (let product of allProducts) {
        if (product.title.toLowerCase().includes(inputCardValue)) {
            foundProducts.push(product);
        }
    }
    // PINTAR LOS PRODUCTOS
    productCards.innerHTML = "";
    if (foundProducts.length > 0) {
        foundProducts.forEach(p => {
            productCards.innerHTML += `<div class="card flex-style products-section-cards-card" style="width: 18rem;">
                                        <img src="${p.thumbnail}" class="card-img-top products-section-cards-card__img" alt="${p.title}">
                                        <div class="card-body">
                                            <h5 class="card-title products-section-cards-card__h5">${p.title}</h5>
                                                <p class="card-text" products-section-cards-card__p>${p.description}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item products-section-cards-card__li">${p.price} €</li>
                                        </ul>
                                        <div class="card-body">
                                            <button class="card-link products-section-cards-card__btn">AÑADIR A LA CESTA</button>
                                        </div>
                                    </div>`;
        });
    }
    else {
        const spanNoTfound = document.createElement("span");
        spanNoTfound.className = "products-section-cards-card__span";
        spanNoTfound.innerText = "Sin productos";
        productCards.appendChild(spanNoTfound);
    }
};
apiCall();
productsForm.addEventListener("submit", searchProducts);
export {};
//# sourceMappingURL=products.js.map