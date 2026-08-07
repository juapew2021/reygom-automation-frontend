import { test, expect } from '@playwright/test';
import { datos } from '../../data/produccion';
test('test', async ({ page }) => {
  await page.goto(datos.url);
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill(datos.login.usuario);
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(datos.login.password);
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'Eliminar' }).nth(1).click();
  await page.getByRole('button', { name: 'Confirmar' }).click();
  await page.getByText('Lead eliminado correctamente').click();
});