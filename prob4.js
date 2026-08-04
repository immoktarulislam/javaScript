// const restaurants = [{ name: "Chillox", rating: 4.5 },
// { name: "Sultan's Dine", rating: 4.8 }]


// function topRatedRestaurant(restaurants) {
//     if (!Array.isArray(restaurants) || restaurants.length === 0) {
//         return `Invalid`
//     }
//     let superRestro = restaurants[0];
//     for (i = 1; i < restaurants.length; i++)
//     // let restro = restaurants[i]
//     {
//         if (restaurants[i].rating > superRestro.rating) {
//             superRestro = restaurants[i];
//         }
//     }
//     return superRestro.name.toUpperCase();
// }


function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return `Invalid`
    }
    let best = restaurants[0];
    for (let item of restaurants) {
        if (item.rating > best.rating) {
            best = item;
        }
    }
    return best.name.toUpperCase();
}
console.log(topRatedRestaurant([{ name: "KFC", rating: 4.2 }, { name: "Pizza Hut", rating: 4.6 }]))
console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]))
console.log(topRatedRestaurant("restaurants"))