import { test, expect } from '@playwright/test';

test('PAGO-01 - muestra los campos del checkout', async ({ page }) => {
  await page.goto('https://minimoda-navy.vercel.app/checkout');

  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Número de tarjeta' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Vencimiento (MM/AA)' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'CVV' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Confirmar compra' })).toBeVisible();
});
