import { test, expect } from '@playwright/test';

test('Eliminar inmueble y validar mensaje', async ({ page }) => {
  await page.goto('https://crm-dev.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('QAOpsAdmin2026');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByPlaceholder('Buscar por título, referencia').click();
  await page.getByPlaceholder('Buscar por título, referencia').fill('piso para borrar');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByRole('button', { name: 'Eliminar' }).click(); // Espera 1 segundo para que el diálogo se procese
  
  await expect(page.getByText('Inmueble eliminado correctamente.')).toBeVisible();
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByPlaceholder('Buscar por título, referencia').click();
  await page.getByPlaceholder('Buscar por título, referencia').fill('piso para borrar');
  await expect(page.getByText('Mostrando 0 de 11 inmuebles.')).toBeVisible();
  
  await page.close();
});

