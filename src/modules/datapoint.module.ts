import { Module } from '@nestjs/common';
import { DatapointController } from "../controllers/datapoint.controller";
import { HomeController } from "../controllers/home.controller";
import { DatapointsService } from "../components/datapoint.service";

@Module({
    controllers: [DatapointController],
    components: [DatapointsService]
})
export class DatapointModule {}