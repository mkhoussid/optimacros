import { Request } from 'express';
import { ObjectId } from 'mongodb';
import { DbClient } from 'src/db/client';
import { VehicleSchema } from 'src/interfaces/VehicleSchema';

export const getVehicleId = (obj: { vehicleId?: ObjectId | string }) => obj.vehicleId;

export const withTryCatch = <T>(cb: (...args: any[]) => any) => {
	try {
		return cb;
	} catch (err) {
		console.log('error caught: ', err);

		throw err;
	}
};

export const fetchVehicles = (args: { limit?: number } = { limit: 100 }) =>
	DbClient.db()
		.find<VehicleSchema>({})
		.sort({ _id: -1 })
		.limit(args.limit as number)
		.toArray();
