import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { CreateVehicleRequest } from 'interfaces/CreateVehicleRequest';
import { VehicleSchema } from 'src/interfaces/VehicleSchema';
import { fetchVehicles } from '../utils/miscellaneous';

export default async ({ body }: Request<{}, {}, CreateVehicleRequest>, res: Response) => {
	await DbClient.db().insertOne({
		...body,
		createdAt: Date.now(),
		updatedAt: Date.now(),
	});

	const vehicles = await fetchVehicles();

	return res.json({ vehicles });
};
