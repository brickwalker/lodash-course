const _ = require("lodash");

const users = [
  {
    id: 1,
    name: "John",
    isActive: true,
    likes: 110,
  },
  {
    id: 2,
    name: "Jack",
    isActive: true,
    likes: 30,
  },
  {
    id: 3,
    name: "Jill",
    isActive: false,
    likes: 130,
  },
];

const getPopularUsers = (users) => {
  return _.reject(users, (usr) => !usr.isActive || usr.likes < 100);
};

console.log(getPopularUsers(users));
