import { VehicleField } from '../enums/VehicleField';

export interface CreateVehicleRequest {
	[VehicleField.Brand]: string;
	[VehicleField.Model]: string;
	[VehicleField.Year]: number;
	[VehicleField.Price]: number;
}
