import { test, expect } from '@playwright/test';

test('crear inmueble', async ({ page }) => {
  await page.goto('https://crm-dev.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('QAOpsAdmin2026');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByRole('link', { name: 'Publicar inmueble' }).click();
  await page.getByRole('textbox', { name: 'Título del inmueble' }).fill('piso en venta para editar');
  await page.getByRole('spinbutton', { name: 'Precio' }).fill('80000');
  await page.locator('select[name="property_type"]').selectOption({ label: 'Local' });
  await page.locator('select[name="operation_type"]').selectOption({ label: 'Alquiler' });
  await page.locator('select[name="status"]').selectOption({ label: 'Alquilado' });
  await page.getByRole('textbox', { name: 'Ciudad o municipio' }).fill('Ibague');
  await page.getByRole('textbox', { name: 'Provincia' }).fill('Tolima');
  await page.getByRole('spinbutton', { name: 'Habitaciones' }).fill('2');
  await page.getByRole('spinbutton', { name: 'Baños' }).fill('1');
  await page.getByRole('spinbutton', { name: 'Metros construidos' }).fill('60');
  await page.getByRole('button', { name: 'Publicar inmueble' }).click();
  await expect(page.getByText('Inmueble creado correctamente. Ya puedes subir sus fotografías')).toBeVisible();
});