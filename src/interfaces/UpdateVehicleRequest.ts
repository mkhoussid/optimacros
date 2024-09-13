import { ObjectId } from 'mongodb';
import { CreateVehicleRequest } from './CreateVehicleRequest';

export interface UpdateVehicleRequest extends Partial<CreateVehicleRequest> {
	vehicleId: ObjectId;
}
