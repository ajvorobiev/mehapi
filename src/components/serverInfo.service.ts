import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { getEntityManager } from "typeorm";
import { ServerInfo } from "../entities/serverInfo.entity";

@Component()
export class ServerInfoService {
    
    async updateServerInfo() {
        const serverInfoRepository = getEntityManager().getRepository(ServerInfo);
        
            let info = await serverInfoRepository.findOneById(1);
        
            if (!info) {
                info = new ServerInfo();
                info.name = "mehapi"
                info.version = "0.1.0"
            }
        
            info.bootTime = new Date();
        
            serverInfoRepository.persist(info);
    }

    async getInfo() {
        const infoRepository = getEntityManager().getRepository(ServerInfo);
        const info = await infoRepository.findOneById(1);
        return Promise.resolve(info);
    }
}