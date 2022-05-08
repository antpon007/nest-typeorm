if (process.env.NODE_ENV == 'production')
  console.log('\x1b[32m', 'EJECUTANDO EN PRODUCCIÓN', '\x1b[0m');

export const CONFIG = {
  SEED: process.env.NODE_SEED || '',
  // PUERTO: process.env.NODE_PORT,

  // SERVER_SB: process.env.NODE_SERVER_SB || "",
  // SERVER_50: process.env.NODE_SERVER_50 || "",

  // SERVER_USER_SB: process.env.NODE_SERVER_USER_SB || "",
  // SERVER_USER_50: process.env.NODE_SERVER_USER_50 || "",

  // SERVER_PASS_SB: process.env.NODE_SERVER_PASS_SB || "",
  // SERVER_PASS_50: process.env.NODE_SERVER_PASS_50 || "",

  // DATA_BASE_SB: process.env.NODE_SERVER_DB_SB || "",
  // DATA_BASE_50: process.env.NODE_SERVER_DB_50 || "",

  // DATA_BASE_MONGO: process.env.NODE_DATA_DB_MOONGO,

  // ENLACE: process.env.NODE_ENLACE,

  // ENTORNO: process.env.NODE_ENV,
};

process.env.NODE_ENV !== 'production'
  ? console.log('Variables del entorno:', { CONFIG })
  : '';
