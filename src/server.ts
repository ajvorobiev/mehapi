import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { createConnection } from "typeorm";
import "reflect-metadata";

createConnection().then(async connection => {

    const instance = express();
    instance.use(bodyParser.json());

    const app = NestFactory.create(ApplicationModule);
    app.listen(3000, () => console.log('Application is listening on port 3000.'));

}).catch(error => console.log("TypeORM connection error: ", error));