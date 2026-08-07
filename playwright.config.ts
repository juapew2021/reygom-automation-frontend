/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';

/**
 * Configuración de Playwright
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Carpeta raíz de pruebas
  testDir: './tests',

  // Ejecutar pruebas en paralelo
  fullyParallel: true,

  // Evitar que se suba código con test.only en CI
  forbidOnly: !!process.env.CI,

  // Reintentos en CI
  retries: process.env.CI ? 2 : 0,

  // Número de workers en CI
  workers: process.env.CI ? 1 : undefined,

  // Reporte en HTML
  reporter: 'html',

  // Configuración compartida
  use: {
    trace: 'on-first-retry',
  },

  // Proyectos personalizados
  projects: [
    {
      name: 'test-desarrollo',
      testDir: './tests/test-desarrollo',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'test-produccion',
      testDir: './tests/test-produccion',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  // Servidor local opcional
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

