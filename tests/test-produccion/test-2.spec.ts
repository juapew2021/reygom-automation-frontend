import { test, expect } from '@playwright/test';
import { datos } from '../../data/produccion';
test('test', async ({ page }) => {
  await page.goto(datos.url);
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill(datos.login.usuario);
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(datos.login.password);
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByRole('button', { name: 'Editar' }).first().click();
  await page.getByRole('spinbutton', { name: 'Precio' }).click();
  await page.getByRole('spinbutton', { name: 'Precio' }).fill(datos.inmueble.precio.toString());
  await page.locator('select[name="operation_type"]').selectOption('Venta');
  await page.getByRole('button', { name: 'Guardar cambios' }).click();
  await page.getByText('Inmueble actualizado').click();
});