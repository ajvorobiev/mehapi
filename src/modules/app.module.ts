import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { HomeController } from "../controllers/home.controller";
import { DatapointModule } from "./datapoint.module";
import { LoggingMiddleware } from "../middleware/logging.middleware";
import { ServerInfoService } from "../components/serverInfo.service";
import { EventModule } from "./event.module";

@Module({
    controllers: [HomeController],
    modules: [DatapointModule, EventModule],
    components: [ServerInfoService]
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(LoggingMiddleware).forRoutes({
            path: '*', method: RequestMethod.ALL
        })
    }
}