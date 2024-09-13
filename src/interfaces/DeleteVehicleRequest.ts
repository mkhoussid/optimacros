import { ObjectId } from 'mongodb';

export interface DeleteVehicleRequest {
	vehicleId: ObjectId;
}
