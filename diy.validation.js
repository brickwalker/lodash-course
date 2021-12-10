const _ = require("lodash");

const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};


const transformErrors = (input) => {
  return _.map(input, (value, key) => {
    return _.upperFirst(key) + ": " +
      _.chain(value.errors)
        .map("message")
        .join(", ")
        .value()
  });
};

console.log(transformErrors(backendErrors));
