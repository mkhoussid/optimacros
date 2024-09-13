import { Router } from 'express';
import { RouterConfig } from 'interfaces/RouterConfig';
import { middleware } from './middleware';
import { handlers } from './handlers';
import { MethodType } from '../../../enums/MethodType';
import { withTryCatch } from './utils/miscellaneous';

const router = Router();

const config = [
	{
		method: MethodType.Get,
		path: '/all',
		middleware: [middleware.fetch],
		handler: handlers.fetch,
	},
	{
		method: MethodType.Post,
		path: '/create',
		middleware: [middleware.create],
		handler: handlers.create,
	},
	{
		method: MethodType.Put,
		path: '/update',
		middleware: [middleware.update],
		handler: handlers.update,
	},
	{
		method: MethodType.Delete,
		path: '/delete',
		middleware: [middleware.delete],
		handler: handlers.delete,
	},
] as RouterConfig[];

config.forEach(({ method, path, handler, middleware = [] }) => {
	router[method](path, middleware, withTryCatch<ReturnType<typeof handler>>(handler));
});

export default router;
