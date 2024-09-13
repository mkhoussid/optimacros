import { Request, Response } from 'express';
import { DoneFunction } from 'interfaces/DoneFunction';
import { GetVehiclesRequest } from 'interfaces/GetVehiclesRequest';
import { RequestError } from 'interfaces/RequestError';

export default (req: Request<{}, {}, {}, GetVehiclesRequest>, res: Response<RequestError>, done: DoneFunction) => {
	req.query.limit ??= '20';

	done();
};
