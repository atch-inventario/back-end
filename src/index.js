const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
// Configuración
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas 
const UnidadMedidaRoutes = require('./routes/UnidadMedidaRoutes');
const TipoDocumentoRoutes = require('./routes/TipoDocumentoRoutes');
const ArticuloRoutes = require('./routes/ArticuloRoutes');
const EntradaRoutes = require('./routes/EntradaRoutes');
const SalidaRoutes = require('./routes/SalidaRoutes');
const InventarioRoutes = require('./routes/InventarioRoutes');
app.use('/api/unidades-medida', UnidadMedidaRoutes);
app.use('/api/tipos-documento', TipoDocumentoRoutes);
app.use('/api/articulos', ArticuloRoutes);
app.use('/api/entradas', EntradaRoutes);
app.use('/api/salidas', SalidaRoutes);
app.use('/api/inventario', InventarioRoutes);

// Servidor
const startServer = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync(); //    { force: true }
      app.listen(PORT, () => {
        console.log(`\nServidor corriendo en http://localhost:${PORT}\n`);
      });
    } catch (error) {
      console.error( error);
    }
};startServer();



/*--------------------------------------------------------/•/
npm init -y
npm install sqlite3 sequelize express cors
npm list --depth=0
/•-------------------------------------------------------/*/