import { Module } from '@nestjs/common';
import { EventController } from "../controllers/event.controller";
import { EventsService } from "../components/event.service";

@Module({
    controllers: [EventController],
    components: [EventsService]
})
export class EventModule {}