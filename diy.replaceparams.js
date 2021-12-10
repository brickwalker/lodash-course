const _ = require("lodash");

const initialUrl = "/posts/:postId/comments/:commentId";

const params = [
  { from: "postId", to: 3 },
  { from: "commentId", to: 4 },
];

const replaceParams = (url, params) => {
  let newUrl = url;
  _.each(
    params,
    (param) => (newUrl = _.replace(newUrl, `:${param.from}`, param.to))
  );
  return newUrl;
};

const resultUrl = replaceParams(initialUrl, params);

console.log(resultUrl);
