import { default as createHandler } from './create';
import { default as deleteHandler } from './delete';
import { default as updateHandler } from './update';
import { default as fetchHandler } from './fetch';

export const handlers = {
	create: createHandler,
	delete: deleteHandler,
	update: updateHandler,
	fetch: fetchHandler,
};
