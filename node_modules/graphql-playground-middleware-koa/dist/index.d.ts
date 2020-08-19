import { Context } from 'koa';
import { MiddlewareOptions } from 'graphql-playground-html';
export declare type KoaPlaygroundMiddleware = (ctx: Context, next: () => void) => void;
export declare type Register = (options: MiddlewareOptions) => KoaPlaygroundMiddleware;
declare const koa: Register;
export default koa;
