const _ = require("lodash");

const isAuthor = false;
const isInFocus = true;


const classNames = (classObject) => {
  return _.chain(classObject)
    .map((value, index) => value ? index : null)
    .compact()
    .join(" ")
    .value()
}

const liClass = classNames({
  item: true,
  active: isAuthor,
  "item-highlighted": isInFocus,
});

console.log(liClass);
