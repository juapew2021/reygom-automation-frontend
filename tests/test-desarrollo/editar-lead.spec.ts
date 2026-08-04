import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://crm-dev.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('QAOpsAdmin202');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('heading', { name: '👤 fghfgh' }).click();
  await page.locator('div:nth-child(5) > .space-y-3 > .flex > .px-5.py-2.rounded.font-bold.transition.bg-blue-600').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mmmiguelmurillo20@gmail.com');
  await page.getByRole('combobox').first().selectOption('Contactado');
  await page.getByRole('button', { name: 'Guardar cambios' }).click();
  await page.getByText('Lead actualizado correctamente').click();
  await expect(page.getByText('Lead actualizado correctamente')).toBeVisible();
  await page.close();
});