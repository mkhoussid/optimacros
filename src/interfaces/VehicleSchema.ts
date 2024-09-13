import { ObjectId } from 'mongodb';

export interface VehicleSchema {
	_id: ObjectId;
	brand: string;
	model: string;
	year: string;
	price: number;
	createdAt: string;
	updatedAt: string;
}
