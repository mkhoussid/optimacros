import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { GetVehiclesRequest } from 'interfaces/GetVehiclesRequest';
import { VehicleSchema } from 'interfaces/VehicleSchema';

export default async (
	{ query: { limit } }: Request<{}, {}, {}, Omit<GetVehiclesRequest, 'limit'> & { limit: string }>,
	res: Response<{ vehicles: VehicleSchema[] }>,
) => {
	const vehicles = await DbClient.db()
		.find<VehicleSchema>({})
		.limit(+(limit as string))
		.sort({ _id: -1 })
		.toArray();

	//@ts-expect-error
	return res.json({ vehicles: vehicles.map(({ _id, brand }) => ({ _id, brand })) });
};
