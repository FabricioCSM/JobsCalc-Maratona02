const express = require('express');
const routes = express.Router();
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashBoardController = require('./controllers/DashBoardController');


//req, res
routes.get('/', DashBoardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)

routes.post('/profile', ProfileController.update)
routes.get('/profile', ProfileController.index)


module.exports = routes;