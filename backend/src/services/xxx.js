const cron = require('node-cron');
const { Availability, Branch } = require('./models'); // Importa tus modelos de Sequelize

// Esta función creará un registro de disponibilidad para el día siguiente a la medianoche
async function crearDisponibilidad() {
  try {
    // Encuentra la última fecha registrada
    const ultimaDisponibilidad = await Availability.findOne({
      order: [['date', 'DESC']],
    });

    // Calcula la fecha del siguiente día
    let siguienteFecha;
    if (ultimaDisponibilidad) {
      siguienteFecha = new Date(ultimaDisponibilidad.date);
      siguienteFecha.setDate(siguienteFecha.getDate() + 1);
    } else {
      // Si no hay registros, establece la fecha de mañana
      siguienteFecha = new Date();
      siguienteFecha.setDate(siguienteFecha.getDate() + 1);
    }

    // Crea el registro de disponibilidad para la nueva fecha
    await Availability.create({
      date: siguienteFecha,
      // Resto de los valores por defecto o según tu lógica
      strip1: 40,
      strip2: 40,
      status: 'enabled',
      people1: 0,
      people2: 0,
      branchId: 1, // ID de la sucursal, reemplaza con el valor correcto
    });

    console.log('Registro de disponibilidad creado para', siguienteFecha);
  } catch (error) {
    console.error('Error al crear el registro de disponibilidad:', error);
  }
}

// Programa la ejecución de la función a la medianoche cada día
cron.schedule('0 0 * * *', () => {
  crearDisponibilidad();
});
