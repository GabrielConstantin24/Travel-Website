export const cart = [];

export function adaugaInCos(cityId) {
    let matchingItem;

    cart.forEach((cosItem) => {
        if(cityId == cosItem.cityId) {
            matchingItem = cosItem;
        }
    });

    if(matchingItem) {
        matchingItem.cantitate += 1;
    } else {
        cart.push({
            cityId: cityId,
            cantitate: 1
        });  
    }   
}