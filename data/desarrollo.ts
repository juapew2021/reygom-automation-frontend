export const datos = {
  url:  process.env.DEV_URL,

  login: {
    usuario:  process.env.DEV_USERNAME,
    password: process.env.DEV_PASSWORD,
  },

  inmueble: {
    titulo: 'chalet en venta en olleria',
    precio: 350000,
    ciudad: 'Bogotá',
    provincia: 'Cundinamarca',
    habitaciones: 3,
    banos: 2,
    metros: 120,
    descripcion: 'Prueba automática con Playwright'
  }
};