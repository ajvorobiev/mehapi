import * as express from 'express';
var bodyParser = require('body-parser')
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { createConnection, getEntityManager } from "typeorm";
import "reflect-metadata";
import { ServerInfo } from "./entities/serverinfo.entity";

createConnection().then(async connection => {

    const serverInfoRepository = getEntityManager().getRepository(ServerInfo);

    let info = await serverInfoRepository.findOneById(1);

    if(!info) {
        info = new ServerInfo();
        info.name = "mehapi"
        info.version = "0.1.0"
    }

    info.bootTime = new Date();

    await serverInfoRepository.persist(info);

    const instance = express();
    instance.use(bodyParser.json());

    const app = NestFactory.create(ApplicationModule, instance);
    app.listen(3000, () => console.log('Application is listening on port 3000.'));
}).catch(error => console.log("TypeORM connection error: # ", error));