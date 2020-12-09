import faker from 'faker';

console.log('Products!');
let products = '';

for(let i = 0; i < 15; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;