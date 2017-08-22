import { Controller, Get, Post, HttpStatus, Put, Delete } from '@nestjs/common';
import { Response, Param, Dependencies, Body } from '@nestjs/common';
import { DatapointsService } from "../components/datapoint.service";
import { Datapoint } from "../entities/datapoint.entity";

@Controller('datapoint')
export class DatapointController {

    constructor(private datapointsService: DatapointsService) {
        
    }

    @Get()
    async getAllDatapoints(@Response() res) {
        const datapoints = await this.datapointsService.getAllDatapoints(); 
        res.status(HttpStatus.OK).json(datapoints);
    }

    @Get('/:id')
    async getDatapoint(@Response() res, @Param('id') id) {
        const datapoint = await this.datapointsService.getDatapoint(id);
        res.status(HttpStatus.OK).json(datapoint);
    }

    @Post()
    async addDatapoint(@Response() res, @Body('datapoint') datapoint) {
    
        const msg = await this.datapointsService.addDatapoint(datapoint);
        res.status(HttpStatus.CREATED).json(msg);
    }

    @Put('/:id')
    async editDatapoint(@Response() res, @Body('datapoint') datapoint, @Param('id') id) {
        const msg = await this.datapointsService.editDatapoint(id, datapoint);
        res.status(HttpStatus.OK).json(msg);
    }

    @Delete('/:id')
    async deleteDatapoint(@Response() res, @Param('id') id) {
        const msg = await this.datapointsService.deleteDatapoint(id);
        res.status(HttpStatus.OK).json(msg);
    }
}