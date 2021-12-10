const _ = require("lodash");

const users = [
  { id: 1, first_name: "John", status: "active" },
  { id: 2, first_name: "Jill", status: "inactive" },
];

const normalizeUsers = (users) => {
  return _.map(users, (el) => ({
    id: el.id,
    firstName: el.first_name,
    isActive: el.status === "active"
  }));
};

console.log(normalizeUsers(users));
