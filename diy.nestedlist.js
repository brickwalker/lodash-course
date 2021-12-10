const _ = require("lodash");

const flatList = [
  {
    id: 1,
    name: "lvl 1 item 1",
    parentId: null,
  },
  {
    id: 2,
    name: "lvl 1 item 2",
    parentId: null,
  },
  {
    id: 3,
    name: "lvl 2 item 3",
    parentId: 1,
  },
  {
    id: 4,
    name: "lvl 3 item 4",
    parentId: 3,
  },
  {
    id: 5,
    name: "lvl 2 item 5",
    parentId: 2,
  },
];

const flatToNested = (inputObject, parentId) => {
  return _.chain(inputObject)
    .filter({ parentId })
    .map(({ id, name }) => {
      return {
        id,
        name,
        children: flatToNested(inputObject, id),
      };
    })
    .value();
};

console.log(JSON.stringify(flatToNested(flatList, null), null, 2));
