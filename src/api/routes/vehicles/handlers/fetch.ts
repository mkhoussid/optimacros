import { DbClient } from '../../../../db/client';
import { Request, Response } from 'express';
import { GetVehiclesRequest } from 'interfaces/GetVehiclesRequest';
import { VehicleSchema } from 'interfaces/VehicleSchema';
import { fetchVehicles } from '../utils/miscellaneous';

export default async (
	{ query: { limit } }: Request<{}, {}, {}, Omit<GetVehiclesRequest, 'limit'> & { limit: string }>,
	res: Response<{ vehicles: VehicleSchema[] }>,
) => {
	const vehicles = await fetchVehicles({ limit: +(limit as string) });

	return res.json({ vehicles });
};
