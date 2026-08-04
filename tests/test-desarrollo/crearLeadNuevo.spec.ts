import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://crm-dev.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('QAOpsAdmin2026');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('textbox', { name: 'Nombre completo' }).click();
  await page.getByRole('textbox', { name: 'Nombre completo' }).fill('cliente nuevo prueba');
  await page.getByRole('textbox', { name: 'Teléfono' }).click();
  await page.getByRole('textbox', { name: 'Teléfono' }).fill('662458902');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ejemplo@domain.com');
  await page.getByRole('combobox').nth(1).selectOption('c2ef48f0-4d21-4620-8ccc-965410f1bd02');
  await page.getByRole('button', { name: 'Crear lead' }).click();
  await page.getByText('Lead creado correctamente').click();
  await expect(page.getByText('Lead creado correctamente. Ya puedes asignarle un agente')).toBeVisible();

  
});