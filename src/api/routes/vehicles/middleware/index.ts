import { default as createMiddlware } from './create';
import { default as deleteMiddlware } from './delete';
import { default as updateMiddlware } from './update';
import { default as fetchMiddlware } from './fetch';

export const middleware = {
	create: createMiddlware,
	delete: deleteMiddlware,
	update: updateMiddlware,
	fetch: fetchMiddlware,
};
