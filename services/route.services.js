let routeServices = {};

routeServices.get = (req) => {
  return {
    status: 201,
    path: req.fullPath,
    parsedURL: req._parsedUrl,
    query: req.query,
    params: req.params,
  };
};

module.exports = routeServices;
