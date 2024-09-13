import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { CreateVehicleRequest } from 'interfaces/CreateVehicleRequest';

export default async ({ body }: Request<{}, {}, CreateVehicleRequest>, res: Response) => {
	await DbClient.db().insertOne({
		...body,
		createdAt: Date.now(),
		updatedAt: Date.now(),
	});

	return res.status(201).end();
};
