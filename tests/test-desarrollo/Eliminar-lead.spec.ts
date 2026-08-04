import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://crm-dev.reygom.com/');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'Usuario' }).fill('admin');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('QAOpsAdmin2026');
  await page.getByRole('button', { name: 'INGRESAR AL SISTEMA' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.locator('div').filter({ hasText: /^👤 cliente nuevo pruebaContactado$/ }).getByRole('heading').click();
  await page.locator('.px-5.py-2.rounded.font-bold.transition.bg-red-700').first().click();
  await page.getByRole('button', { name: 'Confirmar' }).click();
  await page.getByText('Lead eliminado correctamente').click();
  await expect(page.getByText('Lead eliminado correctamente')).toBeVisible();
  await page.close();
});