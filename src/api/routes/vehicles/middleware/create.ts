import { Request, Response } from 'express';
import { VehicleField } from '../../../../enums/VehicleField';
import { CreateVehicleRequest } from 'interfaces/CreateVehicleRequest';
import { DoneFunction } from 'interfaces/DoneFunction';
import { RequestError } from 'interfaces/RequestError';

export default (req: Request<{}, {}, CreateVehicleRequest>, res: Response<RequestError>, done: DoneFunction) => {
	const errors: string[] = [];

	Object.values(VehicleField).forEach((field) => {
		if (typeof req.body?.[field] === 'undefined' || !req.body?.[field as string]?.trim()) {
			errors.push(field);
		}
	});

	const { year, price } = req.body;

	if (!+year) {
		errors.push(VehicleField.Year);
	}

	if (!+price) {
		errors.push(VehicleField.Price);
	}

	if (errors.length) {
		return res.status(400).json({ errors: [...new Set(errors)] });
	}

	done();
};
