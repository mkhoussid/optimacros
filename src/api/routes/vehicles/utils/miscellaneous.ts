import { Request } from 'express';

export const getVehicleId = (req: Request<{}, {}, { vehicleId?: string }>) => req.body.vehicleId;

export const withTryCatch = <T>(cb: (...args: any[]) => any) => {
	try {
		return cb;
	} catch (err) {
		console.log('error caught: ', err);

		throw err;
	}
};
