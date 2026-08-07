import { test, expect } from '@playwright/test';
import { datos } from '../../data/config';

test('Login desarrollo', async ({ page }) => {

  await page.goto(datos.url);

  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill(datos.login.usuario);

  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(datos.login.password);

  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();

  // Esperar que cambie la URL después del login
  await expect(page).toHaveURL(/dashboard|inicio|home/i, {
    timeout: 15000
  });

  await page.close();

});