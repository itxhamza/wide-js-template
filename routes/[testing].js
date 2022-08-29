const { FMNode } = require("wide-js");
const routeServices = require("../services/route.services");

class Methods extends FMNode {
  get(req, res) {
    const route = routeServices.get(req);
    res.status(201).send(route);
  }

  middleware(req, res, next) {
    // Middleware Code Will Be Here
    next();
  }
}

module.exports = Methods;
