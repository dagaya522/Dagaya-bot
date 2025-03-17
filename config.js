const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "DuhznYgb#5-6iTYWYYXGd3DpkcRUta-lYAq_IB_c1Qdx9I0Z13fI",
  MONGODB: process.env.MONGODB || "mongodb://mongo:AYxouuMkYykwClbVTMevfKxuEiINZVjT@centerbeam.proxy.rlwy.net:35880",
  OWNER_NUM: process.env.OWNER_NUM || "94703995359",
};
