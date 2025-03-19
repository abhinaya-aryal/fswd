import express from "express";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import devMiddleware from "webpack-dev-middleware";
import hotMiddleware from "webpack-hot-middleware";
import webpack from "webpack";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

dotenv.config();

const app = express();

/* eslint "global-require": "off" */

// HMR
const enableHMR = (process.env.ENABLE_HMR || "true") === "true";
if (enableHMR && process.env.NODE_ENV !== "production") {
  console.log("Adding dev middleware, enabling HMR");
  const config = require("./webpack.config.js");
  config.entry.app.push("webpack-hot-middleware/client");
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use(
    "/graphql",
    createProxyMiddleware({ target: apiProxyTarget, changeOrigin: true }),
  );
}

const api = process.env.API_ENDPOINT || "http://localhost:4000/graphql";
const port = process.env.PORT || 3000;

app.use(express.static("public"));

const env = { api };
app.get("/env.js", (_, res) => {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});

app.listen(port, () => {
  console.log(`UI running at http://localhost:${port}`);
});
