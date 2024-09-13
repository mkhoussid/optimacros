import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { DeleteVehicleRequest } from 'interfaces/DeleteVehicleRequest';
import { ObjectId } from 'mongodb';

export default async ({ body: { vehicleId } }: Request<{}, {}, DeleteVehicleRequest>, res: Response) => {
	await DbClient.db().findOneAndDelete({ _id: new ObjectId(vehicleId) });

	return res.status(204).end();
};
