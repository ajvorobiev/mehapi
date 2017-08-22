import { Middleware, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Middleware()
export class LoggingMiddleware implements NestMiddleware {
    resolve(): (req: Request, res: Response, next) => void {
        return (req: Request, res: Response, next) => {
            console.log('Incoming Request: [' + req.method + '] ' + req.route.toString());
            next();
            console.log('Completed Request: [' + req.method + '] ' + req.route.toString() + ' ' + res.statusCode);
        }
    }
}