import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { getEntityManager } from "typeorm";
import { ServerInfoA } from "../entities/serverInfoA.entity";

@Component()
export class ServerInfoService {
    
    async updateServerInfo() {
        const serverInfoRepository = getEntityManager().getRepository(ServerInfoA);
        
            let info = await serverInfoRepository.findOneById(1);
        
            if (!info) {
                info = new ServerInfoA();
                info.name = "mehapi"
                info.version = "0.1.0"
            }
        
            info.bootTime = new Date();
        
            serverInfoRepository.persist(info);
    }

    async getInfo() {
        const infoRepository = getEntityManager().getRepository(ServerInfoA);
        const info = await infoRepository.findOneById(1);
        return Promise.resolve(info);
    }
}