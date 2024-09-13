export interface RequestError {
	message?: string;
	errors?: string[] | { _id: string; fieldErrors: string[] }[];
}
