import { config } from 'dotenv';

config();

const esProduccion = process.env.TEST_ENV === 'produccion';

export const datos = {
  url: esProduccion ? process.env.PROD_URL! : process.env.DEV_URL!,

  login: {
    usuario: esProduccion ? process.env.PROD_USERNAME! : process.env.DEV_USERNAME!,
    password: esProduccion ? process.env.PROD_PASSWORD! : process.env.DEV_PASSWORD!,
  },

  inmueble: {
    titulo: 'Chalet en venta en Ollería',
    tituloBorrar: 'piso para borrar',
    precio: '350000',
    tipoPropiedad: 'Local',
    tipooperacion: 'Alquiler',
    estado: 'Alquilado',
    ciudad: 'Bogotá',
    provincia: 'Cundinamarca',
    habitaciones: '3',
    banos: '2',
    metros: '120',
    descripcion: 'Prueba automática con Playwright',
  },
};