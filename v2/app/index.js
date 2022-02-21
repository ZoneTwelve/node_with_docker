const http = require("http");
const { createClient } = require("redis");


(async () => {
  const client = createClient( {
    url: process.env.REDIS_URL
  } );
  client.on( 'error', ( err ) => console.log(`ENV: ${process.env.REDIS_URL}`, err) );
  await client.connect();

  await client.set('count', '0');
  
  http.createServer(async (req, res) => {
    let value = parseInt(await client.get('count'));
    res.end(`Hello world, Count: ${value}`);
    await client.set( 'count', `${value+1}` );
  }).listen(9000);
})( );