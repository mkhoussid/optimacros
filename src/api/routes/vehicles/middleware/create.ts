import { Request, Response } from 'express';
import { VehicleField } from '../../../../enums/VehicleField';
import { CreateVehicleRequest } from 'interfaces/CreateVehicleRequest';
import { DoneFunction } from 'interfaces/DoneFunction';
import { RequestError } from 'interfaces/RequestError';

export default (req: Request<{}, {}, CreateVehicleRequest>, res: Response<RequestError>, done: DoneFunction) => {
	const missingFields = Object.values(VehicleField).filter((field) => typeof req.body?.[field] === 'undefined');

	if (missingFields.length) {
		return res.status(400).json({ message: `Missing fields: ${String(missingFields)}` });
	}

	done();
};
