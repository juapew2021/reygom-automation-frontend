import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://crm-dev.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('QAOpsAdmin2026');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByPlaceholder('Buscar por título, referencia').click();
  await page.getByPlaceholder('Buscar por título, referencia').fill('piso en venta para editar');
  await page.getByRole('button', { name: 'Editar' }).click();
  await page.getByRole('spinbutton', { name: 'Precio' }).click();
  await page.getByRole('spinbutton', { name: 'Precio' }).fill('600000');
  await page.locator('select[name="operation_type"]').selectOption('Venta');
  await page.locator('select[name="status"]').selectOption('Vendido');
  await page.getByRole('button', { name: 'Guardar cambios' }).click();
  await page.getByText('Inmueble actualizado').click();
  await expect(page.getByText('Inmueble actualizado correctamente')).toBeVisible();
  await page.close();
});