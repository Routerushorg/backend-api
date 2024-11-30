require("dotenv").config({ path: "env/.env" });
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: "0.0.0.0",
  });

  server.route(routes);

  server.table().forEach((route) => {
    console.log(route.method.toUpperCase(), route.path);
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

init();
