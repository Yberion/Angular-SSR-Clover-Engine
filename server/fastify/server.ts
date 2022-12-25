import { Engine } from '@nguniversal/common/clover/server';
import { join } from 'path';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';

const PORT = 4201;
const DIST = join(__dirname, '../../browser');

const server = fastify();

server.register(fastifyStatic, {
  root: DIST,
  maxAge: '1y',
  // If set to true it will create a '/' get route and we don't want that
  index: false,
  // Need to be false, else we won't be able to create a wildcard route
  wildcard: false
});

const ssrEngine = new Engine();

server.get('*', (req, res) => {
  const baseURL =  req.protocol + '://' + req.headers.host;
  const url = new URL(req.url, baseURL);

  ssrEngine.render({
    publicPath: DIST,
    url: url.href,
    headers: req.headers,
  })
    .then(html => {
      res.type('text/html').send(html);
    })
    .catch(err => console.error(err));
});

server.listen({ port: PORT }, (err, _address) => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
  if (err) throw err
});
