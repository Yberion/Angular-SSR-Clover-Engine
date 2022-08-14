import { Engine } from '@nguniversal/common/clover/server';
import { join } from 'path';
import express from 'express';

const PORT = 4200;
const DIST = join(__dirname, '../../browser');

const server = express();

server.set('views', DIST);

server.get('*.*', express.static(DIST, {
  maxAge: '1y',
  fallthrough: false
}));

const ssrEngine = new Engine();

server.get('*', (req, res, next) => {
  const baseURL =  req.protocol + '://' + req.headers.host;
  const url = new URL(req.url, baseURL);

  ssrEngine.render({
    publicPath: DIST,
    url: url.href,
    headers: req.headers,
  })
    .then(html => res.send(html))
    .catch(err => next(err));
});

server.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
