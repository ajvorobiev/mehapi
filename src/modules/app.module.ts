import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { DatapointController } from "../controllers/datapoint.controller";
import { HomeController } from "../controllers/home.controller";
import { DatapointsService } from "../components/datapoint.service";
import { DatapointModule } from "./datapoint.module";
import { LoggingMiddleware } from "../middleware/logging.middleware";
import { ServerInfoService } from "../components/serverInfo.service";

@Module({
    controllers: [HomeController],
    modules: [DatapointModule],
    components: [ServerInfoService]
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(LoggingMiddleware).forRoutes({
            path: '*', method: RequestMethod.ALL
        })
    }
}