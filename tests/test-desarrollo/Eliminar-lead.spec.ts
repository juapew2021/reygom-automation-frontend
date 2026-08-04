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
  await page.getByRole('textbox', { name: 'Nombre completo' }).fill('cliente nuevo borrar');
  await page.getByRole('textbox', { name: 'Teléfono' }).click();
  await page.getByRole('textbox', { name: 'Teléfono' }).fill('662458902');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ejemplo@domain.com');
 // await page.getByRole('combobox').nth(1).selectOption('c2ef48f0-4d21-4620-8ccc-965410f1bd02');
  await page.getByRole('button', { name: 'Crear lead' }).click();
  await page.getByText('Lead creado correctamente').click();
  await expect(page.getByText('Lead creado correctamente')).toBeVisible();  // Nos crea un lead con el nombre "cliente nuevo borrar" y nos muestra un mensaje de éxito.

  await page.getByRole('link', { name: 'Leads' }).click();
  await page.waitForLoadState('networkidle');

  const leadItem = page.getByRole('heading', { name: /cliente nuevo borrar/i }).first();
  await expect(leadItem).toBeVisible({ timeout: 15000 });
  await leadItem.click();
  await page.locator('.px-5.py-2.rounded.font-bold.transition.bg-red-700').first().click(); // Aparece el popup de confirmación para eliminar el lead
  await page.getByRole('button', { name: 'Confirmar' }).click(); // Confirmar la eliminación del lead
  await page.getByText('Lead eliminado correctamente').click(); 
  await expect(page.getByText('Lead eliminado correctamente')).toBeVisible(); // Verificar que el mensaje de éxito sea visible


  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.goto('https://crm-dev.reygom.com/leads');
  await expect(page.getByRole('heading', { name: '👤 cliente nuevo borrar' })).toHaveCount(0);
});