import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { DeleteVehicleRequest } from 'interfaces/DeleteVehicleRequest';
import { ObjectId } from 'mongodb';
import { VehicleSchema } from 'src/interfaces/VehicleSchema';

export default async ({ query: { vehicleId } }: Request<{}, {}, {}, DeleteVehicleRequest>, res: Response) => {
	await DbClient.db().findOneAndDelete({ _id: new ObjectId(vehicleId) });

	// TODO move to own utility method
	const vehicles = await DbClient.db().find<VehicleSchema>({}).sort({ _id: -1 }).toArray();

	return res.json({ vehicles });
};
