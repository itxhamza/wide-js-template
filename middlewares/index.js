const { Middlewares, RequestMethods } = require("wide-js");
const AuthMiddleware = require("./auth.middleware");

module.exports = () => {
  const middlewares = new Middlewares();
  middlewares.register(AuthMiddleware).forRoutes([
    {
      path: "/*",
      method: RequestMethods.All,
    },
  ]);

  return middlewares;
};
