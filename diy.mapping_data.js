const _ = require("lodash");

const locationData = [
  { location_key: [11, 22, 33], autoassign: 1 },
  { location_key: [44, 55], autoassign: 1 },
];

const configData = [
  { dataValues: { configKey: 100 } },
  { dataValues: { configKey: 200 } },
];

const transformData = (location, config) => {
  const flatConfig = _.map(config, "dataValues");
  return _.chain(location)
    .map((item, index) => _.assign({}, item, flatConfig[index]))
    .map((item) => {
      return _.map(item.location_key, (subItem) =>
        _.assign({}, item, { location_key: subItem })
      );
    })
    .flatten()
    .value();
};

console.log(transformData(locationData, configData));
