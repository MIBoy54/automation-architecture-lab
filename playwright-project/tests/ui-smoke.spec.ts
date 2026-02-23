import { test, expect } from '@playwright/test';

test('UI Smoke - Cypress Kitchen Sink loads', async ({ page }) => {
  await page.goto('https://example.cypress.io/');
  await expect(page.getByText('Kitchen Sink')).toBeVisible();
});
