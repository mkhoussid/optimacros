import { Request, Response } from 'express';
import { RequestError } from 'interfaces/RequestError';
import { UpdateVehicleRequest } from 'interfaces/UpdateVehicleRequest';
import { VehicleField } from '../../../../enums/VehicleField';
import { getVehicleId } from '../utils/miscellaneous';
import { DoneFunction } from 'interfaces/DoneFunction';
import { isValidObjectId } from '../../../../utils/db';
import { ObjectId } from 'mongodb';

export default (req: Request<{}, {}, UpdateVehicleRequest>, res: Response<RequestError>, done: DoneFunction) => {
	const vehicleId = getVehicleId(req.body as { vehicleId?: ObjectId });

	if (!vehicleId || !isValidObjectId(vehicleId)) {
		return res.json({ message: `\`vehicleId\` was not provided or is invalid` });
	}

	// TODO, decompress and abstract
	const errors: { _id: string; fieldErrors: string[] }[] = [{ _id: vehicleId as string, fieldErrors: [] }];

	Object.entries(req.body).forEach(([field, value]) => {
		if (!value?.trim()) {
			errors[0].fieldErrors.push(field);
		}

		if ([VehicleField.Price, VehicleField.Year].includes(field as VehicleField) && !+value) {
			errors[0].fieldErrors.push(field);
		}
	});

	if (errors[0].fieldErrors.length) {
		return res.status(400).json({ errors: [...new Set(errors)] });
	}

	done();
};
