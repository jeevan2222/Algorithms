const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.49, quantity: 13},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
];

let groupedProducts = shoppingCart.reduce((products, curr) => {
    let name = curr.name;
    if (!products[name]) {
        products[name] = [];
    }
    products[name].push(curr);
    return products; 
}, {});

console.log(groupedProducts);
