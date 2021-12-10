const _ = require("lodash");

const toSlug = (string) => {
  return _.chain(string)
    .toLower()
    .split(" ")
    .join("-")
    .value()
}

const slug = toSlug("This is super course");

console.log(slug);
