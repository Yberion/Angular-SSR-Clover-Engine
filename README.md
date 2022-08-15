# Angular-SSR-Clover-Engine

:warning: Clover Engine is still experimental :warning:

:warning: There is a memory leak on `jsdom` used by Clover Engine:

- https://github.com/angular/universal/issues/2733
- https://github.com/jsdom/jsdom/issues/3408
- https://github.com/angular/universal/blob/main/modules/common/clover/server/src/server-engine.ts#L76

Angular SSR implementation using Clover Engine:

-  :white_check_mark: `Express`
-  :white_check_mark: `Fastify`
    - It seems that we explicitly need to indicate that the response type is `text/html`
