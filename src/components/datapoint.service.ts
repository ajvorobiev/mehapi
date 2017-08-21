import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { getEntityManager } from "typeorm";
import { Datapoint } from "../entities/datapoint.entity";

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

        const datapoint = await datapointRepository.find((datapoint) => datapoint.id === id);
        if (!datapoint) {
            throw new HttpException("datapoint not found", 404);
        }
        return Promise.resolve(datapoint);
    }
    
    async addDatapoint(datapoint) {
        const datapointRepository = getEntityManager().getRepository(Datapoint);
        
        let savedDatapoint = await datapointRepository.persist(datapoint);

        return Promise.resolve(savedDatapoint);
    }
}