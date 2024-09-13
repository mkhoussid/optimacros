import { Request, Response } from 'express';
import { RequestError } from './RequestError';
import { MethodType } from '../enums/MethodType';

export interface RouterConfig {
	method: MethodType;
	path: string;
	middleware?: (<T>(req: Request<T>) => void | Response<RequestError>)[];
	handler: <T = any, K = any>(req: Request<T>, res: Response<K>) => Promise<void | Response<K>>;
}
