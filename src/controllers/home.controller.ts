import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Response, Param } from '@nestjs/common';

@Controller()
export class HomeController {
    @Get()
    getVersionInformation(@Response() res) {
        res.status(HttpStatus.OK).json(
            [
                {
                    version: '1.0.0',
                    name: 'mehapi'
                }
            ]);
    }
}