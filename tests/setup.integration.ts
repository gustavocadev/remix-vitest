import { beforeEach } from 'vitest';
import * as integration from './factory';

declare module 'vitest' {
  interface TestContext {
    integration: typeof integration;
    request: Request;
  }
}

beforeEach((ctx) => {
  ctx.integration = integration;
  ctx.request = new Request('http://localhost:3000');
});
