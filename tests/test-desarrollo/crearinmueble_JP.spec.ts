import { test, expect } from '@playwright/test';
import { datos } from '../../data/desarrollo';

test('Crear inmueble', async ({ page }) => {

  await page.goto(datos.url);

  // Login
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill(datos.login.usuario);

  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(datos.login.password);

  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();

  // Ir a Inmuebles
  await page.getByRole('link', { name: 'Inmuebles' }).click();
  await page.getByRole('link', { name: 'Publicar inmueble' }).click();

  // Datos del inmueble
  await page.getByRole('textbox', { name: 'Título del inmueble' }).click();
  await page.getByRole('textbox', { name: 'Título del inmueble' }).fill(datos.inmueble.titulo);

  await page.getByRole('spinbutton', { name: 'Precio' }).click();
  await page.getByRole('spinbutton', { name: 'Precio' }).fill(datos.inmueble.precio.toString());

  await page.locator('select[name="property_type"]').selectOption('Local');
  await page.locator('select[name="operation_type"]').selectOption('Alquiler');
  await page.locator('select[name="status"]').selectOption('Alquilado');

  await page.getByRole('textbox', { name: 'Ciudad o municipio' }).click();
  await page.getByRole('textbox', { name: 'Ciudad o municipio' }).fill(datos.inmueble.ciudad);

  await page.getByRole('textbox', { name: 'Provincia' }).click();
  await page.getByRole('textbox', { name: 'Provincia' }).fill(datos.inmueble.provincia);

  await page.getByRole('spinbutton', { name: 'Habitaciones' }).click();
  await page.getByRole('spinbutton', { name: 'Habitaciones' }).fill(datos.inmueble.habitaciones.toString());

  await page.getByRole('spinbutton', { name: 'Baños' }).click();
  await page.getByRole('spinbutton', { name: 'Baños' }).fill(datos.inmueble.banos.toString());

  await page.getByRole('spinbutton', { name: 'Metros construidos' }).click();
  await page.getByRole('spinbutton', { name: 'Metros construidos' }).fill(datos.inmueble.metros.toString());

  await page.getByRole('textbox', { name: 'Describe la vivienda' }).click();
  await page.getByRole('textbox', { name: 'Describe la vivienda' }).fill(datos.inmueble.descripcion);

  await page.getByRole('button', { name: 'Publicar inmueble' }).click();

  await expect(
    page.getByText('Inmueble creado correctamente. Ya puedes subir sus fotografías')
  ).toBeVisible();

  await page.close();
});