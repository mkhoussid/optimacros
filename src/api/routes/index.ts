import { default as vehicleRoutes } from './vehicles';
import { Express } from 'express';

export const registerRoutes = (app: Express) => {
	app.use('/api/vehicles', vehicleRoutes);

	app.get('/health', (req, res) => {
		return res.status(200).json({ msg: 'All good!' });
	});
};
