import {cart, adaugaInCos} from '../cart.js';

const city = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c68",
    image: 'img/malaga.jpg',
    name: 'Malaga',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!',
    rating: {
        stars: [
            `<i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star "></i>`
        ]
    },
    priceCents: 32000,
    hotels: 'https://www.booking.com/malaga',
    planes: 'https://www.kiwi.com/ro/search/results/bucuresti-romania/malaga-spania'
}, {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d8",
    image: 'img/barcelona.jpg',
    name: 'Barcelona',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!',
    rating: {
        stars: [
            `<i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>`
        ]
    },
    priceCents: 45000,
    hotels: 'https://www.booking.com/barcelona',
    planes: 'https://www.kiwi.com/ro/search/results/bucuresti-romania/barcelona-spania'
}, {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e8",
    image: 'img/madrid.jpg',
    name: 'Madrid',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!',
    rating: {
        stars: [
            `<i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>`
        ],
    },
    priceCents: 44500,
    hotels: 'https://www.booking.com/madrid',
    planes: 'https://www.kiwi.com/ro/search/results/bucuresti-romania/madrid-spania'
}];

let cityHTML = '';

city.forEach((vacante) => {
    cityHTML += `
        <div class="vacanta" data-name="${vacante.name}">
            <img src="${vacante.image}">
            <h3>${vacante.name}</h3>
            <p>${vacante.description}</p>
            <div class="star">
                ${vacante.rating.stars}
            </div>
            <h6>Pret incepand de la <strong>$${vacante.priceCents / 100}</strong></h6>
            <div class="buttons">
                <button><a href="${vacante.hotels}">Cauta Hoteluri</a></button>
                <button><a href="${vacante.planes}">Cauta zboruri</a></button>
            </div>
            <button class="js-adauga-in-cos" data-city-id="${vacante.id}">Adauga in Cos</button>
        </div>
    `;   
});

// console.log(cityHTML);

document.querySelector('.js-spania-cards').innerHTML = cityHTML;

function updateCosCantitate() {
    let cosCantitate = 0;

    cart.forEach((cosItem) => {
        cosCantitate += cosItem.cantitate;
    });

    document.querySelector('.js-cos-cantitate').innerHTML = cosCantitate; 
}

document.querySelectorAll('.js-adauga-in-cos').forEach((button) => {
    button.addEventListener('click', () => {
        const cityId = button.dataset.cityId;

        adaugaInCos(cityId);

        updateCosCantitate();
    });
});