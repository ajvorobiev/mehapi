import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
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

        let constructedDatapoint = new Datapoint();
        constructedDatapoint.date = datapoint.date;
        constructedDatapoint.value = datapoint.value;

        const msg = await this.datapointsService.addDatapoint(constructedDatapoint);
        res.status(HttpStatus.CREATED).json(msg);
    }
}