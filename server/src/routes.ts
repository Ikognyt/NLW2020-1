import express from 'express';

// Import from Controllers
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController'

// index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// Routes ()
routes.get('/items', itemsController.index);


routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;