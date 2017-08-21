import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Controller('datapoint')
export class DatapointController {
    @Get()
    getAllDatapoints(req: Request, res: Response, next: NextFunction) {
        res.status(HttpStatus.OK).json([{id: 1, name: 'Test' }]);
    }

    @Get('/:id')
    getDatapoint() {}

    @Post()
    addDatapoint() {}
}