import { DoneFunction } from 'interfaces/DoneFunction';
import { getVehicleId } from '../utils/miscellaneous';
import { DeleteVehicleRequest } from 'interfaces/DeleteVehicleRequest';
import { Request, Response } from 'express';
import { RequestError } from 'interfaces/RequestError';
import { isValidObjectId } from '../../../../utils/db';

export default (req: Request<{}, {}, DeleteVehicleRequest>, res: Response<RequestError>, done: DoneFunction) => {
	const vehicleId = getVehicleId(req as Request<DeleteVehicleRequest>);

	if (!vehicleId || !isValidObjectId(vehicleId)) {
		return res.status(400).json({ message: `\`vehicleId\` was not provided or is invalid` });
	}

	done();
};
