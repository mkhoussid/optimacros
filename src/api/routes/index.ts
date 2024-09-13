import { default as vehicleRoutes } from './vehicles';
import { Express } from 'express';

export const registerRoutes = (app: Express) => {
	app.use('/api/vehicles', vehicleRoutes);

	app.get('/health', (req, res) => {
		return res.json({ msg: 'All good!' });
	});
};
