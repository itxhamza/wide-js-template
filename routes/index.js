let route = {};

route.get = (req, res) => {
  res.status(201).send({
    status: 201,
    message: "Get Method",
  });
};

route.post = (req, res) => {
  res.status(201).send({
    status: 201,
    message: "Post Method",
  });
};

route.put = (req, res) => {
  res.status(201).send({
    status: 201,
    message: "Put Method",
  });
};

route.destroy = (req, res) => {
  res.status(201).send({
    status: 201,
    message: "Delete Method",
  });
};

route.middleware = (req, res, next) => {
  // This Route Middleware Code Will be Here
  next();
};

module.exports = route;
