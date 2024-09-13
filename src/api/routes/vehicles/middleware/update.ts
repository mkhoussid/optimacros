import { Request, Response } from 'express';
import { RequestError } from 'interfaces/RequestError';
import { UpdateVehicleRequest } from 'interfaces/UpdateVehicleRequest';
import { VehicleField } from '../../../../enums/VehicleField';
import { getVehicleId } from '../utils/miscellaneous';
import { DoneFunction } from 'interfaces/DoneFunction';
import { isValidObjectId } from '../../../../utils/db';

export default (req: Request<{}, {}, UpdateVehicleRequest>, res: Response<RequestError>, done: DoneFunction) => {
	const vehicleId = getVehicleId(
		req as Request<Omit<UpdateVehicleRequest, 'vehicleId'> & { vehicleId?: string }>,
	);

	if (!vehicleId || !isValidObjectId(vehicleId)) {
		return res.json({ message: `\`vehicleId\` was not provided or is invalid` });
	}

	const validFields = Object.values(VehicleField);

	const isError = !Object.keys(req.body).every(
		(field) => field === 'vehicleId' || validFields.includes(field as VehicleField),
	);

	if (isError) {
		return res.json({ message: `Not all fields were provided` });
	}

	done();
};
