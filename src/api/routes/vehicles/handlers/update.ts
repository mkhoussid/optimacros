import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { UpdateVehicleRequest } from 'interfaces/UpdateVehicleRequest';
import { ObjectId } from 'mongodb';
import { VehicleSchema } from 'src/interfaces/VehicleSchema';
import { fetchVehicles } from '../utils/miscellaneous';

export default async ({ body: { vehicleId, ...fields } }: Request<{}, {}, UpdateVehicleRequest>, res: Response) => {
	if (Object.keys(fields).length) {
		await DbClient.db().findOneAndUpdate(
			{ _id: new ObjectId(vehicleId) },
			{
				$set: {
					updatedAt: Date.now(),
					...fields,
				},
			},
		);
	}

	const vehicles = await fetchVehicles();

	return res.json({ vehicles });
};
