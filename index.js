var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello from CodeSandbox!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
module.exports = require("./TaiwanWeather.js");

//const TaiwanWeather = require("./TaiwanWeather.js");
//(async () => {
//  let data = await TaiwanWeather(process.env.KEY, "新北市");
//  console.log(data);
//})();
