import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://crm.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('R');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Rey');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('ReyG');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('ReyGom2026*');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByRole('button', { name: 'Editar' }).first().click();
  await page.getByRole('spinbutton', { name: 'Precio' }).click();
  await page.getByRole('spinbutton', { name: 'Precio' }).fill('100000');
  await page.locator('select[name="operation_type"]').selectOption('Venta');
  await page.getByRole('button', { name: 'Guardar cambios' }).click();
  await page.getByText('Inmueble actualizado').click();
});