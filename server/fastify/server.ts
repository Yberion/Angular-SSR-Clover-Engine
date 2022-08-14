import { Engine } from '@nguniversal/common/clover/server';
import { join } from 'path';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';

const PORT = 4201;
const DIST = join(__dirname, '../../browser');

const server = fastify();

server.register(fastifyStatic, {
  root: DIST,
  maxAge: '1y'
});

const ssrEngine = new Engine();

server.get('/', (req, res) => {
  const baseURL =  req.protocol + '://' + req.headers.host;
  const url = new URL(req.url, baseURL);

  ssrEngine.render({
    publicPath: DIST,
    url: url.href,
    headers: req.headers,
  })
    .then(html => res.send(html))
    .catch(err => console.error(err));
});

server.listen({ port: PORT }, (err, address) => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
  //if (err) throw err
});
