const { getAllCMController, getCMByCodeController } = require('../controllers/controller.cm');

async function cmRoutes(fastify, options) {
  fastify.get('/cm', getAllCMController); // Fetch all
  fastify.get('/cm/:cm_code', getCMByCodeController); // Fetch by code
}

module.exports = cmRoutes; 