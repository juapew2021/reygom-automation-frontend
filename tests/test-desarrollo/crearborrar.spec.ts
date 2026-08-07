import { test, expect } from '@playwright/test';
import { datos } from '../../data/config';

test('test', async ({ page }) => {
  const tituloBorrar = `${datos.inmueble.tituloBorrar}-${Date.now()}`;
  await page.goto(datos.url);
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill(datos.login.usuario);
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(datos.login.password);
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Inmuebles', exact: true }).click();
  await page.getByRole('link', { name: 'Publicar inmueble' }).click();
  await page.getByRole('textbox', { name: 'Título del inmueble' }).click();
  await page.getByRole('textbox', { name: 'Título del inmueble' }).fill(tituloBorrar);
  await page.getByRole('spinbutton', { name: 'Precio' }).click();
  await page.getByRole('spinbutton', { name: 'Precio' }).fill(datos.inmueble.precio);
  await page.locator('select[name="property_type"]').selectOption(datos.inmueble.tipoPropiedad);
  await page.locator('select[name="operation_type"]').selectOption(datos.inmueble.tipooperacion);
  await page.locator('select[name="status"]').selectOption(datos.inmueble.estado);
  await page.getByRole('textbox', { name: 'Ciudad o municipio' }).click();
  await page.getByRole('textbox', { name: 'Ciudad o municipio' }).fill(datos.inmueble.ciudad);
  await page.getByRole('textbox', { name: 'Provincia' }).click();
  await page.getByRole('textbox', { name: 'Provincia' }).fill(datos.inmueble.provincia);
  await page.getByRole('spinbutton', { name: 'Habitaciones' }).click();
  await page.getByRole('spinbutton', { name: 'Habitaciones' }).fill(datos.inmueble.habitaciones);
  await page.getByRole('spinbutton', { name: 'Baños' }).click();
  await page.getByRole('spinbutton', { name: 'Baños' }).fill(datos.inmueble.banos);
  await page.getByRole('spinbutton', { name: 'Metros construidos' }).click();
  await page.getByRole('spinbutton', { name: 'Metros construidos' }).fill(datos.inmueble.metros);
  await page.getByRole('button', { name: 'Publicar inmueble' }).click();
  await page.getByText('Inmueble creado correctamente').click();
  await expect(page.getByText('Inmueble creado correctamente. Ya puedes subir sus fotografías')).toBeVisible();
  await page.getByRole('link', { name: 'Inmuebles', exact: true }).click();
  const inmuebleCreado = page.getByRole('heading', { name: tituloBorrar }).first();
  await expect(inmuebleCreado).toBeVisible();
  await inmuebleCreado.click();
  const botonEliminar = page.getByRole('button', { name: 'Eliminar' }).first();
  await expect(botonEliminar).toBeVisible({ timeout: 15000 });

  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  await botonEliminar.click();

  const mensajeEliminado = page.getByText(/Inmueble eliminado correctamente/i).first();
  await expect(mensajeEliminado).toBeVisible({ timeout: 20000 });

  await page.getByRole('link', { name: 'Inmuebles', exact: true }).click();
  await page.waitForTimeout(5000);
  await expect(page.locator('body')).not.toContainText(tituloBorrar, { timeout: 30000 });
  await page.close();
})