# Angular-SSR-Clover-Engine

Angular SSR implementation using Clover Engine:

-  :white_check_mark: `Express`
-  :large_orange_diamond: `Fastify`
    - It looks like `server.get('*', ...` does not work anymore on newer version of Fastify (I never got it to work with older versions either anyway)
    - We can navigate when starting from `/`, but if we do a reload (`F5`) when we're on another route like `/test`, we'll get a 404 error somehow
    - It seems that we explicitly need to indicate that the response type is `text/html`
