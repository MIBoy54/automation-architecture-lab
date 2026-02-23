import { test, expect } from '@playwright/test';

test('API - GitHub rate_limit contract check', async ({ request }) => {
  const res = await request.get('https://api.github.com/rate_limit', {
    headers: { 'User-Agent': 'automation-architecture-lab' },
  });

  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body).toHaveProperty('resources');
  expect(body.resources).toHaveProperty('core');

  const core = body.resources.core;
  expect(core).toHaveProperty('limit');
  expect(core).toHaveProperty('remaining');
  expect(core).toHaveProperty('reset');
});
