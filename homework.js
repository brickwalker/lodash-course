const _ = require("lodash");

const addProduct = (basket, newProduct) => {
  return _.concat(basket, newProduct);
};

const increaseAmount = (basket, id, amount) => {
  return _.chain(basket)
    .cloneDeep()
    .each((item) => {
      if (item.id === id) {
        item.amount += amount;
      }
    })
    .value();
};

const decreaseAmount = (basket, id, amount) => {
  return _.chain(basket)
    .cloneDeep()
    .each((item) => {
      if (item.id === id) {
        item.amount > amount ? (item.amount -= amount) : (item.amount = null);
      }
    })
    .reject({ amount: null })
    .compact()
    .value();
};

const removeById = (basket, id) => {
  return _.reject(basket, { id });
};

const getTotal = (basket) => {
  return _.reduce(basket, (sum, curr) => sum + curr.amount, 0);
};

const getTotalPrice = (basket) => {
  return _.reduce(basket, (sum, curr) => sum + curr.price * curr.amount, 0);
};

let basket = [];

basket = addProduct(basket, { id: 1, name: "Milk", amount: 1, price: 2 });
basket = addProduct(basket, { id: 2, name: "Bread", amount: 2, price: 1 });
basket = addProduct(basket, { id: 3, name: "Salami", amount: 5, price: 3 });
basket = addProduct(basket, { id: 4, name: "Poison", amount: 1, price: 10 });
console.log("PRODUCTS", basket);

basket = increaseAmount(basket, 1, 2);
console.log("INCREASE MILK BY 2", basket);

basket = decreaseAmount(basket, 3, 2);
basket = decreaseAmount(basket, 4, 2);
console.log("DECRESE SALAMI BY 2 && DECREASE POISON BELOW AMOUNT", basket);

basket = removeById(basket, 1);
console.log("REMOVE MILK", basket);

const total = getTotal(basket);
console.log("TOTAL ITEMS", total);

const totalPrice = getTotalPrice(basket);
console.log("TOTAL PRICE", totalPrice);
