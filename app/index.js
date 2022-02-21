const http = require("http");
const PORT = (parseInt(process.env.PORT) || 9000);
const { createClient } = require('redis');

(async () => {
  const client = createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');

  http.createServer( (req, res) => {
    console.log(`[HTTP] ${(req.method+"    ").substr(0,6)} ${req.url}`);
    res.end(`Hello World!\n`);
  } ).listen( PORT, () => {
    console.log("Server is ready");
  } );
})();

