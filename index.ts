import express from 'express';
import { config } from 'dotenv';
import { DbClient } from './src/db/client';
import { validateEnvironment } from './src/utils/server';
import { registerRoutes } from './src/api/routes';
import cors from 'cors';

config();

const PORT = +(process.env.PORT || 0);

const app = express();

const start = async () => {
	try {
		validateEnvironment();

		app.use(cors());
		app.use(express.json());

		registerRoutes(app);

		await DbClient.connectDb();

		app.listen(PORT, () => {
			console.log(['Server listening on port', PORT].join(' '));
		});
	} catch (err) {
		console.log('Unable to start server: ', err);
	}
};

start();
