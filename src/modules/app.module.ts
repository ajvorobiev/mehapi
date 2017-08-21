import { Module } from '@nestjs/common';
import { DatapointController } from "../controllers/datapoint.controller";

@Module({
    controllers: [DatapointController],
})
export class ApplicationModule {}