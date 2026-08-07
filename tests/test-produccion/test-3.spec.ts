import { test, expect } from '@playwright/test';
import { datos } from '../../data/produccion';
test('Eliminar inmueble y validar mensaje', async ({ page }) => {
  await page.goto(datos.url);
  await page.getByRole('textbox', { name: 'Usuario' }).fill(datos.login.usuario);
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(datos.login.password);
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();

  await page.getByRole('link', { name: 'Inmuebles' }).click();

  // Capturar y aceptar el diálogo de confirmación
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  // Click en el botón Eliminar
  await page.getByRole('button', { name: 'Eliminar' }).nth(1).click();

  // Validar mensaje de éxito
  await expect(page.getByText('Inmueble eliminado correctamente')).toBeVisible();
});