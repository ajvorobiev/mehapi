import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Response, Param } from '@nestjs/common';
import { ServerInfoService } from "../components/serverInfo.service";

@Controller()
export class HomeController {
    
    constructor(private infoService: ServerInfoService) {
        
    }

    @Get()
    async getVersionInformation(@Response() res) {
        const info = await this.infoService.getInfo();
        res.status(HttpStatus.OK).json(info);
    }
}