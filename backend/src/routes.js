const express = require('express');
const connection = require('./database/connection');
const OngsController = require('./controllers/OngController');
const IncidentesController = require('./controllers/IncidentController');
const ProfilesController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionsController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentesController.index);
routes.post('/incidents', IncidentesController.create);
routes.delete('/incidents/:id', IncidentesController.delete);

routes.get('/profile', ProfilesController.index);

module.exports = routes;