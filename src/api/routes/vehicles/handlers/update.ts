import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { UpdateVehicleRequest } from 'interfaces/UpdateVehicleRequest';
import { ObjectId } from 'mongodb';

export default async ({ body: { vehicleId, ...fields } }: Request<{}, {}, UpdateVehicleRequest>, res: Response) => {
	console.log('fields', { vehicleId, ...fields });

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

	return res.status(204).end();
};
