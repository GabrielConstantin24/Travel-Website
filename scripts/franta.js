import {cart, adaugaInCos} from '../cart.js';

const city = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c91",
    image: 'img/paris.jpg',
    name: 'Paris',
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
    priceCents: 42000,
    hotels: 'https://www.booking.com/paris',
    planes: 'https://www.kiwi.com/ro/search/results/bucuresti-romania/paris-franta'
}, {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d1",
    image: 'img/lyon.jpg',
    name: 'Lyon',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!',
    rating: {
        stars: [
            `<i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star "></i>
            <i class="fa-solid fa-star "></i>`
        ]
    },
    priceCents: 30000,
    hotels: 'https://www.booking.com/lyon',
    planes: 'https://www.kiwi.com/ro/search/results/bucuresti-romania/lyon-franta'
}, {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e1",
    image: 'img/monte-carlo.jpg',
    name: 'Monte-Carlo',
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
    priceCents: 55000,
    hotels: 'https://www.booking.com/monte-carlo',
    planes: 'https://www.kiwi.com/ro/search/results/bucuresti-romania/casino-monte-carlo'
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

document.querySelector('.js-franta-cards').innerHTML = cityHTML;

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