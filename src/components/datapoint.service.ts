import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { getEntityManager } from "typeorm";
import { Datapoint } from "../entities/datapoint.entity";
var Guid = require("guid");

@Component()
export class DatapointsService {
    
    async getAllDatapoints() {
         // get a datapoint repository to perform operations with datapoint
        const datapointRepository = getEntityManager().getRepository(Datapoint);
    
        // load a datapoint by a given datapoint id
        const datapoints = await datapointRepository.find();
        
        return Promise.resolve(datapoints);
    }

    async getDatapoint(id: string) {
        // get a datapoint repository to perform operations with datapoint
        const datapointRepository = getEntityManager().getRepository(Datapoint);

        const datapoint = await datapointRepository.findOneById(id);
        if (!datapoint) {
            throw new HttpException("datapoint not found", 404);
        }
        return Promise.resolve(datapoint);
    }
    
    async addDatapoint(datapointBody: any) {
        const datapointRepository = getEntityManager().getRepository(Datapoint);
        
        let datapoint = new Datapoint();
        datapoint.id = Guid.create().value;
        datapoint.date = datapointBody.date;
        datapoint.value = datapointBody.value;

        let savedDatapoint = await datapointRepository.persist(datapoint);

        return Promise.resolve(savedDatapoint);
    }

    async editDatapoint(id: string, datapointBody: any) {
        const datapointRepository = getEntityManager().getRepository(Datapoint);
        
        const datapoint = await datapointRepository.findOneById(id);
        
        datapoint.date = datapointBody.date;
        datapoint.value = datapointBody.value;

        let savedDatapoint = await datapointRepository.persist(datapoint);

        return Promise.resolve(savedDatapoint);
    }

    async deleteDatapoint(id: string) {
        const datapointRepository = getEntityManager().getRepository(Datapoint);
        const datapoint = await datapointRepository.findOneById(id);

        if (!datapoint) {
            throw new HttpException("datapoint not found", 404);
        }

        let savedDatapoint = await datapointRepository.remove(datapoint);

        return Promise.resolve();
    }
}