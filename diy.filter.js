const _ = require("lodash");

const products = [
  {
    id: 1,
    name: "milk",
    price: "1$",
  },
  {
    id: 2,
    name: "bread",
    price: "2$",
  },
  {
    id: 3,
    name: "meat",
    price: "3$",
  },
];


const searchProducts = (products, searchedValue) => {
  return _.filter(products, (product) =>
  // lodash includes for compatibility with older browsers
    _.includes(product.name, searchedValue)
  );
};

console.log(searchProducts(products, "milk"));
console.log(searchProducts(products, "m"));
